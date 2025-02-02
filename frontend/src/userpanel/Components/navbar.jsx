import { NavLink } from "react-router-dom";
import "../Assets/css/userstyle.css"; // Minimal custom tweaks

const Navbar = () => {
  // Function to handle collapsing the navbar after clicking a nav item
  const handleNavItemClick = () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#052C65" }}
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
                  onClick={handleNavItemClick} // Collapse the navbar when clicked
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
                  onClick={handleNavItemClick} // Collapse the navbar when clicked
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
                  onClick={handleNavItemClick} // Collapse the navbar when clicked
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
                  onClick={handleNavItemClick} // Collapse the navbar when clicked
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
                  onClick={handleNavItemClick} // Collapse the navbar when clicked
                >
                  Notice Board
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-white ${isActive ? "active" : ""}`
                  }
                  to="/addVisitorPage"
                  onClick={handleNavItemClick} // Collapse the navbar when clicked
                >
                  Add Visitor
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-white ${isActive ? "active" : ""}`
                  }
                  to="/vehicle-info"
                  onClick={handleNavItemClick} // Collapse the navbar when clicked
                >
                  Vehicle Info
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
