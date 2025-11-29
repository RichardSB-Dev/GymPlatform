import { useState } from "react";
import "./styles.css";

export const ContactUs_section = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      details: ["Plaza San Juan", "Carretera Masaya, Managua"],
    },
    {
      icon: "📞",
      title: "Call Us",
      details: ["+505 2222-3333", "Mon - Fri: 6AM - 10PM"],
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: ["info@gymfitsport.com", "support@gymfitsport.com"],
    },
    {
      icon: "⏰",
      title: "Hours",
      details: ["Mon-Fri: 5AM - 11PM", "Sat-Sun: 7AM - 9PM"],
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulación de envío
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  return (
    <section className="gym-contact-section">
      <div className="gym-contact-container">
        {/* Header */}
        <div className="gym-contact-header">
          <span className="gym-contact-badge">GET IN TOUCH</span>
          <h2 className="gym-contact-heading">
            CONTACT <span className="gym-contact-highlight">US</span>
          </h2>
          <p className="gym-contact-intro">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        {/* Layout de dos columnas */}
        <div className="gym-contact-layout">
          {/* Columna izquierda - Info de contacto */}
          <div className="gym-contact-sidebar">
            <div className="gym-contact-info-card">
              <h3 className="gym-contact-info-title">Contact Information</h3>

              {contactInfo.map((item, index) => (
                <div key={index} className="gym-contact-info-item">
                  <div className="gym-contact-info-icon">{item.icon}</div>
                  <div className="gym-contact-info-content">
                    <h4 className="gym-contact-info-label">{item.title}</h4>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="gym-contact-info-detail">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="gym-contact-social">
              <h4 className="gym-contact-social-title">Follow Us</h4>
              <div className="gym-contact-social-links">
                <a href="#facebook" className="gym-contact-social-link">
                  Facebook
                </a>
                <a href="#instagram" className="gym-contact-social-link">
                  Instagram
                </a>
                <a href="#twitter" className="gym-contact-social-link">
                  Twitter
                </a>
                <a href="#youtube" className="gym-contact-social-link">
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Columna derecha - Formulario */}
          <div className="gym-contact-main">
            <form className="gym-contact-form" onSubmit={handleSubmit}>
              <div className="gym-contact-form-row">
                <div className="gym-contact-form-group">
                  <label htmlFor="name" className="gym-contact-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="gym-contact-input"
                    required
                  />
                </div>

                <div className="gym-contact-form-group">
                  <label htmlFor="email" className="gym-contact-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="gym-contact-input"
                    required
                  />
                </div>
              </div>

              <div className="gym-contact-form-row">
                <div className="gym-contact-form-group">
                  <label htmlFor="phone" className="gym-contact-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="gym-contact-input"
                  />
                </div>

                <div className="gym-contact-form-group">
                  <label htmlFor="subject" className="gym-contact-label">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="gym-contact-input"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="training">Personal Training</option>
                    <option value="classes">Group Classes</option>
                    <option value="facilities">Facilities</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="gym-contact-form-group">
                <label htmlFor="message" className="gym-contact-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="gym-contact-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="gym-contact-submit"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Message Sent! ✓"
                  : "Send Message"}
              </button>

              {status === "success" && (
                <p className="gym-contact-success">
                  Thank you! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
