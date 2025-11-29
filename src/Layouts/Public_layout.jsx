import { Navbar_component } from "../Components";
import { Outlet } from "react-router-dom";

export default function Public_layout() {
  return (
    <>
      <Navbar_component />
      <main>
        <Outlet />
      </main>
    </>
  );
}
