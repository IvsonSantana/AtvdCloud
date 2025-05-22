const request = require("supertest");
const express = require("express");
const userRoutes = require("../routes/userRoutes");
 
const app = express();
app.use(express.json());
app.use("/api", userRoutes);
 
describe("User API", () => {
  it("should create a new user", async () => {
    const res = await request(app).post("/api/users").send({
      name: "Test",
      email: "test@example.com"
    });
    expect(res.statusCode).toEqual(201);
expect(res.body.name).toBe("Test");
  });
 
  it("should get all users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});