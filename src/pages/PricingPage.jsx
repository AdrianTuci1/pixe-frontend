import React, { useState } from 'react';
import styles from './PricingPage.module.css';
import { FaCheckCircle } from 'react-icons/fa';

const PricingPage = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const tiers = [
        {
            name: "Free",
            monthlyPrice: 0,
            annualPrice: 0,
            features: [
                "Maximum 5 patients",
                "1 user account",
                "Basic dental charting",
                "API access",
                "Standard support"
            ],
            buttonText: "Start for Free",
            featured: false
        },
        {
            name: "Team",
            monthlyPrice: 50,
            annualPrice: 500,
            features: [
                "Unlimited patients",
                "3 user accounts",
                "100 AI diagnosis/month",
                "API access",
                "Priority support",
                "Team collaboration tools"
            ],
            buttonText: "Join Team",
            featured: true
        },
        {
            name: "Clinic",
            monthlyPrice: 200,
            annualPrice: 2000,
            features: [
                "Unlimited patients",
                "Up to 20 user accounts",
                "Unlimited AI diagnosis",
                "API access",
                "Dedicated account manager",
                "Advanced analytics"
            ],
            buttonText: "Go Enterprise",
            featured: false
        }
    ];

    return (
        <div className={styles.pricingContainer}>
            <h1 className={styles.heading}>Simple, Transparent Pricing</h1>
            <p className={styles.subheading}>Choose the plan that's right for your practice.</p>

            <div className={styles.toggleContainer}>
                <span className={`${styles.toggleLabel} ${isAnnual ? styles.inactive : ''}`}>Monthly</span>
                <label className={styles.switch}>
                    <input
                        type="checkbox"
                        checked={isAnnual}
                        onChange={() => setIsAnnual(!isAnnual)}
                    />
                    <span className={styles.slider}></span>
                </label>
                <span className={`${styles.toggleLabel} ${!isAnnual ? styles.inactive : ''}`}>Annual (20% off)</span>
            </div>

            <div className={styles.pricingGrid}>
                {tiers.map((tier, index) => (
                    <div key={index} className={`${styles.pricingCard} ${tier.featured ? styles.featuredCard : ''}`}>
                        {tier.featured && <div className={styles.featuredBadge}>Most Popular</div>}
                        <h3 className={styles.tierName}>{tier.name}</h3>
                        <div className={styles.priceDisplay}>
                            <span className={styles.currency}>€</span>
                            <span className={styles.priceValue}>{isAnnual ? tier.annualPrice : tier.monthlyPrice}</span>
                            <span className={styles.billingPeriod}>{isAnnual ? '/year' : '/month'}</span>
                        </div>
                        <ul className={styles.featuresList}>
                            {tier.features.map((feature, fIndex) => (
                                <li key={fIndex} className={styles.featureItem}>
                                    <FaCheckCircle className={styles.checkIcon} />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className={`${styles.selectButton} ${tier.featured ? styles.featuredButton : ''}`}>
                            {tier.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingPage;
