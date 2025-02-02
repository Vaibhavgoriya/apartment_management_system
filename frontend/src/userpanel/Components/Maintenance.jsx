const Maintenance = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 px-5 py-5">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="fw-bold text-dark mb-1">Maintenance Dashboard</h1>
          <p className="text-muted mb-0">
            Keep track of your pending and paid maintenance payments easily.
          </p>
        </div>
        <div className="input-group w-25 shadow-sm">
          <input
            type="text"
            className="form-control rounded-start"
            placeholder="Search by Flat, Amount, or Status"
            aria-label="Search"
          />
        </div>
      </div>

      {/* Pending Maintenance Section */}
      <div className="mb-5">
        <h2 className="fw-bold text-primary mb-3">Pending Maintenance</h2>
        <div
          className="table-responsive shadow-sm rounded bg-white p-3"
          style={{ border: "1px solid #ddd" }}
        >
          <table className="table table-bordered table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>SR NO</th>
                <th>Amount Due</th>
                <th>Payment Status</th>
                <th>Due Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td className="text-danger fw-bold">₹300</td>
                <td>
                  <span className="badge bg-warning text-dark">Pending</span>
                </td>
                <td className="text-muted">30-12-2024</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm text-white"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #007bff, #0056b3)",
                      borderRadius: "8px",
                    }}
                  >
                    Pay Now
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Paid Maintenance Section */}
      <div>
        <h2 className="fw-bold text-success mb-3">Paid Maintenance</h2>
        <div
          className="table-responsive shadow-sm rounded bg-white p-3"
          style={{ border: "1px solid #ddd" }}
        >
          <table className="table table-bordered table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>SR NO</th>
                <th>Amount Paid</th>
                <th>Payment Status</th>
                <th>Payment Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td className="text-success fw-bold">₹300</td>
                  <td>
                    <span className="badge bg-success">Paid</span>
                  </td>
                  <td className="text-muted">30-12-2024</td>
                  <td>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      style={{ borderRadius: "8px" }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
