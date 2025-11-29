import { useState } from "react";
import LocationDetails from "./Location_details";
import "./styles.css";

export const Locations_section = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locationsData = [
    {
      id: "carretera",
      name: "Carretera Masaya",
      description: "Premium facility with Olympic equipment",
      status: "open",
      statusText: "Open Now",
      address: "Plaza San Juan, Carretera Masaya, Managua",
      hours: "Mon - Fri: 5:00 AM - 11:00 PM\nSat - Sun: 7:00 AM - 9:00 PM",
      amenities: [
        "Olympic Weight Room",
        "Cardio Zone",
        "Group Classes Studio",
        "Sauna & Steam Room",
        "Locker Rooms",
        "Protein Bar",
      ],
      phone: "+505 2222-3333",
      email: "carretera@gymfitsport.com",
    },
    {
      id: "metrocentro",
      name: "Metrocentro",
      description: "Modern gym in the heart of the city",
      status: "open",
      statusText: "Open Now",
      address: "Centro Comercial Metrocentro, Managua",
      hours: "Mon - Fri: 6:00 AM - 10:00 PM\nSat - Sun: 8:00 AM - 8:00 PM",
      amenities: [
        "Modern Equipment",
        "Personal Training",
        "Yoga Studio",
        "Spinning Room",
        "Smoothie Bar",
        "Free Parking",
      ],
      phone: "+505 2222-4444",
      email: "metro@gymfitsport.com",
    },
    {
      id: "altamira",
      name: "Altamira",
      description: "Exclusive boutique fitness center",
      status: "closed",
      statusText: "Opens at 6 AM",
      address: "Residencial Altamira, Managua",
      hours: "Mon - Fri: 6:00 AM - 10:00 PM\nSat - Sun: 7:00 AM - 7:00 PM",
      amenities: [
        "VIP Lounge",
        "Personal Trainers",
        "Pilates Studio",
        "Recovery Zone",
        "Boutique Classes",
        "Juice Bar",
      ],
      phone: "+505 2222-5555",
      email: "altamira@gymfitsport.com",
    },
  ];

  if (selectedLocation) {
    return (
      <LocationDetails
        location={selectedLocation}
        onBack={() => setSelectedLocation(null)}
      />
    );
  }

  return (
    <section className="gym-locations-section">
      <div className="gym-locations-container">
        {/* Header completo */}
        <div className="gym-locations-header">
          <span className="gym-locations-badge">OUR LOCATIONS</span>
          <h2 className="gym-locations-heading">
            FIND YOUR NEAREST
            <br />
            <span className="gym-locations-highlight">GYM</span>
          </h2>
          <p className="gym-locations-intro">
            Discover our premium fitness facilities across Managua. Each
            location offers state-of-the-art equipment and expert trainers.
          </p>
        </div>

        {/* Layout de dos columnas */}
        <div className="gym-locations-layout">
          {/* Columna izquierda - Info estática */}
          <div className="gym-locations-sidebar">
            <div className="gym-locations-info-card">
              <h3 className="gym-info-title">Why Choose Us?</h3>
              <div className="gym-info-item">
                <span className="gym-info-icon">🏋️</span>
                <div>
                  <h4>Premium Equipment</h4>
                  <p>State-of-the-art machines and weights</p>
                </div>
              </div>
              <div className="gym-info-item">
                <span className="gym-info-icon">👥</span>
                <div>
                  <h4>Expert Trainers</h4>
                  <p>Certified professionals to guide you</p>
                </div>
              </div>
              <div className="gym-info-item">
                <span className="gym-info-icon">⚡</span>
                <div>
                  <h4>Flexible Hours</h4>
                  <p>Open early morning to late night</p>
                </div>
              </div>
              <div className="gym-info-item">
                <span className="gym-info-icon">🎯</span>
                <div>
                  <h4>Multiple Locations</h4>
                  <p>Find a gym near you in Managua</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Cards de locaciones */}
          <div className="gym-locations-main">
            {locationsData.map((location) => (
              <div
                key={location.id}
                className="gym-location-item"
                onClick={() => setSelectedLocation(location)}
              >
                <div className="gym-location-header">
                  <div className="gym-location-icon">📍</div>
                  <span
                    className={`gym-location-badge ${
                      location.status === "open"
                        ? "gym-location-badge-open"
                        : "gym-location-badge-closed"
                    }`}
                  >
                    {location.statusText}
                  </span>
                </div>
                <h3 className="gym-location-name">{location.name}</h3>
                <p className="gym-location-desc">{location.description}</p>
                <button className="gym-location-cta">View Details →</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
