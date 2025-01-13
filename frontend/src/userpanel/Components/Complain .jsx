import { useState } from "react";

const Complain = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    date: "",
  });

  const [complaints, setComplaints] = useState([]);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.description || !formData.date) {
      setMessage("Please fill in all fields.");
      return;
    }

    // Add complaint to the list
    setComplaints((prev) => [...prev, { ...formData, id: Date.now() }]);

    // Reset form
    setFormData({
      name: "",
      email: "",
      description: "",
      date: "",
    });
    setMessage("Complaint submitted successfully!");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Submit a Complaint</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Describe your complaint"
            style={{ width: "100%", padding: "8px", height: "100px", marginBottom: "10px" }}
            required
          ></textarea>
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit Complaint
        </button>
      </form>
      {message && <p style={{ marginTop: "10px", color: "green" }}>{message}</p>}

      <h2 style={{ marginTop: "20px" }}>Submitted Complaints</h2>
      {complaints.length === 0 ? (
        <p>No complaints submitted yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {complaints.map((complaint) => (
            <li
              key={complaint.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "5px",
                padding: "10px",
                marginBottom: "10px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <strong>Name:</strong> {complaint.name} <br />
              <strong>Email:</strong> {complaint.email} <br />
              <strong>Date:</strong> {complaint.date} <br />
              <strong>Description:</strong> {complaint.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Complain;
