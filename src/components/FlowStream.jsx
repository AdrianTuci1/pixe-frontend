import React from 'react';
import styles from './FlowStream.module.css';

import { landingPageContent } from '../data/landingPageContent';
import aiDiagnosticsImage from '../assets/home/ai-diagnostics.png';

const FlowStream = () => {
    const content = landingPageContent.features.smartCharting;

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.card}>
                    <div className="pattern-mask pattern-dark mask-flow-card"></div>
                    <div className={styles.imageSide}>
                        <div className="pattern-mask pattern-dark mask-flow-image"></div>
                        <div className={styles.placeholderImage}>
                            <img src={aiDiagnosticsImage} alt='Smart Charting' />
                        </div>
                    </div>
                    <div className={styles.contentSide}>
                        <span className={styles.eyebrow}>{content.eyebrow}</span>
                        <h2 className={styles.heading}>{content.heading}</h2>
                        <p className={styles.text}>
                            {content.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlowStream;
