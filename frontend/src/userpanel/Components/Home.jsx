
function Home() {
  return (
    <div className="container-fluid bg-light">
       <div className="col-md-6 d-flex justify-content-end">
  <div className="input-group w-auto">
    <input
      type="text"
      className="form-control"
      placeholder="Search "
      aria-label="Search "
    />
    <br/>
    <button className="btn text-white" style={{ backgroundColor: '#00003E' }}>
      Search
    </button>
  </div>
</div>
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
      
    </div>
  );
}

export default Home;
