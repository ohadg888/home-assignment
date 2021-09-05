import dotenv from "dotenv";
import DevicesDataManager from "../classes/devicesDataManager";
import CranesDataManager from "../classes/CranesDataManager";
import statusCodes from "../lib/statusCodes";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const cranesPath = process.env.CRANES_JSON;
const devicesPath = process.env.DEVICES_JSON;

const cranesDataManager = new CranesDataManager(cranesPath);
const devicesDataManager = new DevicesDataManager(devicesPath);

const sendDevices = (devicesToSend, res) => {
  res.status(statusCodes.SUCCESS).send(removeDeletedKeys(devicesToSend));
};

const removeDeletedKeys = (devices) => {
  devices.forEach((device) => delete device.deleted);
  return devices;
};

export const getNonDeletedDevices = (req, res) => {
  const nonDeleteDevices = devicesDataManager.getDevicesByDeletedKey(false);
  sendDevices(nonDeleteDevices, res);
};

export const getDeletedDevices = (req, res) => {
  const deleteDevices = devicesDataManager.getDevicesByDeletedKey(true);
  sendDevices(deleteDevices, res);
};

export const setNewDevice = (req, res) => {
  const object = req.query;
  if (devicesDataManager.isDeviceMissingProps(object))
    return res.status(statusCodes.NOT_ACCEPTABLE).end();

  if (devicesDataManager.isDeviceExist(object))
    return res.status(statusCodes.CONFLICT).end();

  if (!cranesDataManager.isIdExist(object.crane_id))
    return res.status(statusCodes.NOT_ACCEPTABLE).end();

  if (devicesDataManager.createNewDevice(object))
    return res.status(statusCodes.CREATED).end();

  res.status(statusCodes.SERVER_ERROR).end();
};

export const getDeviceById = (req, res) => {
  const deviceById = devicesDataManager.getDeviceById(req.params.id);
  console.log(123);
  console.log(deviceById);
  if (!deviceById || deviceById.deleted)
    return res.status(statusCodes.NOT_FOUND).end();
  sendDevices([deviceById], res);
};

export const deleteDeviceById = (req, res) => {
  if (!devicesDataManager.getDeviceById(req.params.id))
    res.status(statusCodes.NOT_FOUND).end();
  devicesDataManager.deleteDeviceById(req.params.id);
  res.status(statusCodes.SUCCESS).end();
};
