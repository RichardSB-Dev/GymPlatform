import { useAuth } from "../../Context/AuthContext";
import { useNavigate, NavLink } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { path: "/app/overview", icon: "grid", label: "Overview" },
    { path: "/app/my-routine", icon: "dumbbell", label: "My Routine" },
    { path: "/app/food-schedule", icon: "utensils", label: "Food Schedule" },
    { path: "/app/coaches", icon: "users", label: "Coaches" },
    { path: "/app/settings", icon: "settings", label: "Settings" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="logo-icon">🏋️</span>
          <span className="logo-text">
            GYMFIT<span className="logo-highlight">SPORT</span>
          </span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span className={`icon icon-${item.icon}`}></span>
            <span className="label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <img
            src={user?.avatar || "/default-avatar.png"}
            alt={user?.name}
            className="user-avatar"
          />
          <div className="user-details">
            <p className="user-name">{user?.name || "John Doe"}</p>
            <p className="user-email">{user?.email || "john@example.com"}</p>
          </div>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          <span className="icon icon-logout"></span>
          Log out
        </button>
      </div>
    </aside>
  );
};
