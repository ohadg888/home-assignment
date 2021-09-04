import { readFile, writeFile } from "../lib/files";
import statusCodes from "../lib/statusCodes";
import Device from "./device";

export default class DevicesDataManager {
  constructor(path) {
    this.path = path;
    this.readFromFile();
    this.mustHaveProps = ["id", "s_n", "crane_id", "model", "description"];
  }

  readFromFile() {
    const devicesArray = readFile(this.path).devices;
    this.devices = dataArray.map((device) => new Device(device));
  }

  createNewDevice(object) {
    return new Device(object);
  }

  isDeviceExist(object) {
    return this.devices.some(
      (device) => object.s_n === device.s_n || object.id === device.id
    );
  }

  isDeviceMissingProps(object) {
    return this.mustHaveProps.some((prop) => !object.hasOwnProperty(prop));
  }

  getByDeletedKey(deletedVal) {
    return this.devices.filter((device) => device.deleted === deletedVal);
  }

  getDeviceById(deviceId) {
    const deviceById = this.devices.filter((device) => device.id === deviceId);
    if (deviceById.length === 0) res.status(statusCodes.NOT_FOUND).end();
    res.status(statusCodes.SUCCESS).send(deviceById[0]);
  }

  deleteDeviceById(deviceId) {
    this.devices.map((device) => {
      if (device.id === deviceId) {
        device.deleted = false;
      }
    });
    writeFile(this.path, this.devices);
  }
}
