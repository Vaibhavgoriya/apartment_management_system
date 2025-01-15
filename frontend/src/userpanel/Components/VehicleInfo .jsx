
const VehicleInfo = () => {
  return (
    <div className="container-fluid bg-light min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">RNV</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Maintenance</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Complain</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Booking</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Notice Board</a></li>
              <li className="nav-item"><a className="nav-link active" href="/">Vehicle Info</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Vehicle Info Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Vehicle Info</h2>
        <div className="row justify-content-center mb-3">
          <div className="col-md-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search Vehicle Number ..."
                aria-label="Search Vehicle Number"
              />
              <button className="btn btn-dark">Search</button>
            </div>
          </div>
        </div>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Apartment</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Analysis Name</td>
              <td>A-202</td>
              <td>9899999999</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5>About Us</h5>
              <p>To bridge the gap between residents and management through intuitive technology, ensuring better communication, transparency, and convenience for all.</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Location</h5>
              <p>RNV Company<br />Rajkot, Gujarat, India.</p>
            </div>
            <div className="col-md-4">
              <h5>Contact Info</h5>
              <p>Umiyachowk, Rajkot<br />+91 7984677683<br />rn123@gmail.com</p>
            </div>
          </div>
          <div className="text-center">
            <small>Copyright © 2023 RNV. Designed by RNV.</small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VehicleInfo;
