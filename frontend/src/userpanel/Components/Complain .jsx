import React, { useState } from 'react';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Complaint Submitted:', formData);
    alert('Complaint submitted successfully!');
    setFormData({ date: '', title: '', description: '' }); // Reset form
  };

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
              <li className="nav-item"><a className="nav-link active" href="/">Complain</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Booking</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Notice Board</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Vehicle Info</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Complaint Form Section */}
      <div className="container my-5">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3">
            <ul className="list-group">
              <li className="list-group-item list-group-item-dark active text-center">
                <strong>Complain</strong>
              </li>
              <li className="list-group-item text-center">
                <a href="/complain-list" className="text-decoration-none text-dark">Complain List</a>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            <h2 className="mb-4">Complain Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">Complain Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="form-control"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Complain Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  placeholder="Type Complain Here"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  id="description"
                  name="description"
                  className="form-control"
                  placeholder="Type Description Here"
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark">Submit</button>
            </form>
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

export default ComplaintForm;
