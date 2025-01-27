import { NavLink } from "react-router-dom";
import "../Assets/css/landingstyle.css"; // Ensure this path is correct

const LandingNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#000033" }}
    >
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-white fs-2" to="/">
          RNV
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            {/* Add a fallback SVG for the icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="white"
              width="20"
              height="20"
            >
              <path
                fillRule="evenodd"
                d="M1.5 12a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13zm0-4a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13zm0-4a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13z"
              />
            </svg>
          </span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "active" : ""}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "active" : ""}`
                }
                to="/maintenance"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "active" : ""}`
                }
                to="/complain"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "active" : ""}`
                }
                to="/booking"
              >
                Apartments
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "active" : ""}`
                }
                to="/notice-board"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/sign_in" className="btn btn-warning">
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default LandingNavbar;
