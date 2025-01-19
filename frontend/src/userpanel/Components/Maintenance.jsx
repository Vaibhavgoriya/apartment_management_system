const Maintenance = () => {
  return (
    <div className="container-fluid bg-light min-vh-100">
             <h2 className="fw-bold mt-5">Pending Maintenance</h2>

      {/* Main Content */}
      <div className="container my-5">
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-secondary">
              <tr>
                <th>SR</th>
                <th>Amount Due</th>
                <th>Payment Status</th>
                <th>Due Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td>₹300</td>
                <td>Pending</td>
                <td>30-12-2024</td>
                <td><a href="#" className="text-primary text-decoration-none">Pay Now</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="fw-bold mt-5">Paid Maintenance</h2>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-secondary">
              <tr>
                <th>SR</th>
                <th>Amount Due</th>
                <th>Payment Status</th>
                <th>Payment Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td><input type="checkbox" /></td>
                  <td>₹300</td>
                  <td>Paid</td>
                  <td>30-12-2024</td>
                  <td><a href="#" className="text-primary text-decoration-none">View</a></td>
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
