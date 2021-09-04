import { readFile } from "../lib/files";

export default class CranesDataManager {
  constructor(path) {
    this.path = path;
    this.readFromFile();
  }

  readFromFile() {
    const cranesJson = readFile(this.path);
    this.cranes = cranesJson.cranes;
  }

  isIdExist(craneId) {
    return this.cranes.some((crane) => crane === craneId);
  }
}
