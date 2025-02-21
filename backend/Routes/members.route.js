const express = require("express");
const router = express.Router();
const memberController = require("../Controllers/members.controller");

// Routes for Members
router.get("/", memberController.getAllMembers); // Get all members
router.get("/:memberId", memberController.getMemberById); // Get a specific member by ID
router.post("/", memberController.createMember); // Create a new member
router.put("/:memberId", memberController.updateMember); // Update a member by ID
router.delete("/:memberId", memberController.deleteMember); // Delete a member by ID

module.exports = router;
