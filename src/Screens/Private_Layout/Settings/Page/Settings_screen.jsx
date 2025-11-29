import { useState } from "react";
import {
  User,
  Bell,
  Lock,
  Globe,
  Moon,
  Smartphone,
  Mail,
  Save,
} from "lucide-react";
import "../Style/style.css";

export const Settings_screen = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [formData, setFormData] = useState({
    name: "John",
    email: "admin@gymfitsport.com",
    phone: "+1 234 567 8900",
    language: "en",
    notifications: {
      email: true,
      push: true,
      workout: true,
    },
    theme: "dark",
  });

  const sections = [
    { id: "profile", title: "Profile", icon: <User size={20} /> },
    { id: "notifications", title: "Notifications", icon: <Bell size={20} /> },
    { id: "security", title: "Security", icon: <Lock size={20} /> },
    { id: "preferences", title: "Preferences", icon: <Globe size={20} /> },
  ];

  const handleSave = () => {
    console.log("Saving settings:", formData);
    alert("Settings saved successfully!");
    // Aquí iría la lógica para guardar en tu backend
  };

  const updateNotification = (key, value) => {
    setFormData({
      ...formData,
      notifications: {
        ...formData.notifications,
        [key]: value,
      },
    });
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your account settings and preferences</p>
      </div>

      <div className="settings-content">
        <div className="settings-sidebar">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`settings-nav-item ${
                activeSection === section.id ? "active" : ""
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.icon}
              <span>{section.title}</span>
            </button>
          ))}
        </div>

        <div className="settings-main">
          {activeSection === "profile" && (
            <div className="settings-section">
              <h2>Profile Information</h2>
              <div className="settings-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {activeSection === "notifications" && (
            <div className="settings-section">
              <h2>Notification Preferences</h2>
              <div className="settings-list">
                <div className="settings-item">
                  <div className="settings-item-info">
                    <Mail size={20} />
                    <div>
                      <h3>Email Notifications</h3>
                      <p>Receive updates via email</p>
                    </div>
                  </div>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={formData.notifications.email}
                      onChange={(e) =>
                        updateNotification("email", e.target.checked)
                      }
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="settings-item">
                  <div className="settings-item-info">
                    <Smartphone size={20} />
                    <div>
                      <h3>Push Notifications</h3>
                      <p>Receive push notifications on your device</p>
                    </div>
                  </div>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={formData.notifications.push}
                      onChange={(e) =>
                        updateNotification("push", e.target.checked)
                      }
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="settings-item">
                  <div className="settings-item-info">
                    <Bell size={20} />
                    <div>
                      <h3>Workout Reminders</h3>
                      <p>Get reminded about your scheduled workouts</p>
                    </div>
                  </div>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={formData.notifications.workout}
                      onChange={(e) =>
                        updateNotification("workout", e.target.checked)
                      }
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeSection === "security" && (
            <div className="settings-section">
              <h2>Security Settings</h2>
              <div className="settings-grid">
                <div className="form-group">
                  <label>Current Password</label>
                  <input type="password" placeholder="Enter current password" />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input type="password" placeholder="Enter new password" />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" placeholder="Confirm new password" />
                </div>
              </div>
              <div className="security-info">
                <p>
                  Password must be at least 8 characters and include uppercase,
                  lowercase, and numbers.
                </p>
              </div>
            </div>
          )}

          {activeSection === "preferences" && (
            <div className="settings-section">
              <h2>App Preferences</h2>
              <div className="settings-list">
                <div className="settings-item">
                  <div className="settings-item-info">
                    <Globe size={20} />
                    <div>
                      <h3>Language</h3>
                      <p>Select your preferred language</p>
                    </div>
                  </div>
                  <select
                    value={formData.language}
                    onChange={(e) =>
                      setFormData({ ...formData, language: e.target.value })
                    }
                    className="settings-select"
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                  </select>
                </div>

                <div className="settings-item">
                  <div className="settings-item-info">
                    <Moon size={20} />
                    <div>
                      <h3>Theme</h3>
                      <p>Choose your display theme</p>
                    </div>
                  </div>
                  <select
                    value={formData.theme}
                    onChange={(e) =>
                      setFormData({ ...formData, theme: e.target.value })
                    }
                    className="settings-select"
                  >
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <button className="save-button" onClick={handleSave}>
            <Save size={20} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
