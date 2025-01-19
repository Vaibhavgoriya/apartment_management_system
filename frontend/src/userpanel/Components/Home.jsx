import { useState } from "react";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleShow = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const users = [
    { id: 1, name: "Nisha ", flat: "X01", wing: "A", mobile: "200000001" },
    { id: 2, name: "Jenil", flat: "X02", wing: "A", mobile: "200000002" },
    { id: 3, name: "vaibhav", flat: "X03", wing: "B", mobile: "200000003" },
    { id: 4, name: "nenis", flat: "X04", wing: "B", mobile: "200000004" },
  ];

  return (
    <div className="container-fluid bg-light">
      {/* Search Bar */}
      <div className="col-md-6 d-flex justify-content-end my-3">
        <div className="input-group w-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn text-white" style={{ backgroundColor: "#00003E" }}>
            Search
          </button>
        </div>
      </div>

      {/* User Cards */}
      <div className="container mt-4">
        <div className="row">
          {users.map((user) => (
            <div className="col-md-3 mb-4" key={user.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">Flat No - {user.flat}</p>
                  <p className="card-text">Wing - {user.wing}</p>
                  <p className="card-text">Mobile No - {user.mobile}</p>
                  <div className="d-flex justify-content-center">
                    <button onClick={() => handleShow(user)} className="btn btn-primary">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bootstrap Modal */}
      {showModal && selectedUser && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedUser.name}</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                <p><strong>Flat No:</strong> {selectedUser.flat}</p>
                <p><strong>Wing:</strong> {selectedUser.wing}</p>
                <p><strong>Mobile No:</strong> {selectedUser.mobile}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleClose}>
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
