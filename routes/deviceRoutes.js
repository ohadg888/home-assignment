import express from "express";
import {
  getNonDeletedDevices,
  getdeletedDevices,
  setNewDevice,
  getDeviceById,
  deleteDeviceById,
} from "../controllers/deviceController";

const router = express.Router();

const deviceRoutes = () => {
  router.get("/", getNonDeletedDevices);

  router.get("/deleted", getdeletedDevices);

  router.post("/", setNewDevice);

  router.get("/{id}", getDeviceById);

  router.delete("/{id}", deleteDeviceById);
};

export default deviceRoutes;
