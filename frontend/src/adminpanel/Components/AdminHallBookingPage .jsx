import { useState } from "react";

const AdminHallBookingPage = () => {
  // Sample booking requests data
  const [bookingRequests, setBookingRequests] = useState([
    {
      id: 1,
      user: "John Doe",
      hall: "Hall A",
      date: "2025-01-15",
      status: "Pending",
    },
    {
      id: 2,
      user: "Jane Smith",
      hall: "Hall B",
      date: "2025-01-16",
      status: "Pending",
    },
    {
      id: 3,
      user: "Mike Johnson",
      hall: "Hall C",
      date: "2025-01-17",
      status: "Pending",
    },
    {
      id: 4,
      user: "Mike Tycon",
      hall: "Hall D",
      date: "2025-02-17",
      status: "Rejected",
    },
  ]);

  // Handle approval/rejection of booking requests
  const handleApproval = (id) => {
    setBookingRequests(
      bookingRequests.map((request) =>
        request.id === id ? { ...request, status: "Approved" } : request
      )
    );
  };

  const handleRejection = (id) => {
    setBookingRequests(
      bookingRequests.map((request) =>
        request.id === id ? { ...request, status: "Rejected" } : request
      )
    );
  };

  // Sample halls data for hall management
  const [halls, setHalls] = useState([
    { id: 1, name: "Hall A", capacity: 100, availability: "Available" },
    { id: 2, name: "Hall B", capacity: 50, availability: "Booked" },
    { id: 3, name: "Hall C", capacity: 150, availability: "Available" },
  ]);

  // Add a new hall
  const addNewHall = () => {
    const newHall = {
      id: halls.length + 1,
      name: `Hall ${String.fromCharCode(65 + halls.length)}`,
      capacity: 50,
      availability: "Available",
    };
    setHalls([...halls, newHall]);
  };

  return (
    <div className="container-fluid bg-light mt-4 py-5 px-5">
      {" "}
      {/* Light background for the entire page */}
      {/* Header */}
      <div className="row">
        <div className="col">
          <h2 className="fw-bold">Admin - Community Hall Management</h2>
          <p className="text-muted">
            Manage the Hall Bookings and statuses for all apartments.
          </p>
        </div>
      </div>
      {/* Booking Requests Section */}
      <div className="mt-4 bg-light rounded">
        <h5 className="fw-bold">Booking Requests</h5>
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped">
            <thead className="table-dark">
              <tr>
                <th>Booking ID</th>
                <th>User</th>
                <th>Hall</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookingRequests.map((request) => (
                <tr key={request.id}>
                  <td>{request.id}</td>
                  <td>{request.user}</td>
                  <td>{request.hall}</td>
                  <td>{request.date}</td>
                  <td>
                    <span
                      className={`badge ${
                        request.status === "Approved"
                          ? "bg-success"
                          : request.status === "Rejected"
                          ? "bg-danger"
                          : "bg-warning"
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td>
                    {request.status === "Pending" && (
                      <>
                        <button
                          className="btn btn-success me-2"
                          onClick={() => handleApproval(request.id)}
                        >
                          <i className="bi bi-check-circle"></i> Approve
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleRejection(request.id)}
                        >
                          <i className="bi bi-x-circle"></i> Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Hall Management Section */}
      <div className="mt-4 bg-light p-4 rounded">
        <h5 className="fw-bold">Manage Halls</h5>
        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-primary" onClick={addNewHall}>
            <i className="bi bi-plus-circle"></i> Add New Hall
          </button>
        </div>
        <div className="row">
          {halls.map((hall) => (
            <div className="col-md-4 mb-3" key={hall.id}>
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">{hall.name}</h6>
                  <p className="card-text">Capacity: {hall.capacity}</p>
                  <p className="card-text">Availability: {hall.availability}</p>
                  <button className="btn btn-warning">
                    <i className="bi bi-pencil"></i> Edit Hall
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHallBookingPage;
