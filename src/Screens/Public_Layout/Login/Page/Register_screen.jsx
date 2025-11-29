import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthContext";
import "../Style/Login_styles.css";

export const Register_screen = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Account Info
    email: "",
    password: "",
    confirmPassword: "",
    // Step 2: Personal Info
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
    // Step 3: Physical Info
    height: "",
    heightUnit: "cm",
    weight: "",
    weightUnit: "kg",
    goal: "",
    activityLevel: "",
    // Step 4: Membership (optional)
    membershipPlan: "free",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Redirigir si ya está autenticado
  if (isAuthenticated) {
    navigate("/app/overview");
    return null;
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }

      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    if (step === 2) {
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.dateOfBirth)
        newErrors.dateOfBirth = "Date of birth is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
    }

    if (step === 3) {
      if (!formData.height) newErrors.height = "Height is required";
      if (!formData.weight) newErrors.weight = "Weight is required";
      if (!formData.goal) newErrors.goal = "Goal is required";
      if (!formData.activityLevel)
        newErrors.activityLevel = "Activity level is required";
    }

    if (step === 4) {
      if (!formData.termsAccepted) {
        newErrors.termsAccepted = "You must accept the terms and conditions";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(4)) return;

    setLoading(true);

    try {
      // Simulación de registro
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Usuario registrado:", {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        phone: formData.phone,
        height: formData.height,
        heightUnit: formData.heightUnit,
        weight: formData.weight,
        weightUnit: formData.weightUnit,
        goal: formData.goal,
        activityLevel: formData.activityLevel,
        membershipPlan: formData.membershipPlan,
      });

      // Opción 2: Redirigir al login con mensaje de éxito
      navigate("/login", {
        state: {
          message: "Account created successfully! Please login.",
          email: formData.email,
        },
      });
    } catch (error) {
      setErrors({ submit: error.message || "Registration failed" });
    } finally {
      setLoading(false);
    }
  };

  const renderStep1 = () => (
    <div className="step-content">
      <h2 className="step-title">Create your account</h2>
      <p className="step-description">
        Let's start with your login credentials
      </p>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className={errors.email ? "error" : ""}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password *</label>
        <div className="password-input">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="At least 8 characters"
            className={errors.password ? "error" : ""}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "👁️" : "👁️🗨️"}
          </button>
        </div>
        {errors.password && (
          <span className="error-text">{errors.password}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password *</label>
        <div className="password-input">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Repeat your password"
            className={errors.confirmPassword ? "error" : ""}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? "👁️" : "👁️🗨️"}
          </button>
        </div>
        {errors.confirmPassword && (
          <span className="error-text">{errors.confirmPassword}</span>
        )}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="step-content">
      <h2 className="step-title">Personal Information</h2>
      <p className="step-description">Tell us about yourself</p>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            className={errors.firstName ? "error" : ""}
          />
          {errors.firstName && (
            <span className="error-text">{errors.firstName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className={errors.lastName ? "error" : ""}
          />
          {errors.lastName && (
            <span className="error-text">{errors.lastName}</span>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth *</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          max={new Date().toISOString().split("T")[0]}
          className={errors.dateOfBirth ? "error" : ""}
        />
        {errors.dateOfBirth && (
          <span className="error-text">{errors.dateOfBirth}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="gender">Gender *</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className={errors.gender ? "error" : ""}
        >
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
        {errors.gender && <span className="error-text">{errors.gender}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone (optional)</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="step-content">
      <h2 className="step-title">Physical Information</h2>
      <p className="step-description">
        Help us personalize your fitness journey
      </p>

      <div className="form-row">
        <div className="form-group flex-grow">
          <label htmlFor="height">Height *</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="170"
            className={errors.height ? "error" : ""}
          />
          {errors.height && <span className="error-text">{errors.height}</span>}
        </div>

        <div className="form-group unit-selector">
          <label htmlFor="heightUnit">Unit</label>
          <select
            id="heightUnit"
            name="heightUnit"
            value={formData.heightUnit}
            onChange={handleChange}
          >
            <option value="cm">cm</option>
            <option value="ft">ft</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group flex-grow">
          <label htmlFor="weight">Weight *</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="70"
            className={errors.weight ? "error" : ""}
          />
          {errors.weight && <span className="error-text">{errors.weight}</span>}
        </div>

        <div className="form-group unit-selector">
          <label htmlFor="weightUnit">Unit</label>
          <select
            id="weightUnit"
            name="weightUnit"
            value={formData.weightUnit}
            onChange={handleChange}
          >
            <option value="kg">kg</option>
            <option value="lbs">lbs</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="goal">Fitness Goal *</label>
        <select
          id="goal"
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          className={errors.goal ? "error" : ""}
        >
          <option value="">Select your goal</option>
          <option value="lose-weight">Lose Weight</option>
          <option value="gain-muscle">Gain Muscle</option>
          <option value="maintain">Maintain Weight</option>
          <option value="improve-endurance">Improve Endurance</option>
          <option value="flexibility">Increase Flexibility</option>
        </select>
        {errors.goal && <span className="error-text">{errors.goal}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="activityLevel">Activity Level *</label>
        <select
          id="activityLevel"
          name="activityLevel"
          value={formData.activityLevel}
          onChange={handleChange}
          className={errors.activityLevel ? "error" : ""}
        >
          <option value="">Select your activity level</option>
          <option value="sedentary">Sedentary (little or no exercise)</option>
          <option value="light">Light (exercise 1-3 days/week)</option>
          <option value="moderate">Moderate (exercise 3-5 days/week)</option>
          <option value="active">Active (exercise 6-7 days/week)</option>
          <option value="very-active">
            Very Active (intense exercise daily)
          </option>
        </select>
        {errors.activityLevel && (
          <span className="error-text">{errors.activityLevel}</span>
        )}
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="step-content">
      <h2 className="step-title">Choose Your Plan</h2>
      <p className="step-description">
        Select a membership plan (you can upgrade later)
      </p>

      <div className="membership-options">
        <label
          className={`membership-card ${
            formData.membershipPlan === "free" ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            name="membershipPlan"
            value="free"
            checked={formData.membershipPlan === "free"}
            onChange={handleChange}
          />
          <div className="membership-header">
            <h3>Free</h3>
            <p className="price">
              $0<span>/month</span>
            </p>
          </div>
          <ul className="membership-features">
            <li>✓ Basic workout tracking</li>
            <li>✓ Weight & body metrics</li>
            <li>✓ Access to calculator tools</li>
            <li>✗ Personalized meal plans</li>
            <li>✗ Coach support</li>
          </ul>
        </label>

        <label
          className={`membership-card ${
            formData.membershipPlan === "premium" ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            name="membershipPlan"
            value="premium"
            checked={formData.membershipPlan === "premium"}
            onChange={handleChange}
          />
          <div className="membership-header">
            <h3>Premium</h3>
            <p className="price">
              $19.99<span>/month</span>
            </p>
          </div>
          <ul className="membership-features">
            <li>✓ Everything in Free</li>
            <li>✓ Personalized meal plans</li>
            <li>✓ Custom workout routines</li>
            <li>✓ Progress analytics</li>
            <li>✓ Priority support</li>
          </ul>
          <span className="badge">Most Popular</span>
        </label>

        <label
          className={`membership-card ${
            formData.membershipPlan === "pro" ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            name="membershipPlan"
            value="pro"
            checked={formData.membershipPlan === "pro"}
            onChange={handleChange}
          />
          <div className="membership-header">
            <h3>Pro</h3>
            <p className="price">
              $39.99<span>/month</span>
            </p>
          </div>
          <ul className="membership-features">
            <li>✓ Everything in Premium</li>
            <li>✓ 1-on-1 coach sessions</li>
            <li>✓ Video call support</li>
            <li>✓ Advanced body analytics</li>
            <li>✓ Supplement recommendations</li>
          </ul>
        </label>
      </div>

      <div className="terms-checkbox">
        <label className={errors.termsAccepted ? "error" : ""}>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <span>
            I agree to the{" "}
            <Link to="/terms" target="_blank">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" target="_blank">
              Privacy Policy
            </Link>
          </span>
        </label>
        {errors.termsAccepted && (
          <span className="error-text">{errors.termsAccepted}</span>
        )}
      </div>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <div className="register-logo">
            <span className="logo-icon">🏋️</span>
            <h1>
              GYM<span className="logo-highlight">VYTHRA</span>
            </h1>
          </div>

          <div className="progress-bar">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`progress-step ${
                  currentStep >= step ? "active" : ""
                } ${currentStep === step ? "current" : ""}`}
              >
                <div className="step-circle">{step}</div>
                <span className="step-label">
                  {step === 1 && "Account"}
                  {step === 2 && "Personal"}
                  {step === 3 && "Physical"}
                  {step === 4 && "Plan"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          {errors.submit && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {errors.submit}
            </div>
          )}

          {renderStep()}

          <div className="form-actions">
            {currentStep > 1 && (
              <button
                type="button"
                className="btn-secondary"
                onClick={prevStep}
                disabled={loading}
              >
                Back
              </button>
            )}

            {currentStep < 4 ? (
              <button type="button" className="btn-primary" onClick={nextStep}>
                Next
              </button>
            ) : (
              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            )}
          </div>
        </form>

        <div className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};
