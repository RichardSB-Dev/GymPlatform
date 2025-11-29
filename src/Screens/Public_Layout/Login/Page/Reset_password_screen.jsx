import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import "../Style/Login_styles.css";

export const Reset_password_screen = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validaciones
    if (!formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      // Aquí irá tu llamada al API real
      // const response = await fetch('/api/reset-password', {
      //   method: 'POST',
      //   body: JSON.stringify({ token, password: formData.password })
      // })

      // Simulación de reset
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccess(true);

      // Redirigir al login después de 3 segundos
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      setError(err.message || "Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="reset-password-container">
        <div className="reset-password-card">
          <div className="reset-logo">
            <span className="logo-icon">🏋️</span>
            <span className="logo-text">
              GYM<span className="logo-highlight">VYTHRA</span>
            </span>
          </div>

          <div className="success-content">
            <div className="icon-container success">
              <span className="success-icon">✓</span>
            </div>
            <h1 className="success-title">Password Reset Successful!</h1>
            <p className="success-description">
              Your password has been successfully reset.
              <br />
              Redirecting you to login...
            </p>
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="reset-password-container">
      <div className="reset-password-card">
        <div className="reset-logo">
          <span className="logo-icon">🏋️</span>
          <span className="logo-text">
            GYM<span className="logo-highlight">VYTHRA</span>
          </span>
        </div>

        <div className="reset-header">
          <div className="icon-container">
            <span className="reset-icon">🔑</span>
          </div>
          <h1 className="reset-title">Reset Password</h1>
          <p className="reset-description">Enter your new password below</p>
        </div>

        <form onSubmit={handleSubmit} className="reset-form">
          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="At least 8 characters"
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

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <div className="password-input">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Repeat your password"
                disabled={loading}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                disabled={loading}
              >
                {showConfirmPassword ? "👁️" : "👁️🗨️"}
              </button>
            </div>
          </div>

          <div className="password-requirements">
            <p className="requirements-title">Password must contain:</p>
            <ul className="requirements-list">
              <li className={formData.password.length >= 8 ? "valid" : ""}>
                At least 8 characters
              </li>
              <li className={/[A-Z]/.test(formData.password) ? "valid" : ""}>
                One uppercase letter
              </li>
              <li className={/[a-z]/.test(formData.password) ? "valid" : ""}>
                One lowercase letter
              </li>
              <li className={/[0-9]/.test(formData.password) ? "valid" : ""}>
                One number
              </li>
            </ul>
          </div>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span>
                Resetting...
              </>
            ) : (
              "Reset Password"
            )}
          </button>

          <Link to="/login" className="back-to-login">
            <span className="back-arrow">←</span> Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
};
