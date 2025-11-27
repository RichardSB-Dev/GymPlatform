import "./styles.css";

export const Main_section = () => {
  return (
    <div className="main-section_container">
      <div className="main_up">
        <span className="main_span_up">PREMIUM FITNESS EXPERIENCE</span>
      </div>

      <div className="main_bigLetters">
        <span className="main_bigletter">TRANSFORM</span>
        <span className="main_bigletter">YOUR</span>
        <span className="main_bigletter span3">BODY & ENERGY</span>
      </div>

      <p className="main_desc">
        Experience the fusion of luxury facilities and data-driven training.
        Join the elite community at Gym-Vythra.
      </p>

      <div className="main_buttons">
        <button className="btn btn1">Start Your Journey</button>
        <button className="btn btn2">Watch video</button>
      </div>
    </div>
  );
};
