import dateFormat from "dateformat";

export default class Device {
  constructor(object) {
    this.id = object.id;
    this.crane_id = object.crane_id;
    this.s_n = object.s_n;
    this.model = object.model;
    this.description = object.description;
    this.created =
      object.created ?? dateFormat(new Date(), "dd/mm/yyyy HH:MM:ss");
    this.updated =
      object.updated ?? dateFormat(new Date(), "dd/mm/yyyy HH:MM:ss");
    this.deleted = object.deleted ?? false;
  }
}
