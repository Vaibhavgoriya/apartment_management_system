import { useState } from "react";

const AddVisitorPage = () => {
  const [visitorRequests, setVisitorRequests] = useState([
    {
      id: 1,
      visitor: "Radhesh",
      purpose: "Delivery",
      visitDate: "2025-01-15",
      status: "Approved",
    },
    {
      id: 2,
      visitor: "Nishant",
      purpose: "Guest",
      visitDate: "2025-01-16",
      status: "Pending",
    },
  ]);

  const [newVisitor, setNewVisitor] = useState({
    visitor: "",
    purpose: "",
    visitDate: "",
  });

  const [showVisitorList, setShowVisitorList] = useState(false);

  // Add a new visitor request
  const handleAddVisitorRequest = () => {
    if (newVisitor.visitor && newVisitor.purpose && newVisitor.visitDate) {
      const newRequest = {
        id: visitorRequests.length + 1, // Assign a unique ID
        visitor: newVisitor.visitor,
        purpose: newVisitor.purpose,
        visitDate: newVisitor.visitDate,
        status: "Pending", // Default status is Pending
      };

      setVisitorRequests([...visitorRequests, newRequest]);
      setNewVisitor({ visitor: "", purpose: "", visitDate: "" });
      alert("Visitor request submitted successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 px-5 py-5">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="fw-bold text-dark mb-1">Visitor Management</h1>
          <p className="text-muted mb-0">Submit and manage your visitor requests.</p>
        </div>
      </div>

      <div className="row">
        {/* Sidebar Navigation */}
        <div className="col-md-3">
          <div
            className="p-4 rounded-4 shadow"
            style={{
              backgroundColor: "#F5F5F5",
              border: "1px solid #E0E0E0",
            }}
          >
            <div className="d-grid gap-3">
              <button
                className={`btn ${
                  !showVisitorList ? "btn-primary" : "btn-light border"
                } rounded-3 py-2`}
                onClick={() => setShowVisitorList(false)}
                style={{
                  backgroundColor: !showVisitorList ? "#052C65" : "white",
                  color: !showVisitorList ? "white" : "#052C65",
                  fontWeight: "bold",
                }}
              >
                Add Visitor Request
              </button>
              <button
                className={`btn ${
                  showVisitorList ? "btn-primary" : "btn-light border"
                } rounded-3 py-2`}
                onClick={() => setShowVisitorList(true)}
                style={{
                  backgroundColor: showVisitorList ? "#052C65" : "white",
                  color: showVisitorList ? "white" : "#052C65",
                  fontWeight: "bold",
                }}
              >
                Visitor Requests List
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          {showVisitorList ? (
            // Visitor Requests List
            <div
              className="shadow-sm rounded bg-white p-4"
              style={{ border: "1px solid #ddd" }}
            >
              <h2 className="fw-bold mb-4" style={{ color: "#00003E" }}>
                Visitor Requests List
              </h2>
              {visitorRequests.length === 0 ? (
                <p className="text-muted">No visitor requests submitted yet.</p>
              ) : (
                <div className="table-responsive">
                  <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Visitor</th>
                        <th>Purpose</th>
                        <th>Visit Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {visitorRequests.map((req) => (
                        <tr key={req.id}>
                          <td>{req.id}</td>
                          <td>{req.visitor}</td>
                          <td>{req.purpose}</td>
                          <td>{req.visitDate}</td>
                          <td>
                            <span
                              className={`badge ${
                                req.status === "Approved"
                                  ? "bg-success"
                                  : req.status === "Rejected"
                                  ? "bg-danger"
                                  : "bg-warning"
                              }`}
                            >
                              {req.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ) : (
            // Add Visitor Request Form
            <div
              className="shadow-sm rounded bg-white p-4"
              style={{ border: "1px solid #ddd" }}
            >
              <h2 className="fw-bold mb-4" style={{ color: "#00003E" }}>
                Add Visitor Request
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddVisitorRequest();
                }}
              >
                <div className="mb-3">
                  <label>Visitor Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newVisitor.visitor}
                    onChange={(e) =>
                      setNewVisitor({ ...newVisitor, visitor: e.target.value })
                    }
                    placeholder="Enter visitor's name"
                  />
                </div>
                <div className="mb-3">
                  <label>Purpose</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newVisitor.purpose}
                    onChange={(e) =>
                      setNewVisitor({ ...newVisitor, purpose: e.target.value })
                    }
                    placeholder="Enter purpose of visit"
                  />
                </div>
                <div className="mb-3">
                  <label>Visit Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={newVisitor.visitDate}
                    onChange={(e) =>
                      setNewVisitor({
                        ...newVisitor,
                        visitDate: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-dark w-40"
                    style={{
                      backgroundImage:
                      "linear-gradient(to right, #052C65, #0056b3)",
                    }}
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddVisitorPage;
