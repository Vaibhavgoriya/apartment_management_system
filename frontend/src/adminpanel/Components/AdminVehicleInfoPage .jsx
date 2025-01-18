import { useState } from "react";

const AdminVehicleInfoPage = () => {
  const [vehicles, setVehicles] = useState([
    {
      vehicleId: "V001",
      apartmentNumber: "101",
      ownerName: "John Doe",
      vehicleType: "Car",
      vehicleNumber: "GJ-01-AB-1234",
      status: "Active",
    },
    {
      vehicleId: "V002",
      apartmentNumber: "102",
      ownerName: "Jane Smith",
      vehicleType: "Bike",
      vehicleNumber: "GJ-01-CD-5678",
      status: "Inactive",
    },
    {
      vehicleId: "V003",
      apartmentNumber: "103",
      ownerName: "Emily Davis",
      vehicleType: "Car",
      vehicleNumber: "GJ-02-EF-9012",
      status: "Active",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [formState, setFormState] = useState({
    vehicleId: "",
    apartmentNumber: "",
    ownerName: "",
    vehicleType: "",
    vehicleNumber: "",
    status: "Active",
  });

  // Filter vehicles based on the search query
  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.apartmentNumber.includes(searchQuery) ||
      vehicle.vehicleType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddVehicle = () => {
    if (
      !formState.vehicleId ||
      !formState.apartmentNumber ||
      !formState.ownerName ||
      !formState.vehicleType ||
      !formState.vehicleNumber
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    setVehicles([...vehicles, formState]);
    setShowModal(false);
    resetFormState();
    alert("Vehicle added successfully!");
  };

  const handleEditVehicle = (vehicleId) => {
    const vehicle = vehicles.find((v) => v.vehicleId === vehicleId);
    setFormState(vehicle);
    setSelectedVehicle(vehicleId);
    setIsEdit(true);
    setShowModal(true);
  };

  const handleUpdateVehicle = () => {
    if (
      !formState.vehicleId ||
      !formState.apartmentNumber ||
      !formState.ownerName ||
      !formState.vehicleType ||
      !formState.vehicleNumber
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    setVehicles(
      vehicles.map((vehicle) =>
        vehicle.vehicleId === selectedVehicle ? formState : vehicle
      )
    );
    setShowModal(false);
    resetFormState();
    alert("Vehicle updated successfully!");
  };

  const handleDeleteVehicle = (vehicleId) => {
    if (
      window.confirm(`Are you sure you want to delete vehicle ID ${vehicleId}?`)
    ) {
      setVehicles(
        vehicles.filter((vehicle) => vehicle.vehicleId !== vehicleId)
      );
      alert(`Deleted Vehicle ID: ${vehicleId}`);
    }
  };

  const resetFormState = () => {
    setFormState({
      vehicleId: "",
      apartmentNumber: "",
      ownerName: "",
      vehicleType: "",
      vehicleNumber: "",
      status: "Active",
    });
    setIsEdit(false);
    setSelectedVehicle(null);
  };

  return (
    <div className="container mt-4 py-5 px-5 bg-light">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3">Vehicle Information Management</h1>
        <div className="d-flex gap-2">
          <button
            className="btn btn-primary"
            onClick={() => {
              setShowModal(true);
              resetFormState();
            }}
          >
            + Add Vehicle
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Search by Owner, Apartment, or Type"
            style={{ width: "250px" }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Vehicle ID</th>
              <th>Apartment Number</th>
              <th>Owner Name</th>
              <th>Vehicle Type</th>
              <th>Vehicle Number</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredVehicles.length > 0 ? (
              filteredVehicles.map((vehicle) => (
                <tr key={vehicle.vehicleId}>
                  <td>{vehicle.vehicleId}</td>
                  <td>{vehicle.apartmentNumber}</td>
                  <td>{vehicle.ownerName}</td>
                  <td>{vehicle.vehicleType}</td>
                  <td>{vehicle.vehicleNumber}</td>
                  <td>
                    <span
                      className={`badge ${
                        vehicle.status === "Active"
                          ? "bg-success"
                          : "bg-secondary"
                      }`}
                    >
                      {vehicle.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEditVehicle(vehicle.vehicleId)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteVehicle(vehicle.vehicleId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No vehicles match the search query.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {isEdit ? "Edit Vehicle" : "Add Vehicle"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Vehicle ID</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formState.vehicleId}
                    onChange={(e) =>
                      setFormState({ ...formState, vehicleId: e.target.value })
                    }
                    disabled={isEdit} // Disable ID in edit mode
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Apartment Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formState.apartmentNumber}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        apartmentNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Owner Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formState.ownerName}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        ownerName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Vehicle Type</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formState.vehicleType}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        vehicleType: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Vehicle Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formState.vehicleNumber}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        vehicleNumber: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={isEdit ? handleUpdateVehicle : handleAddVehicle}
                >
                  {isEdit ? "Update Vehicle" : "Add Vehicle"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminVehicleInfoPage;
