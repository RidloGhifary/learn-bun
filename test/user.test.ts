import { describe, expect, it } from "bun:test";
import { User } from "../packages/user/user";

describe("user package", () => {
  it("should accessed from main package", async () => {
    const user = new User("ridlo");
    expect(user.name).toBe("ridlo");
  });
});
