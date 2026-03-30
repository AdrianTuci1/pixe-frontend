import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { landingPageContent } from '../data/landingPageContent';
import logo from '../assets/logo.png';

const Footer = () => {
    const { footer } = landingPageContent;

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.logo}>
                        <img src={logo} alt="Logo" className={styles.logoImage} />
                        {footer.brand}
                    </div>
                    <p style={{ color: '#888' }}>{footer.tagline}</p>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.heading}>{footer.columns.help.title}</h4>
                    {footer.columns.help.links.map(link => {
                        let path = '/';
                        if (link === 'Terms & Conditions') path = '/terms';
                        if (link === 'Privacy Policy') path = '/privacy-policy';
                        if (link === 'Support') path = '/support';
                        
                        return (
                            <Link key={link} to={path} className={styles.link}>
                                {link}
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className={styles.bottom}>
                <span className={styles.attribution}>
                    {footer.attribution} <a href={footer.attributionUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>{footer.attributionLink}</a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
