import { describe, expect, it } from "bun:test";
import * as os from "node:os";

describe("NodeJs api", () => {
  it("should support os.arch()", () => {
    const arch = os.arch();
    expect(arch).toBe("x64");

    const type = os.type();
    expect(type).toBe("Darwin");
  });
});
