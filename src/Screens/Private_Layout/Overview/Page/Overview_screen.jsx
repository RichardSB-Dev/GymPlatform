import {
  Weight,
  Activity,
  Flame,
  Ruler,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import "../Style/style.css";

export const Overview_screen = () => {
  const metrics = [
    {
      icon: Weight,
      label: "Current Weight",
      value: "80.5 kg",
      change: "-0.5 kg",
      isPositive: true,
      color: "#00d9ff",
    },
    {
      icon: Activity,
      label: "Body Fat",
      value: "16.2%",
      change: "-1.2%",
      isPositive: true,
      color: "#ffa500",
    },
    {
      icon: Flame,
      label: "Workout Streak",
      value: "5 Days",
      change: "On Fire!",
      isPositive: true,
      color: "#4ade80",
    },
    {
      icon: Ruler,
      label: "Waist",
      value: "32 in",
      change: "-0.5 in",
      isPositive: true,
      color: "#a78bfa",
    },
  ];

  return (
    <div className="overview-container">
      <header className="overview-header">
        <div>
          <h1 className="overview-title">Welcome back, John</h1>
          <p className="overview-subtitle">
            Here's your fitness overview for today.
          </p>
        </div>
        <button className="start-workout-btn">Start Workout</button>
      </header>

      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-header">
              <div
                className="metric-icon-wrapper"
                style={{ background: `${metric.color}20` }}
              >
                <metric.icon
                  className="metric-icon"
                  style={{ color: metric.color }}
                />
              </div>
              <span className="metric-label">{metric.label}</span>
            </div>
            <div className="metric-content">
              <h3 className="metric-value">{metric.value}</h3>
              <div
                className={`metric-change ${
                  metric.isPositive ? "positive" : "negative"
                }`}
              >
                {metric.isPositive ? (
                  <TrendingDown size={16} />
                ) : (
                  <TrendingUp size={16} />
                )}
                <span>{metric.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Strength Progress</h3>
            <p className="chart-subtitle">1RM Estimation over last 5 weeks</p>
          </div>
          <div className="chart-content">
            <div className="chart-placeholder">
              <p className="placeholder-text">
                Chart visualization coming soon
              </p>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">Body Composition</h3>
            <p className="chart-subtitle">Weight vs Body Fat %</p>
          </div>
          <div className="chart-content">
            <div className="chart-placeholder">
              <p className="placeholder-text">
                Chart visualization coming soon
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="notice-banner">
        <span className="notice-text">
          Frontend Preview Only. Please wake servers to enable backend
          functionality.
        </span>
        <button className="notice-btn">Wake up servers</button>
      </div>
    </div>
  );
};
