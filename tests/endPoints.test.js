import supertest from "supertest";
import server from "../server";

describe("GET /health", () => {
  test("expected status code of 200 and no data", async () => {
    const response = await request(app).get("/health");
    expect(response.body).toEqual({});
    expect(response.statusCode).toBe(200);
  });
});
