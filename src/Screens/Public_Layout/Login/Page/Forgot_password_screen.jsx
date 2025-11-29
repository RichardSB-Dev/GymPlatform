import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/Login_styles.css";

export const Forgot_password_screen = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: email, 2: código, 3: nueva contraseña
  const [formData, setFormData] = useState({
    email: "",
    code: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  // PASO 1: Enviar email
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email) {
      setError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email");
      return;
    }

    setLoading(true);

    try {
      // Simulación de envío de código
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStep(2);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // PASO 2: Verificar código
  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.code) {
      setError("Verification code is required");
      return;
    }

    setLoading(true);

    try {
      // Simulación - acepta cualquier código
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStep(3);
    } catch (err) {
      setError("Invalid code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // PASO 3: Cambiar contraseña
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setError("");

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
      // Simulación de cambio de contraseña
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Redirigir al login con mensaje de éxito
      navigate("/login", {
        state: { message: "Password changed successfully! Please login." },
      });
    } catch (err) {
      setError("Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Code resent to your email!");
    } catch (err) {
      setError("Failed to resend code");
    } finally {
      setLoading(false);
    }
  };

  // RENDER PASO 1: Solicitar email
  const renderEmailStep = () => (
    <>
      <div className="forgot-header">
        <div className="icon-container">
          <span className="forgot-icon">🔐</span>
        </div>
        <h1 className="forgot-title">Forgot Password?</h1>
        <p className="forgot-description">
          Enter your email and we'll send you a verification code.
        </p>
      </div>

      <form onSubmit={handleEmailSubmit} className="forgot-form">
        {error && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            disabled={loading}
            autoFocus
          />
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? (
            <>
              <span className="spinner"></span>
              Sending...
            </>
          ) : (
            "Send Verification Code"
          )}
        </button>

        <Link to="/login" className="back-to-login">
          <span className="back-arrow">←</span> Back to Login
        </Link>
      </form>
    </>
  );

  // RENDER PASO 2: Verificar código
  const renderCodeStep = () => (
    <>
      <div className="forgot-header">
        <div className="icon-container">
          <span className="forgot-icon">📧</span>
        </div>
        <h1 className="forgot-title">Check Your Email</h1>
        <p className="forgot-description">
          We've sent a verification code to
          <br />
          <strong>{formData.email}</strong>
        </p>
      </div>

      <form onSubmit={handleCodeSubmit} className="forgot-form">
        {error && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="code">Verification Code</label>
          <input
            type="text"
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="Enter 6-digit code"
            maxLength="6"
            disabled={loading}
            autoFocus
            className="code-input"
          />
          <p className="helper-text">
            Enter any code to continue (simulation mode)
          </p>
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? (
            <>
              <span className="spinner"></span>
              Verifying...
            </>
          ) : (
            "Verify Code"
          )}
        </button>

        <button
          type="button"
          onClick={handleResendCode}
          className="resend-button"
          disabled={loading}
        >
          Resend Code
        </button>

        <button
          type="button"
          onClick={() => setStep(1)}
          className="back-to-login"
        >
          <span className="back-arrow">←</span> Change Email
        </button>
      </form>
    </>
  );

  // RENDER PASO 3: Nueva contraseña
  const renderPasswordStep = () => (
    <>
      <div className="forgot-header">
        <div className="icon-container">
          <span className="forgot-icon">🔑</span>
        </div>
        <h1 className="forgot-title">Reset Password</h1>
        <p className="forgot-description">Enter your new password below</p>
      </div>

      <form onSubmit={handlePasswordSubmit} className="forgot-form">
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
    </>
  );

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <div className="forgot-logo">
          <span className="logo-icon">🏋️</span>
          <span className="logo-text">
            GYM<span className="logo-highlight">VYTHRA</span>
          </span>
        </div>

        {/* Progress indicators */}
        <div className="step-indicators">
          <div className={`indicator ${step >= 1 ? "active" : ""}`}></div>
          <div className={`indicator ${step >= 2 ? "active" : ""}`}></div>
          <div className={`indicator ${step >= 3 ? "active" : ""}`}></div>
        </div>

        {step === 1 && renderEmailStep()}
        {step === 2 && renderCodeStep()}
        {step === 3 && renderPasswordStep()}
      </div>
    </div>
  );
};
