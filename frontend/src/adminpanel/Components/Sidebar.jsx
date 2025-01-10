import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <aside id="sidebar" className={isExpanded ? "expand" : ""}>
      <div className="d-flex">
        <button className="toggle-btn" type="button" onClick={toggleSidebar}>
          <i className="lni lni-grid-alt"></i>
        </button>
        <div className="sidebar-logo">
          <a href="#">CodzSword</a>
        </div>
      </div>
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/dashboardcontent" className="sidebar-link">
            <i className="lni lni-dashboard me-2"></i>
            <span>Dashboardcontent</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/profile" className="sidebar-link">
            <i className="lni lni-user"></i>
            <span>Profile</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/task" className="sidebar-link">
            <i className="lni lni-agenda"></i>
            <span>Task</span>
          </Link>
        </li>
        {/* Auth Dropdown */}
        <li className="sidebar-item">
          <a
            href="#auth"
            className="sidebar-link collapsed has-dropdown"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="auth"
          >
            <i className="lni lni-protection"></i>
            <span>Auth</span>
          </a>
          <ul id="auth" className="sidebar-dropdown list-unstyled collapse">
            <li className="sidebar-item">
              <Link to="/login" className="sidebar-link">
                Login
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/register" className="sidebar-link">
                Register
              </Link>
            </li>
          </ul>
        </li>
        {/* Multi-Level Dropdown */}
        <li className="sidebar-item">
          <a
            href="#multi"
            className="sidebar-link collapsed has-dropdown"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="multi"
          >
            <i className="lni lni-layout"></i>
            <span>Multi Level</span>
          </a>
          <ul id="multi" className="sidebar-dropdown list-unstyled collapse">
            <li className="sidebar-item">
              <a
                href="#multi-two"
                className="sidebar-link collapsed"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="multi-two"
              >
                Two Links
              </a>
              <ul
                id="multi-two"
                className="sidebar-dropdown list-unstyled collapse"
              >
                <li className="sidebar-item">
                  <Link to="/link1" className="sidebar-link">
                    Link 1
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/link2" className="sidebar-link">
                    Link 2
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="sidebar-item">
          <Link to="/notification" className="sidebar-link">
            <i className="lni lni-popup"></i>
            <span>Notification</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/settings" className="sidebar-link">
            <i className="lni lni-cog"></i>
            <span>Settings</span>
          </Link>
        </li>
      </ul>
      <div className="sidebar-footer">
        <a href="#" className="sidebar-link">
          <i className="lni lni-exit"></i>
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
