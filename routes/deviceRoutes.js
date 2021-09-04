import { router } from "express";
import {
  getNonDeletedDevices,
  getdeletedDevices,
  setNewDevice,
  getDeviceById,
  deleteDeviceById,
} from "../controllers/deviceController";

router.get("/devices", getNonDeletedDevices);

router.get("/devices/deleted", getdeletedDevices);

router.post("/devices", setNewDevice);

router.get("/devices/{id}", getDeviceById);

router.delete("/devices/{id}", deleteDeviceById);
