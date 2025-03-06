const p1 = require("../DbConnections/postgresdb");
const c1 = p1.connectionObj();
const { v4: uuidv4 } = require("uuid");

// Get all maintenance records
const getAllMaintenance = async (req, res) => {
  try {
    const result = await c1.query("SELECT * FROM Maintenance");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching maintenance records:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a specific maintenance record by ID
const getMaintenanceById = async (req, res) => {
  try {
    const { maintenanceId } = req.params;
    const result = await c1.query(
      "SELECT * FROM Maintenance WHERE maintenanceId = $1",
      [maintenanceId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Maintenance record not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching maintenance record:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new maintenance record
const createMaintenance = async (req, res) => {
  const { memberId, dueDate, amount, status } = req.body;

  try {
    // Fetch the last inserted maintenanceId
    const lastIdResult = await c1.query(
      "SELECT maintenanceId FROM Maintenance ORDER BY maintenanceId DESC LIMIT 1"
    );

    let newId;
    if (lastIdResult.rows.length === 0) {
      newId = "MT1"; // First entry
    } else {
      const lastMaintenanceId = lastIdResult.rows[0].maintenanceid; // "MT3"
      const lastNumber = parseInt(lastMaintenanceId.substring(2)); // Extract number part
      newId = `MT${lastNumber + 1}`; // Increment and format new ID
    }

    const query = `
      INSERT INTO Maintenance (maintenanceId, memberId, dueDate, amount, status)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [newId, memberId, dueDate, amount, status];

    const result = await c1.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating maintenance record:", error);
    res.status(500).json({ error: error.message });
  }
};

// Update a maintenance record
const updateMaintenance = async (req, res) => {
  try {
    const { maintenanceId } = req.params;
    const { memberId, dueDate, amount, status } = req.body;

    const result = await c1.query(
      `UPDATE Maintenance 
       SET memberId = $1, dueDate = $2, amount = $3, status = $4 
       WHERE maintenanceId = $5 RETURNING *`,
      [memberId, dueDate, amount, status, maintenanceId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Maintenance record not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating maintenance record:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a maintenance record
const deleteMaintenance = async (req, res) => {
  try {
    const { maintenanceId } = req.params;

    const result = await c1.query(
      "DELETE FROM Maintenance WHERE maintenanceId = $1 RETURNING *",
      [maintenanceId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Maintenance record not found" });
    }
    res.json({ message: "Maintenance record deleted successfully" });
  } catch (error) {
    console.error("Error deleting maintenance record:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllMaintenance,
  getMaintenanceById,
  createMaintenance,
  updateMaintenance,
  deleteMaintenance,
};
