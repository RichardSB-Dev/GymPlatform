import { Footer } from "./Components/index.js";
import { AppRoutes } from "./Routes/routes.jsx";

import "./App.css";

function App() {
  return (
    <div className="App_container">
      <div className="AppRoutes_container">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
