import { useState } from "react";

const AdminComplaints = () => {
  // Sample data for complaints
  const complaintsData = [
    {
      complaintId: "COM-001",
      apartmentNumber: "101",
      residentName: "Radhesh",
      description: "Water leakage in the kitchen",
      status: "Pending",
      createdDate: "2025-01-01",
      resolvedDate: "2025-01-05",
    },
    {
      complaintId: "COM-002",
      apartmentNumber: "102",
      residentName: "Vaibhav",
      description: "Broken elevator",
      status: "Resolved",
      createdDate: "2025-01-02",
      resolvedDate: "2025-01-06",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  // Search state for a single query
  const [searchQuery, setSearchQuery] = useState("");

  // Handle opening the modal
  const handleShow = (complaint) => {
    setSelectedComplaint(complaint);
    setShowModal(true);
  };

  // Handle closing the modal
  const handleClose = () => {
    setShowModal(false);
    setSelectedComplaint(null);
  };

  // Resolve the complaint
  const resolveComplaint = (complaintId) => {
    alert(`Complaint ${complaintId} resolved!`);
  };

  // Filter complaints based on the search query
  const filteredComplaints = complaintsData.filter((complaint) => {
    const query = searchQuery.toLowerCase();
    return (
      complaint.status.toLowerCase().includes(query) ||
      complaint.apartmentNumber.toString().includes(query) ||
      complaint.residentName.toLowerCase().includes(query)
    );
  });

  return (
    <div className="container-fluid mt-4 py-5 px-5 bg-light p-4">
      <div className="row mb-4">
        <div className="col-md-6">
          <h2 className="fw-bold">Complaints Management</h2>
          <p className="text-muted">
            Manage the Complaint and statuses for all apartments.
          </p>
        </div>

        <div className="col-md-6 text-right">
          {/* Search Section */}
          <input
            id="searchInput"
            type="text"
            className="form-control"
            placeholder="Search by Status, Apartment Number, or Resident Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Complaints Table */}
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Complaint ID</th>
            <th>Apartment Number</th>
            <th>Resident Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Created Date</th>
            <th>Resolved Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredComplaints.map((complaint) => (
            <tr key={complaint.complaintId}>
              <td>{complaint.complaintId}</td>
              <td>{complaint.apartmentNumber}</td>
              <td>{complaint.residentName}</td>
              <td>{complaint.description}</td>
              <td>{complaint.status}</td>
              <td>{complaint.createdDate}</td>
              <td>{complaint.resolvedDate}</td>
              <td>
                {/* Action Buttons */}
                <div className="row">
                  <div className="col">
                    <button
                      className="btn btn-primary w-100 mb-2"
                      onClick={() => handleShow(complaint)}
                    >
                      View Details
                    </button>
                  </div>
                  <div className="col">
                    <button
                      className="btn btn-success w-100 mb-2"
                      onClick={() => resolveComplaint(complaint.complaintId)}
                    >
                      Resolve
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Complaint Details Modal */}
      {selectedComplaint && (
        <div
          className={`modal fade ${showModal ? "show" : ""}`}
          style={{ display: showModal ? "block" : "none" }}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="complaintModalLabel"
          aria-hidden={!showModal}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="complaintModalLabel">
                  Complaint Details - {selectedComplaint.complaintId}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Complaint ID:</strong> {selectedComplaint.complaintId}
                </p>
                <p>
                  <strong>Description:</strong> {selectedComplaint.description}
                </p>
                <p>
                  <strong>Status:</strong> {selectedComplaint.status}
                </p>
                <p>
                  <strong>Created Date:</strong> {selectedComplaint.createdDate}
                </p>
                <p>
                  <strong>Resolved Date:</strong>{" "}
                  {selectedComplaint.resolvedDate}
                </p>
                <p>
                  <strong>Attachments:</strong> <a href="#">View Attachments</a>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
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
};

export default AdminComplaints;
