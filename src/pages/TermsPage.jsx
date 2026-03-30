import React, { useEffect } from 'react';
import styles from './LegalPage.module.css';

const TermsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.legalContainer}>
            <div className={styles.header}>
                <h1 className={styles.title}>Terms & Conditions</h1>
                <p className={styles.lastUpdated}>Last Updated: March 2024</p>
            </div>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
                    <div className={styles.sectionContent}>
                        <p>By accessing and using Pixe, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>2. Use License</h2>
                    <div className={styles.sectionContent}>
                        <p>Permission is granted to temporarily use the materials on Pixe's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                        <ul>
                            <li>Modify or copy the materials;</li>
                            <li>Use the materials for any commercial purpose;</li>
                            <li>Attempt to decompile or reverse engineer any software contained on Pixe's website;</li>
                            <li>Remove any copyright or other proprietary notations from the materials.</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>3. Disclaimer</h2>
                    <div className={styles.sectionContent}>
                        <p>The materials on Pixe's website are provided on an 'as is' basis. Pixe makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>4. Limitations</h2>
                    <div className={styles.sectionContent}>
                        <p>In no event shall Pixe or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Pixe's website.</p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>5. Governing Law</h2>
                    <div className={styles.sectionContent}>
                        <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TermsPage;
