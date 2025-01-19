import { useState } from "react";

const Maintenance = () => {
  const [maintenanceData, setMaintenanceData] = useState({
    srNo: "",
    dueDate: "",
    amount: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMaintenanceData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!maintenanceData.srNo || !maintenanceData.dueDate || !maintenanceData.amount) {
      setMessage("Please fill in all fields.");
      return;
    }

    // Mock API or save data logic
    setMessage(
      `Maintenance record added: Sr No. ${maintenanceData.srNo}, Due Date: ${maintenanceData.dueDate}, Amount: ${maintenanceData.amount}`
    );

    // Clear form after submission
    setMaintenanceData({
      srNo: "",
      dueDate: "",
      amount: "",
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Maintenance Management</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label>
          Sr No.:
          <input
            type="text"
            name="srNo"
            value={maintenanceData.srNo}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </label>
        <label>
          Due Date:
          <input
            type="date"
            name="dueDate"
            value={maintenanceData.dueDate}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={maintenanceData.amount}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
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
          Submit
        </button>
      </form>
      {message && <p style={{ marginTop: "20px", color: "green" }}>{message}</p>}
    </div>
  );
};

export default Maintenance;
