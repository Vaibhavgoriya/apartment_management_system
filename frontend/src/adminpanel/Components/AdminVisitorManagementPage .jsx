import { useState } from "react";

const AdminVisitorManagementPage = () => {
  const [pendingApprovals, setPendingApprovals] = useState([
    {
      id: 1,
      visitor: "Radhesh",
      resident: "Vaibhav",
      purpose: "Delivery",
      visitDate: "2025-01-15",
      status: "Pending",
    },
    {
      id: 2,
      visitor: "Nishant",
      resident: "Jay",
      purpose: "Guest",
      visitDate: "2025-01-16",
      status: "Pending",
    },
  ]);

  const [visitorLog, setVisitorLog] = useState([
    {
      id: 3,
      visitor: "Jenil",
      resident: "Krupansu",
      purpose: "Maintenance",
      checkIn: "10:00 AM",
      checkOut: "1:00 PM",
      status: "Exited",
    },
    {
      id: 4,
      visitor: "Nenish",
      resident: "VG",
      purpose: "Guest",
      checkIn: "11:00 AM",
      checkOut: null,
      status: "Checked-In",
    },
  ]);

  const [newVisitor, setNewVisitor] = useState({
    visitor: "",
    resident: "",
    purpose: "",
    visitDate: "",
  });

  // Approve a visitor request
  const handleApprove = (id) => {
    const updatedPending = pendingApprovals.filter((req) => req.id !== id);
    const approvedVisitor = pendingApprovals.find((req) => req.id === id);
    setPendingApprovals(updatedPending);
    setVisitorLog([
      ...visitorLog,
      {
        ...approvedVisitor,
        checkIn: null,
        checkOut: null,
        status: "Pending Check-In", // Update status to Pending Check-In after approval
      },
    ]);
  };

  // Reject a visitor request
  const handleReject = (id) => {
    setPendingApprovals(pendingApprovals.filter((req) => req.id !== id));
  };

  // Mark visitor as checked in
  const handleCheckIn = (id) => {
    setVisitorLog(
      visitorLog.map((log) =>
        log.id === id
          ? {
              ...log,
              checkIn: new Date().toLocaleTimeString(), // Set current time for check-in
              status: "Checked-In", // Change status to "Checked-In"
            }
          : log
      )
    );
  };

  // Mark visitor as checked out
  const handleCheckOut = (id) => {
    setVisitorLog(
      visitorLog.map((log) =>
        log.id === id
          ? {
              ...log,
              checkOut: new Date().toLocaleTimeString(),
              status: "Exited",
            }
          : log
      )
    );
  };

  // Add a visitor manually
  const handleAddVisitor = () => {
    if (
      newVisitor.visitor &&
      newVisitor.resident &&
      newVisitor.purpose &&
      newVisitor.visitDate
    ) {
      const newLog = {
        id: visitorLog.length + 1, // Assign a unique ID
        visitor: newVisitor.visitor,
        resident: newVisitor.resident,
        purpose: newVisitor.purpose,
        checkIn: new Date().toLocaleTimeString(),
        checkOut: null,
        status: "Checked-In",
      };

      setVisitorLog([...visitorLog, newLog]);
      setNewVisitor({
        visitor: "",
        resident: "",
        purpose: "",
        visitDate: "",
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="container mt-4 bg-light">
      <h3 className="fw-bold">Admin - Visitor Management</h3>

      {/* Pending Approvals Section */}
      <div className="mt-4">
        <h5 className="fw-bold">Pending Approvals</h5>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Visitor</th>
                <th>Resident</th>
                <th>Purpose</th>
                <th>Visit Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingApprovals.map((req) => (
                <tr key={req.id}>
                  <td>{req.id}</td>
                  <td>{req.visitor}</td>
                  <td>{req.resident}</td>
                  <td>{req.purpose}</td>
                  <td>{req.visitDate}</td>
                  <td>
                    <button
                      className="btn btn-success me-2"
                      onClick={() => handleApprove(req.id)}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleReject(req.id)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Visitor Log Section */}
      <div className="mt-4">
        <h5 className="fw-bold">Visitor Log</h5>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Visitor</th>
                <th>Resident</th>
                <th>Purpose</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visitorLog.map((log) => (
                <tr key={log.id}>
                  <td>{log.id}</td>
                  <td>{log.visitor}</td>
                  <td>{log.resident}</td>
                  <td>{log.purpose}</td>
                  <td>{log.checkIn || "Not Checked-In"}</td>
                  <td>{log.checkOut || "Not Checked-Out"}</td>
                  <td>
                    <span
                      className={`badge ${
                        log.status === "Checked-In"
                          ? "bg-success"
                          : log.status === "Exited"
                          ? "bg-secondary"
                          : "bg-warning"
                      }`}
                    >
                      {log.status}
                    </span>
                  </td>
                  <td>
                    {log.status === "Pending Check-In" && (
                      <button
                        className="btn btn-primary"
                        onClick={() => handleCheckIn(log.id)}
                      >
                        Check-In
                      </button>
                    )}
                    {log.status === "Checked-In" && (
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleCheckOut(log.id)}
                      >
                        Check-Out
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Visitor Manually */}
      <div className="mt-4">
        <h5 className="fw-bold">Add Visitor Manually</h5>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddVisitor();
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
            />
          </div>
          <div className="mb-3">
            <label>Resident Name</label>
            <input
              type="text"
              className="form-control"
              value={newVisitor.resident}
              onChange={(e) =>
                setNewVisitor({ ...newVisitor, resident: e.target.value })
              }
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
            />
          </div>
          <div className="mb-3">
            <label>Visit Date</label>
            <input
              type="date"
              className="form-control"
              value={newVisitor.visitDate}
              onChange={(e) =>
                setNewVisitor({ ...newVisitor, visitDate: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Visitor
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminVisitorManagementPage;
