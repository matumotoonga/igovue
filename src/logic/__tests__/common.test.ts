import { test, expect } from "vitest";
import { flipColor } from "../common";

test("flipColor", () => {
  expect(flipColor(1)).toBe(2);
  expect(flipColor(2)).toBe(1);
});
