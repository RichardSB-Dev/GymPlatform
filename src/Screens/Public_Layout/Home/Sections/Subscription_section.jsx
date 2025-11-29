import { useState } from "react";
import "./styles.css";

export const Subscription_section = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plansData = [
    {
      id: "basic",
      name: "Basic",
      price: "29",
      period: "month",
      popular: false,
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "Access to gym facilities",
        "Locker room access",
        "Free fitness assessment",
        "Mobile app access",
        "Standard equipment",
      ],
      limitations: ["No group classes", "No personal training"],
    },
    {
      id: "premium",
      name: "Premium",
      price: "59",
      period: "month",
      popular: true,
      description: "Most popular choice for serious fitness enthusiasts",
      features: [
        "All Basic features",
        "Unlimited group classes",
        "2 personal training sessions/month",
        "Nutrition consultation",
        "Access to all locations",
        "Guest passes (2/month)",
        "Sauna & steam room",
      ],
      limitations: [],
    },
    {
      id: "elite",
      name: "Elite",
      price: "99",
      period: "month",
      popular: false,
      description: "Ultimate experience for dedicated athletes",
      features: [
        "All Premium features",
        "Unlimited personal training",
        "Priority class booking",
        "Private locker",
        "Towel service",
        "Smoothie bar credits",
        "VIP lounge access",
        "Customized workout plans",
      ],
      limitations: [],
    },
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    // Aquí puedes agregar navegación o abrir un modal
    console.log("Selected plan:", plan);
  };

  return (
    <section className="gym-sub-section">
      <div className="gym-sub-container">
        {/* Header completo */}
        <div className="gym-sub-header">
          <span className="gym-sub-badge">MEMBERSHIP PLANS</span>
          <h2 className="gym-sub-heading">
            CHOOSE YOUR
            <br />
            <span className="gym-sub-highlight">PLAN</span>
          </h2>
          <p className="gym-sub-intro">
            Select the perfect membership plan that fits your fitness goals and
            lifestyle. All plans include flexible cancellation.
          </p>
        </div>

        {/* Layout de dos columnas */}
        <div className="gym-sub-layout">
          {/* Columna izquierda - Info estática */}
          <div className="gym-sub-sidebar">
            <div className="gym-sub-info-card">
              <h3 className="gym-sub-info-title">What's Included</h3>

              <div className="gym-sub-benefit">
                <span className="gym-sub-benefit-icon">✓</span>
                <div>
                  <h4>No Commitment</h4>
                  <p>Cancel anytime with 30 days notice</p>
                </div>
              </div>

              <div className="gym-sub-benefit">
                <span className="gym-sub-benefit-icon">✓</span>
                <div>
                  <h4>Flexible Payments</h4>
                  <p>Monthly or annual billing options</p>
                </div>
              </div>

              <div className="gym-sub-benefit">
                <span className="gym-sub-benefit-icon">✓</span>
                <div>
                  <h4>Free Trial</h4>
                  <p>7-day trial for new members</p>
                </div>
              </div>

              <div className="gym-sub-benefit">
                <span className="gym-sub-benefit-icon">✓</span>
                <div>
                  <h4>Member Support</h4>
                  <p>24/7 customer service available</p>
                </div>
              </div>

              <div className="gym-sub-promo">
                <h4>🎉 Special Offer</h4>
                <p>Get 20% off on annual plans. Limited time only!</p>
              </div>
            </div>
          </div>

          {/* Columna derecha - Cards de planes */}
          <div className="gym-sub-main">
            {plansData.map((plan) => (
              <div
                key={plan.id}
                className={`gym-sub-plan-card ${
                  plan.popular ? "gym-sub-plan-popular" : ""
                }`}
              >
                {plan.popular && (
                  <div className="gym-sub-popular-badge">Most Popular</div>
                )}

                <div className="gym-sub-plan-header">
                  <h3 className="gym-sub-plan-name">{plan.name}</h3>
                  <div className="gym-sub-plan-price">
                    <span className="gym-sub-price-symbol">$</span>
                    <span className="gym-sub-price-amount">{plan.price}</span>
                    <span className="gym-sub-price-period">/{plan.period}</span>
                  </div>
                  <p className="gym-sub-plan-desc">{plan.description}</p>
                </div>

                <div className="gym-sub-plan-features">
                  <ul className="gym-sub-features-list">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="gym-sub-feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {plan.limitations.length > 0 && (
                    <ul className="gym-sub-limitations-list">
                      {plan.limitations.map((limitation, index) => (
                        <li key={index} className="gym-sub-limitation-item">
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <button
                  className={`gym-sub-plan-btn ${
                    plan.popular ? "gym-sub-btn-popular" : ""
                  }`}
                  onClick={() => handleSelectPlan(plan)}
                >
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de FAQ o info adicional */}
        <div className="gym-sub-footer">
          <p className="gym-sub-footer-text">
            Need help choosing? <a href="#contact">Contact our team</a> for
            personalized recommendations.
          </p>
        </div>
      </div>
    </section>
  );
};
