const express = require("express");
const router = express.Router();
const vehicleController = require("../Controllers/vehicleController");

router.get("/", vehicleController.getAllVehicles);
router.get("/:vehicleId", vehicleController.getVehicleById);
router.post("/", vehicleController.createVehicle);
router.put("/:vehicleId", vehicleController.updateVehicle);
router.delete("/:vehicleId", vehicleController.deleteVehicle);

module.exports = router;
