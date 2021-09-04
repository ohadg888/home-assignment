import { readFile, writeFile } from "../lib/files";

export default class DevicesDataManager {
  constructor(path) {
    this.path = path;
    this.devices = readFile(path).devices;
  }

  createNewDevice(object) {}

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
