import { readFile, writeFile } from "../lib/files";
import StatusCodes from "../lib/statusCodes";
import Device from "./device";

export default class DevicesDataManager {
  constructor(path) {
    this.path = path;
    this.cranes = readFile(path).cranes;
  }

  isIdExist(craneId) {
    return this.cranes.some((crane) => crane === craneId);
  }
}
