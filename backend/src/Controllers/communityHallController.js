const p1 = require("../DbConnections/postgresdb");
const c1 = p1.connectionObj();

// Get all bookings
const getAllBookings = async (req, res) => {
  try {
    const result = await c1.query("SELECT * FROM CommunityHallBooking");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get booking by ID
const getBookingById = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const result = await c1.query(
      "SELECT * FROM CommunityHallBooking WHERE bookingId = $1",
      [bookingId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching booking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new booking
const createBooking = async (req, res) => {
  const { memberId, hall, date, timeSlot, purpose, status } = req.body;

  try {
    // Get the last inserted bookingId
    const lastIdResult = await c1.query(
      "SELECT bookingId FROM CommunityHallBooking ORDER BY bookingId DESC LIMIT 1"
    );

    let newId;
    if (lastIdResult.rows.length === 0) {
      newId = "B1"; // First entry
    } else {
      const lastBookingId = lastIdResult.rows[0].bookingid; // Example: "B3"
      const lastNumber = parseInt(lastBookingId.substring(1));
      newId = `B${lastNumber + 1}`;
    }

    const query = `
      INSERT INTO CommunityHallBooking (bookingId, memberId, hall, date, timeSlot, purpose, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    const values = [newId, memberId, hall, date, timeSlot, purpose, status];

    const result = await c1.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: error.message });
  }
};

// Update a booking
const updateBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { hall, date, timeSlot, purpose, status } = req.body;

    const result = await c1.query(
      "UPDATE CommunityHallBooking SET hall = $1, date = $2, timeSlot = $3, purpose = $4, status = $5 WHERE bookingId = $6 RETURNING *",
      [hall, date, timeSlot, purpose, status, bookingId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating booking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a booking
const deleteBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const result = await c1.query(
      "DELETE FROM CommunityHallBooking WHERE bookingId = $1 RETURNING *",
      [bookingId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
};
