import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { landingPageContent } from '../data/landingPageContent';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <img src={logo} alt="Logo" className={styles.logoImage} />
                    {landingPageContent.navbar.brand}
                </Link>
                <ul className={styles.links}>
                    {landingPageContent.navbar.links.map(link => (
                        <li key={link.name}>
                            <Link to={link.path} className={styles.link}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <a href={landingPageContent.navbar.ctaUrl} className={styles.button}>{landingPageContent.navbar.cta}</a>
            </div>
        </nav>
    );
};

export default Navbar;
