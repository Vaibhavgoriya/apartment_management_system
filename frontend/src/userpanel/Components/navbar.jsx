import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../Assets/css/userstyle.css"; // Your custom CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for dropdown toggle

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#052C65" }}>
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
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/maintenance">Maintenance</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/complain">Complain</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/booking">Booking</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/notice-board">Notice Board</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/addVisitorPage">Add Visitor</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/vehicle-info">Vehicle Info</NavLink>
            </li>
          </ul>
        </div>

        {/* Profile Icon Dropdown */}
        <div className="dropdown">
          <button
            className="btn text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <i className="bi bi-person-circle fs-4"></i>
          </button>

          {isOpen && (
            <ul className="dropdown-menu dropdown-menu-end show">
              <li>
                <NavLink className="dropdown-item" to="/profile">
                  <i className="bi bi-person"></i> Profile
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/logout">
                  <i className="bi bi-box-arrow-right"></i> Logout
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
