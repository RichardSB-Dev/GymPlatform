import { useState } from "react";
import {
  Star,
  MapPin,
  Calendar,
  DollarSign,
  Search,
  Filter,
  MessageCircle,
  Award,
} from "lucide-react";
import "../Style/style.css";

export const Coaches_screen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedCoach, setSelectedCoach] = useState(null);

  const specialties = [
    "Strength Training",
    "Bodybuilding",
    "Weight Loss",
    "Nutrition",
    "CrossFit",
    "Yoga",
    "all",
  ];

  const coaches = [
    {
      id: 1,
      name: "Marcus Johnson",
      specialty: "Strength Training",
      rating: 4.9,
      reviews: 127,
      experience: "8 years",
      location: "New York, NY",
      price: "$80/session",
      avatar: "https://i.pravatar.cc/150?img=12",
      bio: "Specialized in powerlifting and strength conditioning. Helped 200+ clients achieve their strength goals.",
      certifications: ["NSCA-CPT", "CSCS", "USA Powerlifting"],
      availability: "Mon-Fri, 6AM-8PM",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      specialty: "Weight Loss",
      rating: 4.8,
      reviews: 203,
      experience: "6 years",
      location: "Los Angeles, CA",
      price: "$75/session",
      avatar: "https://i.pravatar.cc/150?img=45",
      bio: "Passionate about sustainable weight loss and lifestyle changes. Focus on building healthy habits.",
      certifications: ["ACE-CPT", "Nutrition Specialist"],
      availability: "Tue-Sat, 7AM-7PM",
    },
    {
      id: 3,
      name: "David Chen",
      specialty: "Bodybuilding",
      rating: 5.0,
      reviews: 89,
      experience: "10 years",
      location: "Miami, FL",
      price: "$100/session",
      avatar: "https://i.pravatar.cc/150?img=33",
      bio: "Former competitive bodybuilder. Expert in muscle hypertrophy and competition prep.",
      certifications: ["IFBB Pro Card", "NASM-CPT"],
      availability: "Mon-Fri, 5AM-9PM",
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      specialty: "CrossFit",
      rating: 4.7,
      reviews: 156,
      experience: "5 years",
      location: "Austin, TX",
      price: "$70/session",
      avatar: "https://i.pravatar.cc/150?img=47",
      bio: "CrossFit Level 2 Trainer. Specializing in functional fitness and Olympic lifting.",
      certifications: ["CF-L2", "USAW-L1"],
      availability: "Mon-Sat, 6AM-8PM",
    },
    {
      id: 5,
      name: "James Williams",
      specialty: "Yoga",
      rating: 4.9,
      reviews: 178,
      experience: "12 years",
      location: "San Francisco, CA",
      price: "$65/session",
      avatar: "https://i.pravatar.cc/150?img=52",
      bio: "Certified yoga instructor with focus on flexibility and mindfulness. Experience with all levels.",
      certifications: ["RYT-500", "Meditation Teacher"],
      availability: "Daily, 7AM-6PM",
    },
    {
      id: 6,
      name: "Lisa Thompson",
      specialty: "Nutrition",
      rating: 4.8,
      reviews: 142,
      experience: "7 years",
      location: "Chicago, IL",
      price: "$90/session",
      avatar: "https://i.pravatar.cc/150?img=48",
      bio: "Registered dietitian specializing in sports nutrition and meal planning for athletes.",
      certifications: ["RD", "CSSD", "LD"],
      availability: "Mon-Fri, 9AM-5PM",
    },
  ];

  const filteredCoaches = coaches.filter((coach) => {
    const matchesSearch =
      coach.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coach.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "all" || coach.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const handleViewProfile = (coach) => {
    setSelectedCoach(coach);
  };

  const handleCloseModal = () => {
    setSelectedCoach(null);
  };

  const handleBookSession = (coach) => {
    alert(`Booking session with ${coach.name}...`);
    // Aquí implementarías la lógica de booking
  };

  return (
    <div className="coaches-container">
      <header className="coaches-header">
        <div>
          <h1 className="coaches-title">Find Your Coach</h1>
          <p className="coaches-subtitle">
            Connect with certified trainers to achieve your fitness goals
          </p>
        </div>
        <div className="coaches-stats">
          <div className="stat-item">
            <span className="stat-number">{coaches.length}</span>
            <span className="stat-label">Available Coaches</span>
          </div>
        </div>
      </header>

      <div className="coaches-filters">
        <div className="search-box">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search by name or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="specialty-filters">
          <Filter size={18} />
          <div className="filter-buttons">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                className={`filter-btn ${
                  selectedSpecialty === specialty ? "active" : ""
                }`}
                onClick={() => setSelectedSpecialty(specialty)}
              >
                {specialty === "all" ? "All Specialties" : specialty}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="coaches-grid">
        {filteredCoaches.map((coach) => (
          <div key={coach.id} className="coach-card">
            <div className="coach-card-header">
              <img
                src={coach.avatar}
                alt={coach.name}
                className="coach-avatar"
              />
              <div className="coach-badge">{coach.specialty}</div>
            </div>

            <div className="coach-card-body">
              <h3 className="coach-name">{coach.name}</h3>

              <div className="coach-rating">
                <Star className="star-icon" size={16} fill="#ffa500" />
                <span className="rating-value">{coach.rating}</span>
                <span className="rating-reviews">
                  ({coach.reviews} reviews)
                </span>
              </div>

              <p className="coach-bio">{coach.bio}</p>

              <div className="coach-info-grid">
                <div className="info-item">
                  <Award size={16} className="info-icon" />
                  <span>{coach.experience}</span>
                </div>
                <div className="info-item">
                  <MapPin size={16} className="info-icon" />
                  <span>{coach.location}</span>
                </div>
                <div className="info-item">
                  <DollarSign size={16} className="info-icon" />
                  <span>{coach.price}</span>
                </div>
                <div className="info-item">
                  <Calendar size={16} className="info-icon" />
                  <span>Available</span>
                </div>
              </div>
            </div>

            <div className="coach-card-footer">
              <button
                className="btn-secondary"
                onClick={() => handleViewProfile(coach)}
              >
                View Profile
              </button>
              <button
                className="btn-primary"
                onClick={() => handleBookSession(coach)}
              >
                <MessageCircle size={18} />
                Book Session
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredCoaches.length === 0 && (
        <div className="no-results">
          <p>No coaches found matching your criteria</p>
          <button
            className="reset-btn"
            onClick={() => {
              setSearchTerm("");
              setSelectedSpecialty("all");
            }}
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Modal de perfil del coach */}
      {selectedCoach && (
        <div className="coach-modal-overlay" onClick={handleCloseModal}>
          <div className="coach-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              ×
            </button>

            <div className="modal-header">
              <img
                src={selectedCoach.avatar}
                alt={selectedCoach.name}
                className="modal-avatar"
              />
              <div className="modal-header-info">
                <h2>{selectedCoach.name}</h2>
                <p className="modal-specialty">{selectedCoach.specialty}</p>
                <div className="modal-rating">
                  <Star size={20} fill="#ffa500" />
                  <span>{selectedCoach.rating}</span>
                  <span>({selectedCoach.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3>About</h3>
                <p>{selectedCoach.bio}</p>
              </div>

              <div className="modal-section">
                <h3>Certifications</h3>
                <div className="certifications-list">
                  {selectedCoach.certifications.map((cert, index) => (
                    <span key={index} className="certification-badge">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>Details</h3>
                <div className="details-grid">
                  <div className="detail-item">
                    <Award size={20} />
                    <div>
                      <p className="detail-label">Experience</p>
                      <p className="detail-value">{selectedCoach.experience}</p>
                    </div>
                  </div>
                  <div className="detail-item">
                    <MapPin size={20} />
                    <div>
                      <p className="detail-label">Location</p>
                      <p className="detail-value">{selectedCoach.location}</p>
                    </div>
                  </div>
                  <div className="detail-item">
                    <DollarSign size={20} />
                    <div>
                      <p className="detail-label">Price</p>
                      <p className="detail-value">{selectedCoach.price}</p>
                    </div>
                  </div>
                  <div className="detail-item">
                    <Calendar size={20} />
                    <div>
                      <p className="detail-label">Availability</p>
                      <p className="detail-value">
                        {selectedCoach.availability}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="btn-modal-primary"
                onClick={() => handleBookSession(selectedCoach)}
              >
                Book a Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
