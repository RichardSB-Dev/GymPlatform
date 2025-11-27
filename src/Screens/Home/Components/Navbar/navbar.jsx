import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar_component = () => {
  return (
    <div className="nav_container">
      <Link className="logo_container" to={"/"}>
        <img
          src="src/assets/logo_isotipo.png"
          alt="Logo GymFitSport"
          className="logo"
        />
        <span className="name_p1">GymFi</span>
        <span className="name_p2">tSport</span>
      </Link>

      <div className="buttons_container">
        <Link className="btn" to={"/"}>
          Inicio
        </Link>
        <Link className="btn" to={"/store"}>
          Store
        </Link>
        <Link className="btn" to={"/calculator"}>
          Calculator
        </Link>
      </div>
      <div className="login_container">
        <button className="login_btn">Login</button>
        <button className="register_btn">Join Now</button>
      </div>
    </div>
  );
};
