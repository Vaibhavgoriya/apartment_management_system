const express = require("express");
const router = express.Router();
const complaintController = require("../Controllers/complaintsController");

router.get("/", complaintController.getAllComplaints);
router.get("/:complaintId", complaintController.getComplaintById);
router.post("/", complaintController.createComplaint);
router.put("/:complaintId", complaintController.updateComplaint);
router.delete("/:complaintId", complaintController.deleteComplaint);

module.exports = router;
