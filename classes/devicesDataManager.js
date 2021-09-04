import { readFile, writeFile } from "../lib/files";
import Device from "./device";

export default class DevicesDataManager {
  constructor(path) {
    this.path = path;
    this.readFromFile();
    this.mustHaveProps = ["id", "s_n", "crane_id", "model", "description"];
  }

  readFromFile() {
    const devicesRawData = readFile(this.path);
    const devicesJson = JSON.parse(devicesRawData).devices;
    this.devices = devicesJson.map((device) => new Device(device));
  }

  writeToFile() {
    writeFile(this.path, JSON.stringify({ devices: this.devices }));
  }

  createNewDevice(object) {
    try {
      this.devices.push(new Device(object));
      this.writeToFile();
      return true;
    } catch (error) {
      console.info(error);
      return false;
    }
  }

  isDeviceExist(object) {
    return this.devices.some(
      (device) => object.s_n === device.s_n || object.id === device.id
    );
  }

  isDeviceMissingProps(object) {
    return this.mustHaveProps.some((prop) => !object.hasOwnProperty(prop));
  }

  getDevicesByDeletedKey(deletedVal) {
    return this.devices.filter((device) => device.deleted === deletedVal);
  }

  getDeviceById(deviceId) {
    const deviceById = this.devices.filter(
      (device) => device.id === deviceId && !device.deleted
    );
    return deviceById.length ? deviceById : null;
  }

  deleteDeviceById(deviceId) {
    this.devices.map((device) => {
      if (device.id === deviceId) device.deleted = true;
    });
    try {
      this.writeToFile();
    } catch (error) {
      console.info(error);
    }
  }
}
