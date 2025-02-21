const p1 = require("../DbConnections/postgresdb");
const c1 = p1.connectionObj();
const { v4: uuidv4 } = require("uuid");

// Get all members
const getAllMembers = async (req, res) => {
  try {
    const result = await c1.query("SELECT * FROM Members");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching members:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a specific member by ID
const getMemberById = async (req, res) => {
  try {
    const { memberId } = req.params;
    const result = await c1.query("SELECT * FROM Members WHERE memberId = $1", [
      memberId,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Member not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching member:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new member
const createMember = async (req, res) => {
  const {
    name,
    apartmentNumber,
    contact,
    email,
    wing,
    family_members,
    joiningDate,
    status,
  } = req.body;

  try {
    // Get the latest memberId
    const result = await c1.query(
      "SELECT memberId FROM Members ORDER BY memberId DESC LIMIT 1"
    );

    let newMemberId;
    if (result.rows.length === 0) {
      // If no members exist, start with M1
      newMemberId = "M1";
    } else {
      // Extract the number part and increment it
      const lastId = result.rows[0].memberid; // memberId from DB
      const lastNumber = parseInt(lastId.substring(1)); // Remove 'M' and convert to number
      newMemberId = `M${lastNumber + 1}`; // Increment and format
    }

    const query = `
            INSERT INTO Members (memberId, name, apartmentNumber, contact, email, wing, family_members, joiningDate, status)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;
    const values = [
      newMemberId,
      name,
      apartmentNumber,
      contact,
      email,
      wing,
      family_members,
      joiningDate,
      status,
    ];

    const insertResult = await c1.query(query, values);
    res.status(201).json(insertResult.rows[0]);
  } catch (error) {
    console.error("Error creating member:", error);
    res.status(500).json({ error: error.message });
  }
};

// Update a member
const updateMember = async (req, res) => {
  try {
    const { memberId } = req.params;
    const {
      name,
      apartmentNumber,
      contact,
      email,
      wing,
      family_members,
      joiningDate,
      status,
    } = req.body;
    const result = await c1.query(
      "UPDATE Members SET name = $1, apartmentNumber = $2, contact = $3, email = $4, wing = $5, family_members = $6, joiningDate = $7, status = $8 WHERE memberId = $9 RETURNING *",
      [
        name,
        apartmentNumber,
        contact,
        email,
        wing,
        family_members,
        joiningDate,
        status,
        memberId,
      ]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Member not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating member:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a member
const deleteMember = async (req, res) => {
  try {
    const { memberId } = req.params;
    const result = await c1.query(
      "DELETE FROM Members WHERE memberId = $1 RETURNING *",
      [memberId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Member not found" });
    }
    res.json({ message: "Member deleted successfully" });
  } catch (error) {
    console.error("Error deleting member:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember,
};
