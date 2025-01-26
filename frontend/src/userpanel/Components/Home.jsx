import { useState } from "react";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleShow = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const users = [
    { id: 1, name: "Nishant", flat: "X01", wing: "A", mobile: "200000001" },
    { id: 2, name: "Jenil", flat: "X02", wing: "A", mobile: "200000002" },
    { id: 3, name: "Vaibhav", flat: "X03", wing: "B", mobile: "200000003" },
    { id: 4, name: "Nenis", flat: "X04", wing: "B", mobile: "200000004" },
    { id: 5, name: "Krupansu", flat: "X05", wing: "C", mobile: "200000005" },
    { id: 6, name: "Jay", flat: "X06", wing: "C", mobile: "200000006" },
    { id: 7, name: "Rupala", flat: "X07", wing: "D", mobile: "200000007" },
    { id: 8, name: "New Rupala", flat: "X08", wing: "D", mobile: "200000008" },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.flat.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.wing.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid px-5 py-5 mt-5 bg-light">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        {/* Title and Subtitle */}
        <div>
          <h1 className="fw-bold text-dark mb-1">Apartment Residents</h1>
          <p className="text-muted mb-0">
            Manage and explore resident details easily.
          </p>
        </div>

        {/* Search Bar */}
        <div className="input-group" style={{ width: "30%" }}>
          <input
            type="text"
            className="form-control rounded"
            placeholder="Search by Name, Flat, or Wing"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* User Cards */}
      <div className="container">
        <div className="row g-4">
          {filteredUsers.map((user) => (
            <div className="col-md-3" key={user.id}>
              <div
                className="card border-0 shadow h-100"
                style={{
                  borderRadius: "12px",
                  transition: "transform 0.3s",
                }}
              >
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-primary">
                    {user.name}
                  </h5>
                  <p className="card-text text-muted mb-2">
                    <strong>Flat:</strong> {user.flat}
                  </p>
                  <p className="card-text text-muted mb-3">
                    <strong>Wing:</strong> {user.wing}
                  </p>
                  <p className="card-text text-muted mb-4">
                    <strong>Mobile:</strong> {user.mobile}
                  </p>
                  <button
                    className="btn btn-primary btn-sm w-75 text-white"
                    onClick={() => handleShow(user)}
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #007bff, #0056b3)",
                    }}
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filteredUsers.length === 0 && (
            <div className="text-center text-muted">
              <p>No users found.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedUser && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content shadow-lg"
              style={{ borderRadius: "15px" }}
            >
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">{selectedUser.name}</h5>
                <button
                  type="button"
                  className="btn-close bg-light"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <p className="mb-2">
                  <strong>Flat No:</strong> {selectedUser.flat}
                </p>
                <p className="mb-2">
                  <strong>Wing:</strong> {selectedUser.wing}
                </p>
                <p className="mb-2">
                  <strong>Mobile No:</strong> {selectedUser.mobile}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={handleClose}
                  style={{ borderRadius: "10px" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
