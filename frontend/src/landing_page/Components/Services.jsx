const Services = () => {
    return (
      <div className="container py-5">
        {/* Title */}
        <h2 className="text-center fw-bold mb-3">Our Services</h2>
        <p className="text-center text-muted mb-4">What We can do for you.</p>
  
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {/* Service 1 */}
          <div className="col">
            <div className="card text-center bg-dark text-light h-100">
              <div className="card-body p-4">
                <div className="display-4 mb-3">🔧</div>
                <h5 className="card-title fw-bold">Easy Maintenance</h5>
                <p className="card-text">
                  Submit and track maintenance requests effortlessly.
                </p>
              </div>
              <div className="card-footer bg-transparent p-3">
                <a href="#" className="btn btn-outline-light">
                  Learn More
                </a>
              </div>
            </div>
          </div>
  
          {/* Service 2 */}
          <div className="col">
            <div className="card text-center bg-warning h-100">
              <div className="card-body p-4">
                <div className="display-4 mb-3">💳</div>
                <h5 className="card-title fw-bold">Simplified Billing</h5>
                <p className="card-text">
                  Manage bills and payments in one place.
                </p>
              </div>
              <div className="card-footer bg-transparent p-3">
                <a href="#" className="btn btn-dark">
                  Learn More
                </a>
              </div>
            </div>
          </div>
  
          {/* Service 3 */}
          <div className="col">
            <div className="card text-center bg-dark text-light h-100">
              <div className="card-body p-4">
                <div className="display-4 mb-3">📢</div>
                <h5 className="card-title fw-bold">Stay Updated</h5>
                <p className="card-text">
                  Receive instant updates and announcements.
                </p>
              </div>
              <div className="card-footer bg-transparent p-3">
                <a href="#" className="btn btn-outline-light">
                  Learn More
                </a>
              </div>
            </div>
          </div>
  
          {/* Service 4 */}
          <div className="col">
            <div className="card text-center bg-warning h-100">
              <div className="card-body p-4">
                <div className="display-4 mb-3">🔒</div>
                <h5 className="card-title fw-bold">Secure Living</h5>
                <p className="card-text">
                  Ensure a safe and reliable environment.
                </p>
              </div>
              <div className="card-footer bg-transparent p-3">
                <a href="#" className="btn btn-dark">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;