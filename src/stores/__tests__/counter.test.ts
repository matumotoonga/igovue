import { setActivePinia, createPinia } from "pinia";
import { useCounterStore } from "@/stores/counter";
import { describe, beforeEach, it, expect } from "vitest";

describe("Counter Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("increments", () => {
    const counter = useCounterStore();
    expect(counter.count).toBe(0);
    counter.increment();
    expect(counter.count).toBe(1);
  });
  it("doubleCount", () => {
    const counter = useCounterStore();
    counter.increment();
    expect(counter.doubleCount).toBe(2);
  });
});
