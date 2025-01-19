import { useState } from "react";

function Booking() {
  const [formData, setFormData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    purpose: "",
  });

  const [bookings, setBookings] = useState([
    {
      id: 1,
      date: "2024-12-10",
      startTime: "10:00",
      endTime: "12:00",
      purpose: "Birthday Party",
    },
    {
      id: 2,
      date: "2024-12-11",
      startTime: "14:00",
      endTime: "16:00",
      purpose: "Meeting",
    },
    {
      id: 3,
      date: "2024-12-12",
      startTime: "18:00",
      endTime: "20:00",
      purpose: "Event",
    },
  ]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);

    // Add new booking to the list
    const newBooking = {
      id: bookings.length + 1,
      date: formData.date,
      startTime: formData.startTime,
      endTime: formData.endTime,
      purpose: formData.purpose,
    };
    setBookings([...bookings, newBooking]);

    // Clear form fields
    setFormData({ date: "", startTime: "", endTime: "", purpose: "" });
  };

  return (
    <div className="container-fluid bg-light">
      <div className="container my-5">
        <div className="row">
          {/* Navigation Buttons */}
          <div className="col-md-3">
            <div className="d-grid gap-2 navigation-buttons">
              <a
                href="#"
                className="btn btn-primary rounded-3 py-2 d-flex justify-content-between align-items-center"
                style={{ backgroundColor: "#00003E" }}
              >
                <span>Booking Form</span>
                <span>&gt;</span>
              </a>
              <a
                href="#"
                className="btn btn-light border rounded-3 py-2 d-flex justify-content-between align-items-center"
              >
                <span>Booking List</span>
                <span>&gt;</span>
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <div className="col-md-9">
            <h2 className="mb-4" style={{ color: "#00003E" }}>
              Hall Booking Form
            </h2>
            <form onSubmit={handleSubmit}>
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
              <button
                type="submit"
                className="btn btn-dark"
                style={{ backgroundColor: "#00003E" }}
              >
                Submit
              </button>
            </form>

            {/* Past Bookings */}
            <h2 className="mt-4" style={{ color: "#00003E" }}>
              Past Bookings
            </h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Date</th>
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
                    <td>{booking.startTime}</td>
                    <td>{booking.endTime}</td>
                    <td>{booking.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
