import { readFile, writeFile } from "../lib/files";
import StatusCodes from "../lib/statusCodes";
import Device from "./device";

export default class DevicesDataManager {
  constructor(path) {
    this.path = path;
    this.devices = readFile(path).devices;
    this.mustHaveProps = ["id", "s_n", "crane_id", "model", "description"];
  }

  createNewDevice(object) {
    if (this.isDeviceExist(object)) res.statusCode(StatusCodes.ID_EXISTS).end();
    if (isDeviceMissingProps(object))
      res.statusCode(StatusCodes.NOT_ACCEPTABLE).end();
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
    return this.devices.filter((device) => device.id === deviceId);
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
