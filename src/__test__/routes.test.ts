import app from "../server";
import supertest from "supertest";

describe("Testing Route : Get /", () => {
  it("should return JSON Message with Hello", async () => {
    const res = await supertest(app).get("/");
    expect(res.body.message).toBe("Hello");
  });
});
