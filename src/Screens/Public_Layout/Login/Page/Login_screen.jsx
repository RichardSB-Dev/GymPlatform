import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthContext";
import "../Style/Login_styles.css";
import { useEffect, useState } from "react";

export const Login_screen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      setTimeout(() => {
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app/overview");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setLoading(true);

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email");
      setLoading(false);
      return;
    }

    const result = await login(formData.email, formData.password);

    if (result.success) {
      navigate("/app/overview");
    } else {
      setError(result.error || "Invalid credentials");
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <span className="logo-icon">🏋️</span>
            <h1>
              GYMFIT<span className="logo-highlight">SPORT</span>
            </h1>
          </div>
          <p className="login-subtitle">
            Welcome back! Please login to your account.
          </p>
        </div>

        {/* Credenciales de prueba */}
        <div className="demo-credentials">
          <p className="demo-title">🔐 Demo Credentials:</p>
          <p className="demo-info">
            <strong>Email:</strong> admin@gymfitsport.com
          </p>
          <p className="demo-info">
            <strong>Password:</strong> admin123
          </p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {successMessage && (
            <div className="success-message">
              <span className="success-icon">✓</span>
              {successMessage}
            </div>
          )}

          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                disabled={loading}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                disabled={loading}
              >
                {showPassword ? "👁️" : "👁️🗨️"}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="register-link">
            Don't have an account? <Link to="/register">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
