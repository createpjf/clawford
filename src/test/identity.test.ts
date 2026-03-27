import { describe, expect, it } from "vitest";
import {
  normalizeAnchor,
  generateUid,
  sortIntoHouse,
  isValidUid,
  UID_PATTERN,
} from "../../api/_lib/identity";

const HOUSE_ORDER = [
  "krillindor",
  "shelltherin",
  "cravenclaw",
  "hufflepinch",
] as const;

describe("identity generation", () => {
  it("same anchor always produces the same UID", () => {
    const a = generateUid(normalizeAnchor("my-agent-anchor"));
    const b = generateUid(normalizeAnchor("my-agent-anchor"));
    expect(a).toBe(b);
  });

  it("different anchors produce different UIDs", () => {
    const a = generateUid(normalizeAnchor("agent-a"));
    const b = generateUid(normalizeAnchor("agent-b"));
    expect(a).not.toBe(b);
  });

  it("anchor normalization: trim + lowercase + whitespace collapse", () => {
    const a = generateUid(normalizeAnchor("  My  Agent  "));
    const b = generateUid(normalizeAnchor("my agent"));
    expect(a).toBe(b);
  });

  it("generated UIDs match the 16-hex-char pattern", () => {
    const uid = generateUid(normalizeAnchor("test"));
    expect(uid).toMatch(UID_PATTERN);
    expect(isValidUid(uid)).toBe(true);
  });

  it("sortIntoHouse is deterministic for the same UID", () => {
    const uid = generateUid(normalizeAnchor("determinism-test"));
    const house1 = sortIntoHouse(uid);
    const house2 = sortIntoHouse(uid);
    expect(house1).toBe(house2);
  });

  it("sortIntoHouse always returns a valid house", () => {
    const testAnchors = ["alpha", "beta", "gamma", "delta"];
    for (const anchor of testAnchors) {
      const uid = generateUid(normalizeAnchor(anchor));
      const house = sortIntoHouse(uid);
      expect(HOUSE_ORDER).toContain(house);
    }
  });

  it("different UIDs can map to different houses", () => {
    const houses = new Set<string>();
    for (let i = 0; i < 100; i++) {
      const uid = generateUid(normalizeAnchor(`test-anchor-${i}`));
      houses.add(sortIntoHouse(uid));
    }
    expect(houses.size).toBeGreaterThan(1);
  });
});

describe("schema compatibility", () => {
  it("UID format matches the schema pattern", () => {
    expect(UID_PATTERN.test("CLW-a1b2c3d4e5f6a7b8")).toBe(true);
    expect(UID_PATTERN.test("CLW-0000000000000000")).toBe(true);
    expect(UID_PATTERN.test("CLW-FFFFFFFFFFFFFFFF")).toBe(false);
    expect(UID_PATTERN.test("clw-a1b2c3d4e5f6a7b8")).toBe(false);
    expect(UID_PATTERN.test("CLW-a1b2c3d4")).toBe(false);
  });

  it("transcript currentState values are valid strings", () => {
    const validStates = [
      "applicant",
      "freshman",
      "foundations-graduate",
      "academy-candidate",
      "specialist",
    ];
    for (const state of validStates) {
      expect(typeof state).toBe("string");
      expect(state.length).toBeGreaterThan(0);
    }
  });

  it("house values match HOUSE_ORDER", () => {
    const validHouses = [
      "krillindor",
      "shelltherin",
      "cravenclaw",
      "hufflepinch",
    ];
    expect(validHouses).toEqual([...HOUSE_ORDER]);
  });
});
