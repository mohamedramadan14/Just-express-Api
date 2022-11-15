import * as user from "../user";

describe("Testing user handler =>> =>> ongoing", () => {
  it("should create a new user", async () => {
    const req = {
      body: {
        username: "GOGO",
        password: "gogo3521262",
      },
    };
    const res = {
      json({ token }) {
        expect(token).toBeTruthy();
      },
    };
    await user.createUser(req, res, () => {});
  });
});
