import { useState } from "react";

const VehicleInfo = () => {
  const vehicles = [
    { id: "V001", name: "Analysis Name", phone: "9899999999" },
    { id: "V002", name: "Nishant", phone: "9888888888" },
    { id: "V003", name: "Radhesh", phone: "9777777777" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);

  // Update filtered vehicles as the user types
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filtered = vehicles.filter((vehicle) =>
      vehicle.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVehicles(filtered);
  };

  return (
    <div className="container-fluid bg-light px-5 py-5">
      <div className="container my-5">
        <div className="row justify-content-between align-items-center mb-4">
          <div className="col-md-6">
            <h2 className="fw-bold text-dark mb-1" style={{ color: "#00003E" }}>
              Vehicle Info
            </h2>
            <p className="text-muted mb-0">
              Search and view vehicle details easily.
            </p>
          </div>
          <div className="col-md-6 text-end">
            <div
              className="input-group shadow-sm rounded"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #ddd",
              }}
            >
              <input
                type="text"
                className="form-control w-25" // 25% of container width
                placeholder="Search Vehicle Name..."
                aria-label="Search Vehicle Name"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>

        {/* Vehicle Table Section */}
        <div
          className="shadow-sm rounded bg-white p-4"
          style={{ border: "1px solid #ddd" }}
        >
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr style={{backgroundColor:"#052C65"}}>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {filteredVehicles.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center text-muted">
                    No results found.
                  </td>
                </tr>
              ) : (
                filteredVehicles.map((vehicle, index) => (
                  <tr key={index}>
                    <td>{vehicle.id}</td>
                    <td>{vehicle.name}</td>
                    <td>{vehicle.phone}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VehicleInfo;
