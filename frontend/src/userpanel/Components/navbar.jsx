import { NavLink } from "react-router-dom";
import "../Assets/css/userstyle.css"; // Minimal custom tweaks

const Navbar = () => {
  return (
    <>
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
            <span className="navbar-toggler-icon"></span>
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
                  Maintenance
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-white ${isActive ? "active" : ""}`
                  }
                  to="/complain"
                >
                  Complain
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-white ${isActive ? "active" : ""}`
                  }
                  to="/booking"
                >
                  Booking
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-white ${isActive ? "active" : ""}`
                  }
                  to="/notice-board"
                >
                  Notice Board
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-white ${isActive ? "active" : ""}`
                  }
                  to="/vehicle-info"
                >
                  Vehicle Info
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/sign-in" className="btn btn-warning">
            Sign In
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
