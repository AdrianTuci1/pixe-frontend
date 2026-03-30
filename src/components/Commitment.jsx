import styles from './Commitment.module.css';

import { landingPageContent } from '../data/landingPageContent';
import restorationVideo from '../assets/home/restoration.mp4';

const Commitment = () => {
    const content = landingPageContent.features.restorativeCare;

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.textCard}>
                        <div className="pattern-mask pattern-dark mask-commitment-text"></div>
                        <div className={styles.contentWrapper}>
                            <span className={styles.eyebrow}>{content.eyebrow}</span>
                            <h2 className={styles.heading}>{content.heading}</h2>
                            <p className={styles.text}>
                                {content.description}
                            </p>
                        </div>
                    </div>
                    <div className={styles.imageCard}>
                        <div className="pattern-mask pattern-dark mask-commitment-img"></div>
                        <div className={styles.videoContainer}>
                            <video className={styles.video} autoPlay loop muted playsInline>
                                <source src={restorationVideo} type="video/mp4" />
                                {content.imageAlt}
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Commitment;
