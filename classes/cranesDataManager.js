import { readFile } from "../lib/files";

export default class CranesDataManager {
  constructor(path) {
    this.path = path;
    this.readFromFile();
  }

  readFromFile() {
    const cranesRawData = readFile(this.path);
    this.cranes = JSON.parse(cranesRawData).cranes;
  }

  isIdExist(craneId) {
    return this.cranes.some((crane) => crane === craneId);
  }
}
