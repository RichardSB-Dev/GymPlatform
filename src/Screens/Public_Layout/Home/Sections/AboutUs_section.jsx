import "./styles.css";

export const AboutUs_section = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Active Members" },
    { number: "3", label: "Locations" },
    { number: "50+", label: "Expert Trainers" },
  ];

  const values = [
    {
      icon: "💪",
      title: "Excellence",
      description: "We strive for the highest standards in fitness",
    },
    {
      icon: "🤝",
      title: "Community",
      description: "Building a supportive fitness family",
    },
    {
      icon: "🎯",
      title: "Results",
      description: "Your success is our priority",
    },
    {
      icon: "🔥",
      title: "Passion",
      description: "Dedicated to your fitness journey",
    },
  ];

  return (
    <section className="gym-about-section">
      <div className="gym-about-container">
        {/* Header */}
        <div className="gym-about-header">
          <span className="gym-about-badge">ABOUT US</span>
          <h2 className="gym-about-heading">
            YOUR FITNESS <span className="gym-about-highlight">PARTNER</span>
          </h2>
        </div>

        {/* Layout de dos columnas */}
        <div className="gym-about-layout">
          {/* Columna izquierda - Historia */}
          <div className="gym-about-sidebar">
            <div className="gym-about-story">
              <h3 className="gym-about-story-title">Our Story</h3>
              <p className="gym-about-story-text">
                Founded in 2014, GymFitSport began with a simple mission: to
                make premium fitness accessible to everyone in Managua.
              </p>
              <p className="gym-about-story-text">
                Today, we're proud to be the leading fitness center in
                Nicaragua, combining state-of-the-art equipment with expert
                guidance to help you achieve your goals.
              </p>
            </div>

            {/* Stats */}
            <div className="gym-about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="gym-about-stat-item">
                  <div className="gym-about-stat-number">{stat.number}</div>
                  <div className="gym-about-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha - Valores */}
          <div className="gym-about-main">
            <h3 className="gym-about-values-title">Our Values</h3>
            <div className="gym-about-values-grid">
              {values.map((value, index) => (
                <div key={index} className="gym-about-value-card">
                  <div className="gym-about-value-icon">{value.icon}</div>
                  <h4 className="gym-about-value-title">{value.title}</h4>
                  <p className="gym-about-value-desc">{value.description}</p>
                </div>
              ))}
            </div>

            {/* Mission */}
            <div className="gym-about-mission">
              <h4 className="gym-about-mission-title">Our Mission</h4>
              <p className="gym-about-mission-text">
                To empower individuals to achieve their fitness goals through
                world-class facilities, expert guidance, and an inspiring
                community atmosphere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
