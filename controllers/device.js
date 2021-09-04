export default class Device {
  constructor(object) {
    this.id = object.id;
    this.crane_id = object.crane_id;
    this.s_n = object.s_n;
    this.model = object.model;
    this.description = object.description;
    this.created = object.created;
    this.updated = object.updated;
    this.deleted = object.deleted;
  }
}
