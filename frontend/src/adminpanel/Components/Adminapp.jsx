import { useState } from "react";
import avatarImage from "../Assets/image/account.png"; // Adjust the path if needed

const Adminapp = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false); // Added state for Auth dropdown
  const [isMultiOpen, setIsMultiOpen] = useState(false); // Added state for Multi dropdown

  const toggleSidebar = () => {
    setIsSidebarExpanded((prevState) => !prevState);
  };

  const toggleAuthDropdown = () => {
    setIsAuthOpen((prevState) => !prevState);
  };

  const toggleMultiDropdown = () => {
    setIsMultiOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={`wrapper ${isSidebarExpanded ? "sidebar-expanded" : ""}`}>
        <aside id="sidebar" className={isSidebarExpanded ? "expand" : ""}>
          <div className="d-flex">
            <button
              className="toggle-btn"
              type="button"
              onClick={toggleSidebar}
            >
              <i className="lni lni-grid-alt"></i>
            </button>
            <div className="sidebar-logo">
              <a href="#">CodzSword</a>
            </div>
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="lni lni-user"></i>
                <span>Profile</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="lni lni-agenda"></i>
                <span>Task</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                href="#"
                className="sidebar-link collapsed has-dropdown"
                onClick={toggleAuthDropdown}
              >
                <i className="lni lni-protection"></i>
                <span>Auth</span>
              </a>
              {isAuthOpen && (
                <ul className="sidebar-dropdown list-unstyled">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      Login
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      Register
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="sidebar-item">
              <a
                href="#"
                className="sidebar-link collapsed has-dropdown"
                onClick={toggleMultiDropdown}
              >
                <i className="lni lni-layout"></i>
                <span>Multi Level</span>
              </a>
              {isMultiOpen && (
                <ul className="sidebar-dropdown list-unstyled">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      Two Links
                    </a>
                    <ul className="sidebar-dropdown list-unstyled">
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                          Link 1
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                          Link 2
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="lni lni-popup"></i>
                <span>Notification</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="lni lni-cog"></i>
                <span>Setting</span>
              </a>
            </li>
          </ul>
          <div className="sidebar-footer">
            <a href="#" className="sidebar-link">
              <i className="lni lni-exit"></i>
              <span>Logout</span>
            </a>
          </div>
        </aside>
        <div className="main">
          <nav className="navbar navbar-expand px-4 py-3">
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    data-bs-toggle="dropdown"
                    className="nav-icon pe-md-0"
                  >
                    <img
                      src={ avatarImage }
                      className="avatar img-fluid"
                      alt="User Avatar"
                    />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end rounded">
                    {/* Add items to the dropdown menu if needed */}
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <main className="content px-3 py-4">
            <div className="container-fluid">
              <div className="mb-3">
                <h3 className="fw-bold fs-4 mb-3">Admin Dashboard</h3>
                <div className="row">
                  {/* Repeat this block for each stat card */}
                  <div className="col-12 col-md-4">
                    <div className="card border-0">
                      <div className="card-body py-4">
                        <h5 className="mb-2 fw-bold">Members Progress</h5>
                        <p className="mb-2 fw-bold">$72,540</p>
                        <div className="mb-0">
                          <span className="badge text-success me-2">+9.0%</span>
                          <span className="fw-bold">Since Last Month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="card border-0">
                      <div className="card-body py-4">
                        <h5 className="mb-2 fw-bold">Members Progress</h5>
                        <p className="mb-2 fw-bold">$72,540</p>
                        <div className="mb-0">
                          <span className="badge text-success me-2">+9.0%</span>
                          <span className="fw-bold">Since Last Month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="card border-0">
                      <div className="card-body py-4">
                        <h5 className="mb-2 fw-bold">Members Progress</h5>
                        <p className="mb-2 fw-bold">$72,540</p>
                        <div className="mb-0">
                          <span className="badge text-success me-2">+9.0%</span>
                          <span className="fw-bold">Since Last Month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="fw-bold fs-4 my-3">Avg. Agent Earnings</h3>
                <div className="row">
                  <div className="col-12">
                    <table className="table table-striped">
                      <thead>
                        <tr className="highlight">
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Larry the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="footer">
            <div className="container-fluid">
              <div className="row text-body-secondary">
                <div className="col-6 text-start">
                  <a className="text-body-secondary" href="#">
                    <strong>CodzSwod</strong>
                  </a>
                </div>
                <div className="col-6 text-end text-body-secondary d-none d-md-block">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a className="text-body-secondary" href="#">
                        Contact
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-body-secondary" href="#">
                        About Us
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-body-secondary" href="#">
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Adminapp;
