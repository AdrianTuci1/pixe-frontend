import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';
import path from 'path';
import fs from 'fs';

// Custom Video Optimizer Plugin
function ViteVideoOptimizer() {
  return {
    name: 'vite-plugin-video-optimizer',
    async writeBundle(options, bundle) {
      const outDir = options.dir;
      const ffmpegPath = ffmpegStatic;
      ffmpeg.setFfmpegPath(ffmpegPath);

      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith('.mp4')) {
          const inputPath = path.resolve(outDir, fileName);
          // Fix: path should stay within outDir/assets (or wherever it is)
          const dirName = path.dirname(fileName);
          const baseName = path.basename(fileName);
          const compressedFileName = path.join(dirName, `comp_${baseName}`);
          const outputPath = path.resolve(outDir, compressedFileName);

          console.log(`Optimizing video: ${fileName}...`);

          await new Promise((resolve, reject) => {
            ffmpeg(inputPath)
              .outputOptions([
                '-vcodec libx264',
                '-crf 28', // Lower is better quality, 28 is a good balance
                '-preset fast',
                '-movflags +faststart', // For better web streaming
                '-acodec aac',
                '-b:a 128k'
              ])
              .on('end', () => {
                // Replace original with compressed version
                fs.renameSync(outputPath, inputPath);
                console.log(`Finished optimizing video: ${fileName}`);
                resolve();
              })
              .on('error', (err) => {
                console.error(`Error optimizing ${fileName}:`, err.message);
                reject(err);
              })
              .save(outputPath);
          });
        }
      }
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupIds: false,
              },
            },
          },
          'removeViewBox',
          'sortAttrs',
        ],
      },
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        lossless: true,
      },
      avif: {
        lossless: true,
      },
      cache: false,
      cacheLocation: undefined,
    }),
    ViteVideoOptimizer()
  ],
})
