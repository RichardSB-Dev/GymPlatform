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
        <Link className="btn" to={"/calc-weight"}>
          Calculator
        </Link>
      </div>
      <div className="login-btns_container">
        <Link to={"/login"} className="login_btn">
          Login
        </Link>
        <Link to={"/register"} className="register_btn">
          Join Now
        </Link>
      </div>
    </div>
  );
};
