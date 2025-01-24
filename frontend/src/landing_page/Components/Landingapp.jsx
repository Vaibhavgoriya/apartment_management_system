import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingNavbar from "./LandingNavbar";
import LandingFooter from "./LandingFooter"; // Corrected component name
import Signin from "./Signin";
import Forget from "./Forget";
import Reset from "./Reset";
import Confirm from "./Confirm";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import WhyChooseUs from "./WhyChooseUs";
import Services from "./Services";
import Apartments from "./Apartments";
import ContactUs from "./ContactUs";

const LandingApp = () => {
  return (
    <Router>
      {/* Navbar */}
      <LandingNavbar />

      {/* Main Content */}
      <div className="content">
        <Routes>
          {/* Define Routes */}
          <Route path="/sign_in" element={<Signin />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/confirm" element={<Confirm />} />
          {/* Add Route */}
        </Routes>

        {/* Static Components */}
        <HeroSection />
        <AboutUs />
        <WhyChooseUs/>
        <Services/>
        <Apartments/>
        <ContactUs/>
      </div>

      {/* Footer */}
      <LandingFooter />
    </Router>
  );
};

export default LandingApp;
