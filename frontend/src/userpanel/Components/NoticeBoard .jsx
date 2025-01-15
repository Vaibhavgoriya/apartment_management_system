import React from 'react';

const NoticeBoard = () => {
  const notices = [
    {
      date: 'Nov 8th, 2023',
      title: 'Meeting',
      description: 'Navratri celebration',
      link: '#'
    }
  ];

  return (
    <div className="container-fluid bg-light min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">RNV</a>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Maintenance</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Complain</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Booking</a></li>
              <li className="nav-item"><a className="nav-link active" href="/">Notice Board</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Vehicle Info</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Notice Section */}
      <div className="container my-5">
        <h1 className="text-dark mb-4">Notice</h1>
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">View Notice</h5>
            <div className="table-responsive mt-3">
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>View More</th>
                  </tr>
                </thead>
                <tbody>
                  {notices.map((notice, index) => (
                    <tr key={index}>
                      <td>{notice.date}</td>
                      <td>{notice.title}</td>
                      <td>{notice.description}</td>
                      <td>
                        <a href={notice.link} className="btn btn-primary btn-sm">
                          Know More
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
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

export default NoticeBoard;
