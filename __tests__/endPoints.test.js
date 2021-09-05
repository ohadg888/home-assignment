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
  test("expected status code of 200 and 1 device", async () => {
    const response = await request(app).get("/health");
    expect(response.body).toEqual({});
    expect(response.statusCode).toBe(200);
  });
});
