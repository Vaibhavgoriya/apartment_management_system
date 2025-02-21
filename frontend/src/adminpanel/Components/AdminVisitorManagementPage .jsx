import { useState } from "react";

const AdminVisitorManagementPage = () => {
  const [pendingApprovals, setPendingApprovals] = useState([
    {
      id: 1,
      visitor: "Radhesh",
      contact: "9876543210",
      resident: "Vaibhav",
      purpose: "Delivery",
      visitDate: "2025-01-15T10:30",
      status: "Pending",
    },
    {
      id: 2,
      visitor: "Nishant",
      contact: "8765432109",
      resident: "Jay",
      purpose: "Guest",
      visitDate: "2025-01-16T14:00",
      status: "Pending",
    },
  ]);

  const [visitorLog, setVisitorLog] = useState([
    {
      id: 3,
      visitor: "Jenil",
      contact: "7896541230",
      resident: "Krupansu",
      purpose: "Maintenance",
      checkIn: "2025-01-15T10:00",
      checkOut: "2025-01-15T13:00",
      status: "Exited",
    },
    {
      id: 4,
      visitor: "Nenish",
      contact: "7893216540",
      resident: "VG",
      purpose: "Guest",
      checkIn: "2025-01-16T11:00",
      checkOut: null,
      status: "Checked-In",
    },
  ]);

  const [newVisitor, setNewVisitor] = useState({
    visitor: "",
    contact: "",
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
        status: "Pending Check-In",
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
              checkIn: new Date().toISOString().slice(0, 16), // Store as DateTime format
              status: "Checked-In",
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
              checkOut: new Date().toISOString().slice(0, 16),
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
      newVisitor.contact &&
      newVisitor.resident &&
      newVisitor.purpose &&
      newVisitor.visitDate
    ) {
      const newLog = {
        id: visitorLog.length + 1,
        visitor: newVisitor.visitor,
        contact: newVisitor.contact,
        resident: newVisitor.resident,
        purpose: newVisitor.purpose,
        checkIn: new Date().toISOString().slice(0, 16),
        checkOut: null,
        status: "Checked-In",
      };

      setVisitorLog([...visitorLog, newLog]);
      setNewVisitor({
        visitor: "",
        contact: "",
        resident: "",
        purpose: "",
        visitDate: "",
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="container-fluid mt-4 py-5 px-5 bg-light">
      <h3 className="fw-bold">Admin - Visitor Management</h3>
      <p className="text-muted">
        Manage visitor requests, check-ins, and check-outs for residents.
      </p>

      {/* Pending Approvals Section */}
      <div className="mt-4">
        <h5 className="fw-bold">Pending Approvals</h5>
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Visitor</th>
                <th>Contact</th>
                <th>Resident</th>
                <th>Purpose</th>
                <th>Visit Date & Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingApprovals.map((req) => (
                <tr key={req.id}>
                  <td>{req.id}</td>
                  <td>{req.visitor}</td>
                  <td>{req.contact}</td>
                  <td>{req.resident}</td>
                  <td>{req.purpose}</td>
                  <td>{req.visitDate.replace("T", " ")}</td>
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
          <table className="table table-bordered table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Visitor</th>
                <th>Contact</th>
                <th>Resident</th>
                <th>Purpose</th>
                <th>Check-In Date & Time</th>
                <th>Check-Out Date & Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visitorLog.map((log) => (
                <tr key={log.id}>
                  <td>{log.id}</td>
                  <td>{log.visitor}</td>
                  <td>{log.contact}</td>
                  <td>{log.resident}</td>
                  <td>{log.purpose}</td>
                  <td>
                    {log.checkIn
                      ? log.checkIn.replace("T", " ")
                      : "Not Checked-In"}
                  </td>
                  <td>
                    {log.checkOut
                      ? log.checkOut.replace("T", " ")
                      : "Not Checked-Out"}
                  </td>
                  <td>
                    <span
                      className={`badge bg-${
                        log.status === "Checked-In"
                          ? "success"
                          : log.status === "Exited"
                          ? "secondary"
                          : "warning"
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

      <div className="mt-4">
        <h5 className="fw-bold">Add Visitor</h5>
        <div className="row g-3">
          <input
            type="text"
            className="form-control"
            placeholder="Visitor Name"
            value={newVisitor.visitor}
            onChange={(e) =>
              setNewVisitor({ ...newVisitor, visitor: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control"
            placeholder="Contact Number"
            value={newVisitor.contact}
            onChange={(e) =>
              setNewVisitor({ ...newVisitor, contact: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control"
            placeholder="Resident Name"
            value={newVisitor.resident}
            onChange={(e) =>
              setNewVisitor({ ...newVisitor, resident: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control"
            placeholder="Purpose"
            value={newVisitor.purpose}
            onChange={(e) =>
              setNewVisitor({ ...newVisitor, purpose: e.target.value })
            }
          />
          <input
            type="datetime-local"
            className="form-control"
            value={newVisitor.visitDate}
            onChange={(e) =>
              setNewVisitor({ ...newVisitor, visitDate: e.target.value })
            }
          />
          <button className="btn btn-primary" onClick={handleAddVisitor}>
            Add Visitor
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminVisitorManagementPage;
