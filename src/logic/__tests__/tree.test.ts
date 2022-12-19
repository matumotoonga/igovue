import { test, expect } from "vitest";
import TreeModel from "tree-model";

const tree = new TreeModel();
const root = tree.parse({
  id: 1,
  children: [
    {
      id: 11,
      children: [{ id: 111 }],
    },
    {
      id: 12,
      children: [{ id: 121 }, { id: 122 }],
    },
    {
      id: 13,
    },
  ],
});

const node121 = root.first(function (node) {
  return node.model.id === 121;
});

test("flipColor", () => {
  console.log(node121.model);
  expect(1 + 1).toBe(2);
});
