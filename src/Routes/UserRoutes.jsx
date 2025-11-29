import {
  Coaches_screen,
  Food_schedule_screen,
  My_routine_screen,
  Create_routine,
  Overview_screen,
  Settings_screen,
} from "../Screens/Private_Layout";

export const UserRoutes = [
  { path: "coaches", element: <Coaches_screen /> },
  { path: "food-schedule", element: <Food_schedule_screen /> },
  { path: "my-routine", element: <My_routine_screen /> },
  { path: "create-routine", element: <Create_routine /> },
  { path: "settings", element: <Settings_screen /> },
  { path: "overview", element: <Overview_screen /> },
];
