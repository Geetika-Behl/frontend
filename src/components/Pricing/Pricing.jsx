import React from 'react';
import './Pricing.css';
import { Check } from "lucide-react";

const PricingCard = ({ planTitle, planPrice, planSubtitle, features, isPopular, buttonText }) => {
  return (
    <div className={`pricing-card ${isPopular ? 'popular' : ''}`}>
      {isPopular && <div className="most-popular">Most popular</div>}
      <h3 className="plan-title">{planTitle}</h3>
      <p className="plan-price">{planPrice}<span>/month</span></p>
      <p className="plan-subtitle">{planSubtitle}</p>
      <ul className="plan-features">
        {features.map((feature, index) => (
          <li key={index}> <Check className="check-icon" />{feature}</li>
        ))}
      </ul>
      <button className="plan-button">{buttonText}</button>
      <p className="no-credit">No credit card required</p>
    </div>
  );
};

const PricingComponent = () => {
  const plans = [
    {
      planTitle: 'Free Plan',
      planPrice: '₹0',
      planSubtitle: 'For General Users (Citizens)',
      features: [
        'Report submission with image upload.',
        'Location-based categorization.',
        '24/7 support.',
        'Status tracking.',
        'Receive updates on resolved issues in your area.'
      ],
      isPopular: false,
      buttonText: 'Get Started'
    },
    {
      planTitle: 'Premium Plan',
      planPrice: '₹49',
      planSubtitle: 'For Engaged Users or Small Communities',
      features: [
        'Everything in Free.',
        'Priority handling of reports.',
        'Detailed report analytics.',
        'Report history and insights.',
        'Additional map layers (e.g., pollution hotspots, traffic data).'
      ],
      isPopular: true,
      buttonText: 'Get Started'
    },
    {
      planTitle: 'Pro Plan',
      planPrice: '₹499',
      planSubtitle: 'For RWAs (Resident Welfare Associations) or NGOs',
      features: [
        'Everything in Premium.',
        'AI-based analytics.',
        'Integration with existing government systems.',
        'Bulk report submission (for RWAs or organizations).',
        'Integration with government systems or internal tools.'
      ],
      isPopular: false,
      buttonText: 'Get Started'
    }
  ];

  return (
    <div className="pricing-container">
      <h2 className="pricing-title">Simple Pricing</h2>
      <p className="pricing-description">
        Plans are designed for your cleaning/reporting app that allows users to upload pictures of issues, categorize them area-wise, and report them to authorities.
      </p>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingComponent;
