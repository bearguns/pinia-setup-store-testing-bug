import { describe, it, expect, beforeEach, vi } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useCounter } from "./counter";
import { nextTick } from "vue";

describe("Unit | Counter", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Tallies manually", () => {
    const store = useCounter();
    expect(store.tallies).toBe(0);
    store.tally();
    expect(store.tallies).toBe(1);
  });

  it("Tallies automatically", async () => {
    const store = useCounter();
    expect(store.tallies).toBe(0);

    const spy = vi.spyOn(store, "tally");
    store.count = 1;
    await nextTick();
    expect(store.tallies).toBe(1);
    expect(spy).toHaveBeenCalled();
  })
})

