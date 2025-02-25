const express = require("express");
const router = express.Router();
const visitorController = require("../Controllers/visitorController");

router.get("/", visitorController.getAllVisitors);
router.get("/:visitorId", visitorController.getVisitorById);
router.post("/", visitorController.createVisitor);
router.put("/:visitorId", visitorController.updateVisitor);
router.delete("/:visitorId", visitorController.deleteVisitor);

module.exports = router;
