import { useState } from "react";

const VehicleInfo = () => {
  const [vehicleData, setVehicleData] = useState({
    vehicleNumber: "",
    ownerName: "",
    model: "",
    parkingSlot: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!vehicleData.vehicleNumber || !vehicleData.ownerName || !vehicleData.model || !vehicleData.parkingSlot) {
      setMessage("Please fill in all fields.");
      return;
    }

    // Mock API or save data logic
    setMessage(
      `Vehicle added: ${vehicleData.vehicleNumber}, Owner: ${vehicleData.ownerName}, Model: ${vehicleData.model}, Parking Slot: ${vehicleData.parkingSlot}`
    );

    // Clear form after submission
    setVehicleData({
      vehicleNumber: "",
      ownerName: "",
      model: "",
      parkingSlot: "",
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Vehicle Information</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label>
          Vehicle Number:
          <input
            type="text"
            name="vehicleNumber"
            value={vehicleData.vehicleNumber}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </label>
        <label>
          Owner Name:
          <input
            type="text"
            name="ownerName"
            value={vehicleData.ownerName}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </label>
        <label>
          Model:
          <input
            type="text"
            name="model"
            value={vehicleData.model}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </label>
        <label>
          Parking Slot:
          <input
            type="text"
            name="parkingSlot"
            value={vehicleData.parkingSlot}
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
          Add Vehicle
        </button>
      </form>
      {message && <p style={{ marginTop: "20px", color: "green" }}>{message}</p>}
    </div>
  );
};

export default VehicleInfo;
