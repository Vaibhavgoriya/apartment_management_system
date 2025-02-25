const p1 = require("../DbConnections/postgresdb");
const c1 = p1.connectionObj();

const getAllVisitors = async (req, res) => {
  try {
    const result = await c1.query("SELECT * FROM VisitorInfo");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching visitors:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getVisitorById = async (req, res) => {
  try {
    const { visitorId } = req.params;
    const result = await c1.query(
      "SELECT * FROM VisitorInfo WHERE visitorId = $1",
      [visitorId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Visitor not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching visitor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createVisitor = async (req, res) => {
  const { visitorName, memberId, purpose, contact, inDateTime, outDateTime } =
    req.body;

  try {
    // Fetch the last inserted visitorId
    const lastIdResult = await c1.query(
      "SELECT visitorId FROM VisitorInfo ORDER BY visitorId DESC LIMIT 1"
    );

    let newId;
    if (lastIdResult.rows.length === 0) {
      newId = "VI1"; // First entry
    } else {
      const lastVisitorId = lastIdResult.rows[0].visitorid; // Example: "VI3"
      const lastNumber = parseInt(lastVisitorId.substring(2)); // Extract number part
      newId = `VI${lastNumber + 1}`; // Increment and format new ID
    }

    const query = `
      INSERT INTO VisitorInfo (visitorId, visitorName, memberId, purpose, contact, inDateTime, outDateTime)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    const values = [
      newId,
      visitorName,
      memberId,
      purpose,
      contact,
      inDateTime,
      outDateTime,
    ];

    const result = await c1.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating visitor:", error);
    res.status(500).json({ error: error.message });
  }
};

const updateVisitor = async (req, res) => {
  try {
    const { visitorId } = req.params;
    const { visitorName, memberId, purpose, contact, inDateTime, outDateTime } =
      req.body;

    const result = await c1.query(
      "UPDATE VisitorInfo SET visitorName = $1, memberId = $2, purpose = $3, contact = $4, inDateTime = $5, outDateTime = $6 WHERE visitorId = $7 RETURNING *",
      [
        visitorName,
        memberId,
        purpose,
        contact,
        inDateTime,
        outDateTime,
        visitorId,
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Visitor not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating visitor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteVisitor = async (req, res) => {
  try {
    const { visitorId } = req.params;
    const result = await c1.query(
      "DELETE FROM VisitorInfo WHERE visitorId = $1 RETURNING *",
      [visitorId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Visitor not found" });
    }

    res.json({ message: "Visitor deleted successfully" });
  } catch (error) {
    console.error("Error deleting visitor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllVisitors,
  getVisitorById,
  createVisitor,
  updateVisitor,
  deleteVisitor,
};
