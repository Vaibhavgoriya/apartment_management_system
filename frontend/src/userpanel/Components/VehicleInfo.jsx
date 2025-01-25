
const VehicleInfo = () => {
  return (
    <div className="container-fluid bg-light px-5 py-2 ">
          <div className="container my-5">
      <h2 className="text-center mb-4 row justify-content-left fw-bold" style={{ color: "#00003E" }}>Vehicle Info</h2>
      <div className="row justify-content-left mb-3">
          <div className="col-md-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search Vehicle Number ..."
                aria-label="Search Vehicle Number"
              />
              <button className="btn btn-dark"style={{ backgroundColor: '#00003E' }}>Search</button>
            </div>
          </div>
        </div>
        <br/>
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

     
    </div>
  );
};

export default VehicleInfo;
