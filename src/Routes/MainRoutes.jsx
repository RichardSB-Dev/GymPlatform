import { useAuth } from "../Context/AuthContext";
import { Routes, Route, Navigate } from "react-router-dom";

import Public_layout from "../Layouts/Public_layout";
import Private_layout from "../Layouts/Private_layout";

import { AppRoutes } from "./AppRoutes";
import { UserRoutes } from "./UserRoutes";
import { PageNotFound_screen } from "../Screens/Public_Layout";

export default function MainRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/** Rutas publicas */}
      <Route element={<Public_layout />}>
        {AppRoutes.map((r, i) => (
          <Route key={i} path={r.path} element={r.element} />
        ))}
      </Route>

      {/** Rutas Privadas */}
      <Route
        path="/app"
        element={
          isAuthenticated ? <Private_layout /> : <Navigate to="/login" />
        }
      >
        {/* Ruta index que redirecciona a overview */}
        <Route index element={<Navigate to="/app/overview" replace />} />

        {UserRoutes.map((r, i) => (
          <Route key={i} path={r.path} element={r.element} />
        ))}
      </Route>

      {/** si no hay usuario te manda al login */}
      <Route path="*" element={<PageNotFound_screen />} />
    </Routes>
  );
}
