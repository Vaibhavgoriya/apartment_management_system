const express = require("express");
const router = express.Router();
const maintenanceController = require("../Controllers/maintenanceController");

// Routes for maintenance
router.get("/", maintenanceController.getAllMaintenance);
router.get("/:maintenanceId", maintenanceController.getMaintenanceById);
router.post("/", maintenanceController.createMaintenance);
router.put("/:maintenanceId", maintenanceController.updateMaintenance);
router.delete("/:maintenanceId", maintenanceController.deleteMaintenance);

module.exports = router;
