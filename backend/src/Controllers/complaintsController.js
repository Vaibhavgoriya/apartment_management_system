const p1 = require("../DbConnections/postgresdb");
const c1 = p1.connectionObj();

const getAllComplaints = async (req, res) => {
  try {
    const result = await c1.query("SELECT * FROM Complaints");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching complaints:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getComplaintById = async (req, res) => {
  try {
    const { complaintId } = req.params;
    const result = await c1.query(
      "SELECT * FROM Complaints WHERE complaintId = $1",
      [complaintId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Complaint not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching complaint:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createComplaint = async (req, res) => {
  const { memberId, description, status, imageUrl, createdDate, resolvedDate } =
    req.body;

  try {
    // Fetch the last inserted complaintId
    const lastIdResult = await c1.query(
      "SELECT complaintId FROM Complaints ORDER BY complaintId DESC LIMIT 1"
    );

    let newId;
    if (lastIdResult.rows.length === 0) {
      newId = "C1"; // First entry
    } else {
      const lastComplaintId = lastIdResult.rows[0].complaintid; // Example: "C3"
      const lastNumber = parseInt(lastComplaintId.substring(1)); // Extract number part
      newId = `C${lastNumber + 1}`; // Increment and format new ID
    }

    const query = `
      INSERT INTO Complaints (complaintId, memberId, description, status, imageUrl, createdDate, resolvedDate)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    const values = [
      newId,
      memberId,
      description,
      status,
      imageUrl,
      createdDate,
      resolvedDate,
    ];

    const result = await c1.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating complaint:", error);
    res.status(500).json({ error: error.message });
  }
};

const updateComplaint = async (req, res) => {
  try {
    const { complaintId } = req.params;
    const { description, status, imageUrl, resolvedDate } = req.body;

    const result = await c1.query(
      "UPDATE Complaints SET description = $1, status = $2, imageUrl = $3, resolvedDate = $4 WHERE complaintId = $5 RETURNING *",
      [description, status, imageUrl, resolvedDate, complaintId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Complaint not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating complaint:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteComplaint = async (req, res) => {
  try {
    const { complaintId } = req.params;
    const result = await c1.query(
      "DELETE FROM Complaints WHERE complaintId = $1 RETURNING *",
      [complaintId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Complaint not found" });
    }

    res.json({ message: "Complaint deleted successfully" });
  } catch (error) {
    console.error("Error deleting complaint:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllComplaints,
  getComplaintById,
  createComplaint,
  updateComplaint,
  deleteComplaint,
};
