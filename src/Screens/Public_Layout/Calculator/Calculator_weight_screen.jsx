import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Calculator_weight_screen = () => {
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateBMI = (e) => {
    e.preventDefault();

    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height) / 100; // convertir cm a metros
    const age = parseInt(formData.age);

    // Calcular IMC
    const bmi = (weight / (height * height)).toFixed(1);

    // Determinar categoría
    let category = "";
    let status = "";
    let description = "";
    let recommendation = "";

    if (bmi < 18.5) {
      category = "Underweight";
      status = "low";
      description =
        "Your BMI indicates that you are underweight for your height.";
      recommendation =
        "Consider a balanced diet rich in nutrients and strength training to build healthy muscle mass. Consult with a nutritionist for a personalized meal plan.";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Normal Weight";
      status = "normal";
      description =
        "Congratulations! Your BMI is within the healthy weight range.";
      recommendation =
        "Maintain your healthy lifestyle with regular exercise and a balanced diet. Keep up the good work!";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Overweight";
      status = "high";
      description =
        "Your BMI indicates that you are slightly overweight for your height.";
      recommendation =
        "Focus on cardiovascular exercises and a calorie-controlled diet. Our trainers can help you create an effective workout plan.";
    } else {
      category = "Obese";
      status = "very-high";
      description =
        "Your BMI indicates obesity. This may increase health risks.";
      recommendation =
        "We recommend consulting with a healthcare professional. Our personal trainers and nutrition experts can support your weight loss journey safely.";
    }

    // Calcular peso ideal (rango)
    const minIdealWeight = (18.5 * height * height).toFixed(1);
    const maxIdealWeight = (24.9 * height * height).toFixed(1);

    setResult({
      bmi,
      category,
      status,
      description,
      recommendation,
      idealWeightRange: `${minIdealWeight} - ${maxIdealWeight} kg`,
      currentWeight: weight,
    });
  };

  const resetCalculator = () => {
    setFormData({
      weight: "",
      height: "",
      age: "",
      gender: "",
    });
    setResult(null);
  };

  return (
    <section className="gym-calc-section">
      <div className="gym-calc-container">
        {/* Header */}
        <div className="gym-calc-header">
          <span className="gym-calc-badge">BMI CALCULATOR</span>
          <h2 className="gym-calc-heading">
            CALCULATE YOUR
            <br />
            <span className="gym-calc-highlight">IDEAL WEIGHT</span>
          </h2>
          <p className="gym-calc-intro">
            Determine your Body Mass Index (BMI) and discover your ideal weight
            range based on your height and body composition.
          </p>
        </div>

        {/* Layout de dos columnas */}
        <div className="gym-calc-layout">
          {/* Columna izquierda - Info */}
          <div className="gym-calc-sidebar">
            <div className="gym-calc-info-card">
              <h3 className="gym-calc-info-title">About BMI</h3>
              <p className="gym-calc-info-text">
                Body Mass Index (BMI) is a measure of body fat based on height
                and weight that applies to adult men and women.
              </p>

              <div className="gym-calc-ranges">
                <h4 className="gym-calc-ranges-title">BMI Categories:</h4>
                <div className="gym-calc-range-item">
                  <span className="gym-calc-range-dot low"></span>
                  <span className="gym-calc-range-label">
                    {"<"} 18.5 - Underweight
                  </span>
                </div>
                <div className="gym-calc-range-item">
                  <span className="gym-calc-range-dot normal"></span>
                  <span className="gym-calc-range-label">
                    18.5 - 24.9 - Normal
                  </span>
                </div>
                <div className="gym-calc-range-item">
                  <span className="gym-calc-range-dot high"></span>
                  <span className="gym-calc-range-label">
                    25 - 29.9 - Overweight
                  </span>
                </div>
                <div className="gym-calc-range-item">
                  <span className="gym-calc-range-dot very-high"></span>
                  <span className="gym-calc-range-label">{">"} 30 - Obese</span>
                </div>
              </div>

              <div className="gym-calc-note">
                <p>
                  <strong>Note:</strong> BMI is a screening tool and does not
                  diagnose body fatness or health. Athletes with high muscle
                  mass may have a higher BMI.
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha - Formulario o Resultado */}
          <div className="gym-calc-main">
            {!result ? (
              <div className="gym-calc-form-card">
                <h3 className="gym-calc-form-title">Enter Your Details</h3>
                <form className="gym-calc-form" onSubmit={calculateBMI}>
                  <div className="gym-calc-form-row">
                    <div className="gym-calc-form-group">
                      <label htmlFor="weight" className="gym-calc-label">
                        Weight (kg) *
                      </label>
                      <input
                        type="number"
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="gym-calc-input"
                        placeholder="70"
                        step="0.1"
                        min="20"
                        max="300"
                        required
                      />
                    </div>

                    <div className="gym-calc-form-group">
                      <label htmlFor="height" className="gym-calc-label">
                        Height (cm) *
                      </label>
                      <input
                        type="number"
                        id="height"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        className="gym-calc-input"
                        placeholder="170"
                        step="0.1"
                        min="100"
                        max="250"
                        required
                      />
                    </div>
                  </div>

                  <div className="gym-calc-form-row">
                    <div className="gym-calc-form-group">
                      <label htmlFor="age" className="gym-calc-label">
                        Age *
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="gym-calc-input"
                        placeholder="25"
                        min="15"
                        max="100"
                        required
                      />
                    </div>

                    <div className="gym-calc-form-group">
                      <label htmlFor="gender" className="gym-calc-label">
                        Gender *
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="gym-calc-input"
                        required
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="gym-calc-submit">
                    Calculate BMI
                  </button>
                </form>
              </div>
            ) : (
              <div className="gym-calc-result-card">
                <h3 className="gym-calc-result-title">Your Results</h3>

                <div className="gym-calc-result-bmi">
                  <div className="gym-calc-bmi-value">
                    <span className="gym-calc-bmi-number">{result.bmi}</span>
                    <span className="gym-calc-bmi-label">BMI</span>
                  </div>
                  <div className={`gym-calc-bmi-category ${result.status}`}>
                    {result.category}
                  </div>
                </div>

                <div className="gym-calc-result-info">
                  <div className="gym-calc-result-box">
                    <h4 className="gym-calc-result-subtitle">
                      📊 What This Means
                    </h4>
                    <p className="gym-calc-result-text">{result.description}</p>
                  </div>

                  <div className="gym-calc-result-box">
                    <h4 className="gym-calc-result-subtitle">
                      🎯 Ideal Weight Range
                    </h4>
                    <p className="gym-calc-result-text">
                      For your height, a healthy weight range is{" "}
                      <strong>{result.idealWeightRange}</strong>
                    </p>
                    <p className="gym-calc-result-text">
                      Your current weight:{" "}
                      <strong>{result.currentWeight} kg</strong>
                    </p>
                  </div>

                  <div className="gym-calc-result-box recommendation">
                    <h4 className="gym-calc-result-subtitle">
                      💡 Recommendation
                    </h4>
                    <p className="gym-calc-result-text">
                      {result.recommendation}
                    </p>
                  </div>
                </div>

                <div className="gym-calc-result-actions">
                  <button
                    className="gym-calc-recalculate"
                    onClick={resetCalculator}
                  >
                    Calculate Again
                  </button>
                  <Link to={"/login"} className="gym-calc-join">
                    Join Our Gym
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
