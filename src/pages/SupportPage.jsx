import React from 'react';
import styles from './SupportPage.module.css';
import { FaEnvelope, FaHeadset, FaBook } from 'react-icons/fa';

const SupportPage = () => {
    return (
        <div className={styles.supportContainer}>
            <h1 className={styles.heading}>How can we help?</h1>
            <p className={styles.subheading}>Our team of experts is here to support your practice every step of the way.</p>

            <div className={styles.formContainer}>
                <form>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Full Name</label>
                        <input type="text" className={styles.input} placeholder="John Doe" />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Email Address</label>
                        <input type="email" className={styles.input} placeholder="john@example.com" />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Message</label>
                        <textarea className={styles.textarea} placeholder="How can we help you?"></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default SupportPage;
