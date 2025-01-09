
const Userapp = () => {
  return (
    <>
      <div className="wrapper">
        <aside id="sidebar" className="collapse js-sidebar">
          <div className="h-100">
            <div className="sidebar-logo">
              <a href="#">CodzSword</a>
            </div>
            <ul className="sidebar-nav">
              <li className="sidebar-header">Admin Elements</li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link">
                  <i className="fa-solid fa-list pe-2"></i>
                  Dashboard
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  href="#"
                  className="sidebar-link collapsed"
                  data-bs-target="#pages"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-file-lines pe-2"></i>
                  Pages
                </a>
                <ul
                  id="pages"
                  className="sidebar-dropdown list-unstyled collapse"
                  data-bs-parent="#sidebar"
                >
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      Page 1
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      Page 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  href="#"
                  className="sidebar-link collapsed"
                  data-bs-target="#posts"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-sliders pe-2"></i>
                  Posts
                </a>
                <ul
                  id="posts"
                  className="sidebar-dropdown list-unstyled collapse"
                  data-bs-parent="#sidebar"
                >
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      Post 1
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      Post 2
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      Post 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  href="#"
                  className="sidebar-link collapsed"
                  data-bs-target="#auth"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                >
                  <i className="fa-regular fa-user pe-2"></i>
                  Auth
                </a>
                <ul
                  id="auth"
                  className="sidebar-dropdown list-unstyled collapse"
                  data-bs-parent="#sidebar"
                >
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
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      Forgot Password
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-header">Multi Level Menu</li>
              <li className="sidebar-item">
                <a
                  href="#"
                  className="sidebar-link collapsed"
                  data-bs-target="#multi"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-share-nodes pe-2"></i>
                  Multi Dropdown
                </a>
                <ul
                  id="multi"
                  className="sidebar-dropdown list-unstyled collapse"
                  data-bs-parent="#sidebar"
                >
                  <li className="sidebar-item">
                    <a
                      href="#"
                      className="sidebar-link collapsed"
                      data-bs-target="#level-1"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                    >
                      Level 1
                    </a>
                    <ul
                      id="level-1"
                      className="sidebar-dropdown list-unstyled collapse"
                    >
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                          Level 1.1
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                          Level 1.2
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>
        <div className="main">
          <nav className="navbar navbar-expand px-3 border-bottom">
            <button
              className="btn"
              id="sidebar-toggle"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidebar"
              aria-expanded="false"
              aria-controls="sidebar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse navbar">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    data-bs-toggle="dropdown"
                    className="nav-icon pe-md-0"
                  >
                    <img
                      src="image/profile.jpg"
                      className="avatar img-fluid rounded"
                      alt=""
                    />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a href="#" className="dropdown-item">
                      Profile
                    </a>
                    <a href="#" className="dropdown-item">
                      Setting
                    </a>
                    <a href="#" className="dropdown-item">
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <main className="content px-3 py-2">
            <div className="container-fluid">
              <div className="mb-3">
                <h4>Admin Dashboard</h4>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 d-flex">
                  <div className="card flex-fill border-0 illustration">
                    <div className="card-body p-0 d-flex flex-fill">
                      <div className="row g-0 w-100">
                        <div className="col-6">
                          <div className="p-3 m-1">
                            <h4>Welcome Back, Admin</h4>
                            <p className="mb-0">Admin Dashboard, CodzSword</p>
                          </div>
                        </div>
                        <div className="col-6 align-self-end text-end">
                          <img
                            src="image/customer-support.jpg"
                            className="img-fluid illustration-img"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex">
                  <div className="card flex-fill border-0">
                    <div className="card-body py-4">
                      <div className="d-flex align-items-start">
                        <div className="flex-grow-1">
                          <h4 className="mb-2">$ 78.00</h4>
                          <p className="mb-2">Total Earnings</p>
                          <div className="mb-0">
                            <span className="badge text-success me-2">
                              +9.0%
                            </span>
                            <span className="text-muted">Since Last Month</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card border-0">
                <div className="card-header">
                  <h5 className="card-title">Basic Table</h5>
                  <h6 className="card-subtitle text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum ducimus, necessitatibus reprehenderit itaque!
                  </h6>
                </div>
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
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
          </main>
          <a href="#" className="theme-toggle">
            <i className="fa-regular fa-moon"></i>
            <i className="fa-regular fa-sun"></i>
          </a>
          <footer className="footer">
            <div className="container-fluid">
              <div className="row text-muted">
                <div className="col-6 text-start">
                  <p className="mb-0">
                    <a href="#" className="text-muted">
                      <strong>CodzSwod</strong>
                    </a>
                  </p>
                </div>
                <div className="col-6 text-end">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="#" className="text-muted">
                        Contact
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="text-muted">
                        About Us
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="text-muted">
                        Terms
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="text-muted">
                        Booking
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"></script>
      <script src="js/script.js"></script>
    </>
  );
};

export default Userapp;
