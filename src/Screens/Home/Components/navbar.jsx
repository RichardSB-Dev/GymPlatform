import { Link } from "react-router-dom";

export const navbar = () => {
  return (
    <div className="nav_container">
        <Link className="container" to={'/'}>
            <img src="src/assets/logo_isotipo.png" alt="" className="logo" />
            <span className="name_p1"></span>
            <span className="name_p2"></span>
        </Link>
        <div className="container"></div>
        <div className="container"></div>
    </div>
  )
}
