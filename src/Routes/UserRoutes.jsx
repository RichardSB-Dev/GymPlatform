import { Route, Routes } from "react-router-dom";
import {
  Coaches_screen,
  Food_schedule_screen,
  My_routine_screen,
  Overview_screen,
  Settings_screen,
  PageNotFound_screen,
} from "../Screens";

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/coaches" element={<Coaches_screen />} />
      <Route path="/food-schedule" element={<Food_schedule_screen />} />
      <Route path="/my-routine" element={<My_routine_screen />} />
      <Route path="/overview" element={<Overview_screen />} />
      <Route path="/settings" element={<Settings_screen />} />

      <Route path="*" element={<PageNotFound_screen />} />
    </Routes>
  );
};
