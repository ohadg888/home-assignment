import { readFile } from "../lib/files";

export default class DevicesDataManager {
  constructor(path) {
    this.path = path;
    this.cranes = readFile(path).cranes;
  }

  isIdExist(craneId) {
    return this.cranes.some((crane) => crane === craneId);
  }
}
