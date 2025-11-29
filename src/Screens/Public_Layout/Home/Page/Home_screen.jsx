import {
  Main_section,
  Locations_section,
  Subscription_section,
  AboutUs_section,
  ContactUs_section,
} from "../Sections";
import "../Style/Home_style.css";

export const Home_screen = () => {
  return (
    <div className="home_container">
      <Main_section />
      <AboutUs_section />
      <Locations_section />
      <Subscription_section />
      <ContactUs_section />
    </div>
  );
};
