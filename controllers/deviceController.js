import path from "path";
import DevicesDataManager from "./devicesDataManager";
import StatusCodes from "../lib/statusCodes";

const cranesPath = path.join("..", process.env.CRANES_JSON);
const devicesPath = path.join("..", process.env.DEVICES_JSON);

const devicesData = DevicesDataManager(devicesPath);

export const getNonDeletedDevices = (req, res) => {
  const nonDeleteDevices = devicesData.getDevicesByDeletedKey(false);
  res.statusCode(StatusCodes.SUCCESS).send(nonDeleteDevices);
};

export const getdeletedDevices = (req, res) => {
  const deleteDevices = devicesData.getDevicesByDeletedKey(false);
  res.statusCode(StatusCodes.SUCCESS).send(deleteDevices);
};

export const setNewDevice = (req, res) => {
  const newDevice = req.query;
  devicesData.createNewDevice(newDevice);
  res.statusCode(StatusCodes.CREATED).end();
};

export const getDeviceById = (req, res) => {
  const deviceId = req.params.id;
  const deviceToSend = devicesData.getDeviceById(deviceId);
  res.statusCode(StatusCodes.SUCCESS).send(deviceToSend);
};

export const deleteDeviceById = (req, res) => {
  const deviceId = req.params.id;
  devicesData.deleteDeviceById(deviceId);
  res.statusCode(StatusCodes.SUCCESS).end();
};
