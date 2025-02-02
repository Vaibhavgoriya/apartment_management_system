import { BrowserRouter as Router } from "react-router-dom";
import LandingApp from "./landing_page/Components/Landingapp"; // Correct path to LandingApp

function App() {
  return (
    <Router>
      <LandingApp />
    </Router>
  );
}

export default App;
