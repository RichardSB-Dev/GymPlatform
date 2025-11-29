import { Footer } from "./Components/index.js";
import MainRoutes from "./Routes/MainRoutes.jsx";

import "./App.css";

function App() {
  return (
    <div className="App_container">
      <div className="AppRoutes_container">
        <MainRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
