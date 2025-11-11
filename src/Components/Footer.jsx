import { img } from "../assets/logo.jpg";

export const Footer = () => {
  return (
    <div className="Footer_container">
      <div className="s1">
        <div className="img_container">
          <img src={img} alt="" />
        </div>
        <span className="copyright"></span>
      </div>

      <div className="s2">
        <button className="sections_btn">Caracteristicas</button>
        <button className="sections_btn">Funciones</button>
        <button className="sections_btn">Planes</button>
        <button className="sections_btn">Testimonios</button>
        <button className="sections_btn">Contactanos</button>
      </div>

      <div className="s3">
        <img src="" alt="" className="social_icon" />
        <img src="" alt="" className="social_icon" />
        <img src="" alt="" className="social_icon" />
      </div>
    </div>
  );
};
