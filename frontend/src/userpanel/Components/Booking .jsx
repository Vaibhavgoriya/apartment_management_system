import { useState } from "react";

const Booking = () => {
  const halls = {
    "Hall A": 50,
    "Hall B": 100,
    "Hall C": 150,
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    hall: "Hall A", // Default to Hall A
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      setMessage("Please fill in all the fields.");
      return;
    }

    // Mock API call or handle booking logic here
    setMessage(
      `Booking confirmed for ${formData.hall} (Capacity: ${halls[formData.hall]}) on ${formData.date} at ${formData.time}`
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Book a Hall</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </label>
        <label>
          Hall:
          <select
            name="hall"
            value={formData.hall}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          >
            {Object.keys(halls).map((hall) => (
              <option key={hall} value={hall}>
                {hall} (Capacity: {halls[hall]})
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Book Now
        </button>
      </form>
      {message && <p style={{ marginTop: "20px", color: "green" }}>{message}</p>}
    </div>
  );
};

export default Booking;
