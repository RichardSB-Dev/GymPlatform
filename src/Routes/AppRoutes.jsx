import { Route, Routes } from "react-router-dom";
import {
  Home_screen,
  PageNotFound_screen,
  Store_screen,
  Calculator_weight_screen,
  Forgot_password_screen,
  Login_screen,
  Register_screen,
} from "../Screens/index.js";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home_screen />} />
      <Route path="/store" element={<Store_screen />} />
      <Route path="/calc-weight" element={<Calculator_weight_screen />} />
      <Route path="/fotgot-password" element={<Forgot_password_screen />} />
      <Route path="/login" element={<Login_screen />} />
      <Route path="/register" element={<Register_screen />} />

      <Route path="*" element={<PageNotFound_screen />} />
    </Routes>
  );
};
