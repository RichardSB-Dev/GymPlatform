import "./styles.css";

const LocationDetails = ({ location, onBack }) => {
  return (
    <section className="gym-details-view">
      <div className="gym-details-container">
        {/* Header completo */}
        <div className="gym-details-header">
          <button className="gym-details-back" onClick={onBack}>
            ← Back to Locations
          </button>
          <span className="gym-details-badge">LOCATION DETAILS</span>
          <h2 className="gym-details-heading">
            {location.name.toUpperCase()}{" "}
            <span className="gym-details-highlight">GYM</span>
          </h2>
        </div>

        {/* Layout de dos columnas */}
        <div className="gym-details-layout">
          {/* Columna izquierda - Info rápida */}
          <div className="gym-details-sidebar">
            <div className="gym-details-quick-info">
              <h3 className="gym-quick-title">Quick Info</h3>
              <div className="gym-quick-item">
                <span className="gym-quick-label">Status:</span>
                <span
                  className={`gym-quick-status ${
                    location.status === "open" ? "status-open" : "status-closed"
                  }`}
                >
                  {location.statusText}
                </span>
              </div>
              <div className="gym-quick-item">
                <span className="gym-quick-label">Phone:</span>
                <span className="gym-quick-value">{location.phone}</span>
              </div>
              <div className="gym-quick-item">
                <span className="gym-quick-label">Email:</span>
                <span className="gym-quick-value">{location.email}</span>
              </div>
              <button className="gym-quick-btn">📞 Call Now</button>
            </div>
          </div>

          {/* Columna derecha - Detalles completos */}
          <div className="gym-details-main">
            <div className="gym-details-box">
              <h3 className="gym-details-subtitle">📍 Address</h3>
              <p className="gym-details-text">{location.address}</p>
            </div>

            <div className="gym-details-box">
              <h3 className="gym-details-subtitle">⏰ Hours</h3>
              <p className="gym-details-text">
                {location.hours.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>

            <div className="gym-details-box">
              <h3 className="gym-details-subtitle">✨ Amenities</h3>
              <ul className="gym-details-amenities">
                {location.amenities.map((amenity, index) => (
                  <li key={index} className="gym-details-amenity">
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationDetails;
