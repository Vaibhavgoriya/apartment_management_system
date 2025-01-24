const Apartments = () => {
    return (
      <div className="container py-5">
        {/* Title Section */}
        <h2 className="text-center fw-bold mb-2">Apartments</h2>
        <p className="text-center text-muted mb-4">Quis in porttitor purus sed</p>
  
        {/* Cards Section */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Card 1 */}
          <div className="col">
            <div className="card h-100 text-center bg-light">
              <div className="card-body p-4">
                <div className="display-4 mb-3">🏢</div>
                <h5 className="card-title fw-bold">View Apartments</h5>
                <p className="card-text text-muted">
                  Browse through the available apartments in your community.
                </p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <a href="#" className="btn btn-outline-dark">
                  Know More
                </a>
              </div>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="col">
            <div className="card h-100 text-center bg-light">
              <div className="card-body p-4">
                <div className="display-4 mb-3">🛠</div>
                <h5 className="card-title fw-bold">Manage Apartments</h5>
                <p className="card-text text-muted">
                  Efficiently manage and update apartment details.
                </p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <a href="#" className="btn btn-outline-dark">
                  Know More
                </a>
              </div>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="col">
            <div className="card h-100 text-center bg-light">
              <div className="card-body p-4">
                <div className="display-4 mb-3">🔍</div>
                <h5 className="card-title fw-bold">Search Apartments</h5>
                <p className="card-text text-muted">
                  Find all the details about your apartment.
                </p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <a href="#" className="btn btn-outline-dark">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Apartments;