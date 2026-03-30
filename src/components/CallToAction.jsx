import React from 'react';
import styles from './CallToAction.module.css';

import { landingPageContent } from '../data/landingPageContent';
import bottomImg from '../assets/home/bottom.png';


const CallToAction = () => {
    const content = landingPageContent.features.webCharting;

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.card}>
                    <div className="pattern-mask pattern-dark-blue mask-cta"></div>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>{content.heading}</h2>
                        <p className={styles.text}>
                            {content.description}
                        </p>
                        <a href={content.ctaUrl} className={styles.link}>{content.cta}</a>
                    </div>

                    <div className={styles.imageSide}>
                        <img src={bottomImg} alt={content.imageAlt} className={styles.image} />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CallToAction;
