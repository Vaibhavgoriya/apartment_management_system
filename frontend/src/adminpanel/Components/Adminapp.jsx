import { useState } from "react";

const Adminapp = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded((prevState) => !prevState);
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
                      src="/account.png"
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
                <div className="row">{/* Stat cards */}</div>
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
