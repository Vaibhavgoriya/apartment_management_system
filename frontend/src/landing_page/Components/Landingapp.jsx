import { Element } from "react-scroll"; // For smooth scrolling
import { Routes, Route, useLocation } from "react-router-dom";
import LandingNavbar from "./LandingNavbar";
import LandingFooter from "./LandingFooter";
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
  const location = useLocation();

  return (
    <div>
      {/* Navbar */}
      <LandingNavbar />

      {/* Main Content */}
      <div>
        <Routes>
          {/* Define Routes */}
          <Route path="/sign_in" element={<Signin />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>

        {/* Static Components (Single Page) */}
        {location.pathname === "/" && (
          <>
            <Element name="hero">
              <HeroSection />
            </Element>
            <Element name="aboutUs">
              <AboutUs />
            </Element>
            <Element name="whyChooseUs">
              <WhyChooseUs />
            </Element>
            <Element name="services">
              <Services />
            </Element>
            <Element name="apartments">
              <Apartments />
            </Element>
            <Element name="contactUs">
              <ContactUs />
            </Element>
          </>
        )}
      </div>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
};

export default LandingApp;
