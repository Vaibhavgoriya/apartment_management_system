import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import "../Assets/css/landingstyle.css"; // Your custom CSS

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(""); // To track the active link based on scroll

  // Function to check if link is active
  const isActive = (sectionId) => activeLink === sectionId;

  // Handle navbar collapse after clicking
  const handleNavItemClick = () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  // Handle scroll and update the active link based on section in view
  const handleScroll = () => {
    const sections = document.querySelectorAll(".scroll-section");
    let found = false;
    sections.forEach((section) => {
      if (
        section.getBoundingClientRect().top <= window.innerHeight / 2 &&
        !found
      ) {
        setActiveLink(section.id); // Set active link based on the section in view
        found = true;
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{ backgroundColor: "#052C65" }}
    >
      <div className="container">
        {/* Brand Logo */}
        {location.pathname === "/" ? (
          <ScrollLink
            className="navbar-brand fw-bold text-white fs-2"
            to="hero"
            smooth={true}
            duration={500}
          >
            RNV
          </ScrollLink>
        ) : (
          <Link to="/" className="navbar-brand fw-bold text-white fs-2">
            RNV
          </Link>
        )}

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto text-center">
            {[
              { path: "/", label: "Home", scrollTarget: "hero" },
              { path: "/about", label: "About Us", scrollTarget: "aboutUs" },
              {
                path: "/why-choose-us",
                label: "Why Choose Us",
                scrollTarget: "whyChooseUs",
              },
              {
                path: "/services",
                label: "Services",
                scrollTarget: "services",
              },
              {
                path: "/apartments",
                label: "Apartments",
                scrollTarget: "apartments",
              },
              {
                path: "/contact",
                label: "Contact Us",
                scrollTarget: "contactUs",
              },
            ].map(({ path, label, scrollTarget }) => (
              <li className="nav-item" key={path}>
                {location.pathname === "/" ? (
                  <ScrollLink
                    className={`nav-link text-white ${
                      isActive(scrollTarget) ? "active" : ""
                    }`}
                    to={scrollTarget}
                    smooth={true}
                    duration={500}
                    onClick={handleNavItemClick}
                  >
                    {label}
                  </ScrollLink>
                ) : (
                  <Link
                    to={path}
                    className={`nav-link text-white ${
                      isActive(scrollTarget) ? "active" : ""
                    }`}
                    onClick={handleNavItemClick}
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Sign In Button */}
          <div className="d-flex">
            <Link to="/sign_in" className="btn btn-warning">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
