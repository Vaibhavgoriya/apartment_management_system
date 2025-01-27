import { useState } from "react";

function Booking() {
  const [formData, setFormData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    purpose: "",
    hallType: "Hall A", // Default hall type
  });

  const [bookings, setBookings] = useState([
    {
      id: 1,
      date: "2024-12-10",
      startTime: "10:00",
      endTime: "12:00",
      purpose: "Birthday Party",
      hallType: "Hall A",
    },
    {
      id: 2,
      date: "2024-12-11",
      startTime: "14:00",
      endTime: "16:00",
      purpose: "Meeting",
      hallType: "Hall B",
    },
    {
      id: 3,
      date: "2024-12-12",
      startTime: "18:00",
      endTime: "20:00",
      purpose: "Event",
      hallType: "Hall C",
    },
  ]);

  const [showBookingList, setShowBookingList] = useState(false); // Toggle between form and list view

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBooking = {
      id: bookings.length + 1,
      date: formData.date,
      startTime: formData.startTime,
      endTime: formData.endTime,
      purpose: formData.purpose,
      hallType: formData.hallType,
    };
    setBookings([...bookings, newBooking]);
    setFormData({
      date: "",
      startTime: "",
      endTime: "",
      purpose: "",
      hallType: "Hall A",
    });
  };

  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="container py-5">
        {/* Title and Subtitle */}
        <div>
          <h1 className="fw-bold text-dark mb-1" style={{ color: "#00003E" }}>
            Hall Booking 
          </h1>
          <p className="text-muted mb-0">
            Easily manage and book halls for your events
          </p>
        </div>

        <div className="row">
          {/* Sidebar Navigation */}
          <div className="col-md-3 mb-4">
            <div className="card shadow rounded-4 p-3">
              <div className="d-grid gap-2 navigation-buttons">
                <button
                  className={`btn ${
                    !showBookingList ? "btn-primary" : "btn-light border"
                  } rounded-3 py-2`}
                  onClick={() => setShowBookingList(false)}
                  style={{
                    backgroundColor: !showBookingList ? "#052C65" : "white",
                    color: !showBookingList ? "white" : "#052C65",
                  }}
                >
                  Booking Form
                </button>
                <button
                  className={`btn ${
                    showBookingList ? "btn-primary" : "btn-light border"
                  } rounded-3 py-2`}
                  onClick={() => setShowBookingList(true)}
                  style={{
                    backgroundColor: showBookingList ? "#052C65" : "white",
                    color: showBookingList ? "white" : "#052C65",
                  }}
                >
                  Booking List
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            {showBookingList ? (
              // Booking List View
              <div className="card shadow rounded-4 p-4">
                <h2 className="fw-bold mb-4" style={{ color: "#00003E" }}>
                  Past Bookings
                </h2>
                <div className="table-responsive">
                  <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                      <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Hall Type</th>
                        <th>Starting Time</th>
                        <th>Ending Time</th>
                        <th>Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking) => (
                        <tr key={booking.id}>
                          <td>{booking.id}</td>
                          <td>{booking.date}</td>
                          <td>{booking.hallType}</td>
                          <td>{booking.startTime}</td>
                          <td>{booking.endTime}</td>
                          <td>{booking.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              // Booking Form View
              <div className="card shadow rounded-4 p-4">
                <h2 className="fw-bold mb-4" style={{ color: "#00003E" }}>
                  Hall Booking Form
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="hallType" className="form-label">
                      Hall Type
                    </label>
                    <select
                      id="hallType"
                      name="hallType"
                      className="form-control"
                      value={formData.hallType}
                      onChange={handleChange}
                      required
                    >
                      <option value="Hall A">Hall A (Capacity: 50)</option>
                      <option value="Hall B">Hall B (Capacity: 100)</option>
                      <option value="Hall C">Hall C (Capacity: 150)</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="form-control"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="startTime" className="form-label">
                      Start Time
                    </label>
                    <input
                      type="time"
                      id="startTime"
                      name="startTime"
                      className="form-control"
                      value={formData.startTime}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="endTime" className="form-label">
                      End Time
                    </label>
                    <input
                      type="time"
                      id="endTime"
                      name="endTime"
                      className="form-control"
                      value={formData.endTime}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="purpose" className="form-label">
                      Purpose
                    </label>
                    <textarea
                      id="purpose"
                      name="purpose"
                      className="form-control"
                      placeholder="Enter purpose here"
                      rows="4"
                      value={formData.purpose}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-dark w-40"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #007bff, #0056b3)",
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
    </div>
  );
}

export default Booking;
