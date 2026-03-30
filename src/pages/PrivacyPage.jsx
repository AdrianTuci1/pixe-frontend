import React, { useEffect } from 'react';
import styles from './LegalPage.module.css';

const PrivacyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.legalContainer}>
            <div className={styles.header}>
                <h1 className={styles.title}>Privacy Policy</h1>
                <p className={styles.lastUpdated}>Last Updated: March 2024</p>
            </div>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>1. Information Collection</h2>
                    <div className={styles.sectionContent}>
                        <p>We collect information that you provide directly to us, such as when you create an account, use our services, or communicate with us. This may include your name, email address, and clinical data entered into the system.</p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>2. Use of Information</h2>
                    <div className={styles.sectionContent}>
                        <p>We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Pixe and our users. We also use this information to offer you tailored content.</p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>3. Data Protection</h2>
                    <div className={styles.sectionContent}>
                        <p>We work hard to protect Pixe and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. We use encryption to keep your data private while in transit.</p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>4. Information Sharing</h2>
                    <div className={styles.sectionContent}>
                        <p>We do not share personal information with companies, organizations, or individuals outside of Pixe unless one of the following circumstances applies:</p>
                        <ul>
                            <li>With your consent;</li>
                            <li>For external processing;</li>
                            <li>For legal reasons.</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>5. Your Rights</h2>
                    <div className={styles.sectionContent}>
                        <p>You have the right to access, update, or delete your personal information at any time through your account settings or by contacting our support team.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPage;
