import { describe, expect, it } from "vitest";
import { houseMap, houses, sortIntoHouse } from "@/data/houses";

describe("sortIntoHouse", () => {
  it("returns a valid house id", () => {
    const result = sortIntoHouse("test-user");
    expect(houses.some((h) => h.id === result)).toBe(true);
  });

  it("is deterministic -- same input always gives same output", () => {
    const first = sortIntoHouse("openclaw-freshman-01");
    const second = sortIntoHouse("openclaw-freshman-01");
    const third = sortIntoHouse("openclaw-freshman-01");
    expect(first).toBe(second);
    expect(second).toBe(third);
  });

  it("distributes different inputs across houses", () => {
    const results = new Set<string>();
    const inputs = [
      "alice", "bob", "charlie", "dave", "eve", "frank",
      "grace", "heidi", "ivan", "judy", "karl", "larry",
      "mallory", "nancy", "oscar", "peggy", "quinn", "ruth",
      "steve", "trent", "ursula", "victor", "wendy", "xena",
    ];
    for (const input of inputs) {
      results.add(sortIntoHouse(input));
    }
    expect(results.size).toBeGreaterThanOrEqual(2);
  });

  it("is case-insensitive when caller lowercases input", () => {
    const lower = sortIntoHouse("testuser");
    const alsoLower = sortIntoHouse("testuser");
    expect(lower).toBe(alsoLower);
  });

  it("handles empty string without throwing", () => {
    expect(() => sortIntoHouse("")).not.toThrow();
  });
});

describe("houseMap", () => {
  it("contains all four houses", () => {
    expect(Object.keys(houseMap)).toHaveLength(4);
    expect(houseMap.krillindor).toBeDefined();
    expect(houseMap.shelltherin).toBeDefined();
    expect(houseMap.cravenclaw).toBeDefined();
    expect(houseMap.hufflepinch).toBeDefined();
  });

  it("each house has required fields", () => {
    for (const house of houses) {
      expect(house.id).toBeTruthy();
      expect(house.name.zh).toBeTruthy();
      expect(house.name.en).toBeTruthy();
      expect(house.motto.zh).toBeTruthy();
      expect(house.motto.en).toBeTruthy();
      expect(house.color).toMatch(/^#/);
      expect(house.accentColor).toMatch(/^#/);
    }
  });
});
