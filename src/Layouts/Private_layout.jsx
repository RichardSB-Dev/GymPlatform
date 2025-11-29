import { Sidebar } from "../Components";
import { Outlet } from "react-router-dom";
import "./styles.css";

export default function Private_layout() {
  return (
    <div className="Private-layout">
      <Sidebar />
      <div className="private-content">
        <Outlet />
      </div>
    </div>
  );
}
