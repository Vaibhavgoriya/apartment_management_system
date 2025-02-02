<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";
import LandingApp from "./landing_page/Components/Landingapp"; // Correct path to LandingApp

function App() {
  return (
    <Router>
      <LandingApp />
    </Router>
=======
import Landingapp from "./landing_page/Components/landingapp";

function App() {
  return (
    <>
      <Landingapp />
    </>
>>>>>>> e3e64316b2ae059870b55e866f8885a35657c71b
  );
}

export default App;
