import express from "express";
import {
  getNonDeletedDevices,
  getDeletedDevices,
  setNewDevice,
  getDeviceById,
  deleteDeviceById,
} from "../controllers/deviceController";

const router = express.Router();

router.get("/", getNonDeletedDevices);

router.get("/deleted", getDeletedDevices);

router.post("/", setNewDevice);

router.get("/:id", getDeviceById);

router.delete("/:id", deleteDeviceById);

export default router;
