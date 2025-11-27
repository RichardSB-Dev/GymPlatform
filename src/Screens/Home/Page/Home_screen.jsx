import {
  Main_section,
  Locations_section,
  Subscription_section,
  ContactUs_section,
} from "./Sections";
import { Navbar_component } from "../Components";
import "./Home_style.css";

export const Home_screen = () => {
  return (
    <div className="home_container">
      <Navbar_component />
      <Main_section />
      <Locations_section />
      <Subscription_section />
      <ContactUs_section />
    </div>
  );
};
