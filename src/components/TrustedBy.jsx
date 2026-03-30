import React from 'react';
import styles from './TrustedBy.module.css';

import { landingPageContent } from '../data/landingPageContent';
import { AiFillApi } from 'react-icons/ai';

const TrustedBy = () => {
    const { trustedBy } = landingPageContent;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <AiFillApi className={styles.integrationIcon} />
                <div className={styles.integrationText}>
                    {trustedBy.text} <a href={trustedBy.linkUrl} className={styles.integrationLink}>{trustedBy.linkText}</a>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
