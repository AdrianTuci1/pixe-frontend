import React from 'react';
import styles from './Mission.module.css';

import { landingPageContent } from '../data/landingPageContent';
import periodontalVideo from '../assets/home/periodontal.mp4';

const Mission = () => {
    const content = landingPageContent.features.periodontalStatus;

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.imageCard}>
                        <div className="pattern-mask pattern-dark mask-mission-img"></div>
                        <div className={styles.videoContainer}>
                            <video className={styles.video} autoPlay loop muted playsInline>
                                <source src={periodontalVideo} type="video/mp4" />
                                {content.imageAlt}
                            </video>
                        </div>
                    </div>
                    <div className={styles.textCard}>
                        <div className="pattern-mask pattern-dark mask-mission-text"></div>
                        <div className={styles.contentWrapper}>
                            <span className={styles.eyebrow}>{content.eyebrow}</span>
                            <h2 className={styles.heading}>{content.heading}</h2>
                            <p className={styles.text}>
                                {content.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
