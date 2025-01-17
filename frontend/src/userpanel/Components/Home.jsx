import React from "react";

function App() {
  return (
    <div className="container-fluid bg-light">
      {" "}
      {/* Fluid container for full width, light background */}
      <div className="container mt-4">
        {" "}
        {/* Main content container with top margin */}
        <div className="row">
          {[1, 2, 3, 4].map(
            (
              i // Map to create 4 cards
            ) => (
              <div className="col-md-3 mb-4" key={i}>
                {" "}
                {/* Responsive columns, margin bottom */}
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Nisha Tal</h5>{" "}
                    {/* Example name */}
                    <p className="card-text">Flat No - X0{i}</p>
                    <p className="card-text">Wing - A</p>
                    <p className="card-text">Mobile No - 20000000{i}</p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <a href="#" className="btn btn-primary">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <footer className="bg-dark text-light py-3 mt-4">
        {" "}
        {/* Footer with dark background, light text, padding */}
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p>Copyright © 2023 RNV</p>
              <p>Designed by RNV</p>
            </div>
            <div className="col-md-4 text-center">
              <h5>About Us</h5>
              <p>
                To bridge the gap between residents and management through
                intuitive technology, ensuring better communication,
                transparency, and convenience for all.
              </p>
            </div>
            <div className="col-md-4 text-end">
              <h5>Contact Info</h5>
              <p>Umiya Chowck, Rajkot, Gujarat</p>
              <p>+91 7984767882</p>
              <p>mw123@gmail.com</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <p>Follow Us</p>
            </div>
            <div className="col-md-6 text-end">
              <p>Privacy Terms</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
