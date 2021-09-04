import path from "path";
import DevicesDataManager from "../classes/devicesDataManager";
import CranesDataManager from "../classes/cranesDataManager";
import statusCodes from "../lib/statusCodes";

const cranesPath = path.join("..", process.env.CRANES_JSON);
const devicesPath = path.join("..", process.env.DEVICES_JSON);

const devicesData = DevicesDataManager(devicesPath);
const devicesData = CranesDataManager(devicesPath);

export const getNonDeletedDevices = (req, res) => {
  const nonDeleteDevices = devicesData.getDevicesByDeletedKey(false);
  res.status(statusCodes.SUCCESS).send(nonDeleteDevices);
};

export const getdeletedDevices = (req, res) => {
  const deleteDevices = devicesData.getDevicesByDeletedKey(false);
  res.status(statusCodes.SUCCESS).send(deleteDevices);
};

export const setNewDevice = (req, res) => {
  const newDevice = req.query;

  if (devicesData.isDeviceExist(newDevice))
    return res.status(statusCodes.CONFLICT).end();

  if (isDeviceMissingProps(object))
    return res.status(statusCodes.NOT_ACCEPTABLE).end();

  if (devicesData.createNewDevice(newDevice))
    return res.status(statusCodes.CREATED).end();

  res.status(statusCodes.SERVER_ERROR).end();
};

export const getDeviceById = (req, res) => {
  const deviceId = req.params.id;
  res.status(statusCodes.SUCCESS).send(devicesData.getDeviceById(deviceId));
};

export const deleteDeviceById = (req, res) => {
  const deviceId = req.params.id;
  devicesData.deleteDeviceById(deviceId);
  res.status(statusCodes.SUCCESS).end();
};
