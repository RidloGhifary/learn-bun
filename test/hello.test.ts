import { describe, expect, it } from "bun:test";
import { sayHello } from "../src/hello";

describe("hello", () => {
  it("should say hello", () => {
    expect(sayHello("World")).toBe("Hello World!");
  });
});
