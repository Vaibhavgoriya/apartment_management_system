const express = require("express");
const router = express.Router();
const communityHallController = require("../Controllers/communityHallController");

router.get("/", communityHallController.getAllBookings);
router.get("/:bookingId", communityHallController.getBookingById);
router.post("/", communityHallController.createBooking);
router.put("/:bookingId", communityHallController.updateBooking);
router.delete("/:bookingId", communityHallController.deleteBooking);

module.exports = router;
