import { NavLink } from "react-router-dom";
import "../Assets/css/landingstyle.css"; // Your custom CSS

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{ backgroundColor: "#052C65" }}
    >
      <div className="container">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-brand fw-bold text-white fs-2">
          RNV
        </a>

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
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link text-white"
                onClick={() => {
                  const heroSection = document.getElementById("hero");
                  if (heroSection) {
                    heroSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <a href="#aboutUs" className="nav-link text-white">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#whyChooseUs" className="nav-link text-white">
                Why Choose Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link text-white">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#apartments" className="nav-link text-white">
                Apartments
              </a>
            </li>
            <li className="nav-item">
              <a href="#contactUs" className="nav-link text-white">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Sign In Button */}
          <div className="d-flex">
          <NavLink to="/sign_in" className="btn btn-warning">
  Sign In
</NavLink>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
