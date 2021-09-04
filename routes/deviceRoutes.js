import { router } from "express";
import {
  getNonDeletedDevices,
  getdeletedDevices,
  setNewDevice,
  getDeviceById,
  deleteDeviceById,
} from "../controllers/deviceController";

router.get("/", getNonDeletedDevices);

router.get("/deleted", getdeletedDevices);

router.post("/", setNewDevice);

router.get("/{id}", getDeviceById);

router.delete("/{id}", deleteDeviceById);
