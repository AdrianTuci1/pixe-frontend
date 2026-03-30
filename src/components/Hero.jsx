import React from 'react';
import styles from './Hero.module.css';

import { landingPageContent } from '../data/landingPageContent';
import appPreview from '../assets/home/app-preview.png';

const Hero = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.contentCol}>
                    <div className={styles.headlineWrapper}>
                        <span className={styles.headlineRow}>
                            {landingPageContent.hero.headline.part1}
                        </span>
                        <span className={`${styles.headlineRow} ${styles.headlineWhite} `}>
                            {landingPageContent.hero.headline.part2}
                        </span>
                        <span className={styles.headlineRow}>
                            {landingPageContent.hero.headline.part3}
                        </span>
                    </div>

                    <p className={styles.description}>
                        {landingPageContent.hero.description}
                    </p>

                    <a href={landingPageContent.hero.ctaUrl} className={styles.ctaButton}>
                        {landingPageContent.hero.cta}
                    </a>
                </div>

                <div className={styles.imageCol}>
                    <img
                        src={appPreview}
                        alt={landingPageContent.hero.imageAlt}
                        className={styles.previewImage}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
