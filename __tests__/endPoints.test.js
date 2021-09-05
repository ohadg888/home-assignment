const request = require("supertest");

let app = null;

beforeEach(() => {
  const fs = require("fs");

  fs.copyFileSync(
    "__tests__/db/cranes_original.json",
    "__tests__/db/cranes.json"
  );
  fs.copyFileSync(
    "__tests__/db/devices_original.json",
    "__tests__/db/devices.json"
  );

  app = require("../app").default;
});

describe("GET /health", () => {
  test("expected status code of 200 and no data", async () => {
    const response = await request(app).get("/health");
    expect(response.body).toEqual({});
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /devices", () => {
  test("should return a list of non-deleted devices", async () => {
    const response = await request(app).get("/devices");
    expect(response.body.length).toEqual(1);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).not.toHaveProperty("deleted");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /devices/deleted", () => {
  test("should return a list of deleted devices", async () => {
    const response = await request(app).get("/devices/deleted");
    expect(response.body.length).toEqual(1);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).not.toHaveProperty("deleted");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /devices/{id}", () => {
  test("should return device02", async () => {
    const response = await request(app).get("/devices/device02");
    expect(response.body.length).toEqual(1);
    expect(response.body[0].id).toBe("device02");
    expect(response.body[0]).not.toHaveProperty("deleted");
    expect(response.statusCode).toBe(200);
  });
  test("should not return device, device is deleted", async () => {
    const response = await request(app).get("/devices/device03");
    expect(response.body).toEqual({});
    expect(response.statusCode).toBe(404);
  });
  test("should not return device, id does not exist", async () => {
    const response = await request(app).get("/devices/device032");
    expect(response.body).toEqual({});
    expect(response.statusCode).toBe(404);
  });
});
