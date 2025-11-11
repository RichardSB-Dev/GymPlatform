import { img } from "../assets/logo.jpg";

export const Navbar = () => {
  return (
    <div className="Navbar_container">
      <div className="s1">
        <div className="img_container">
          <img src={img} alt="" />
        </div>
        <span className="title">Gym-Vythra</span>
      </div>

      <div className="s2">
        <button className="sections_btn">Caracteristicas</button>
        <button className="sections_btn">Funciones</button>
        <button className="sections_btn">Planes</button>
        <button className="sections_btn">Testimonios</button>
        <button className="sections_btn">Contactanos</button>
      </div>

      <div className="s3">
        <button className="log_btn">Prueba Gratis</button>
      </div>
    </div>
  );
};
