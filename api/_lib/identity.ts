import { createHash } from "crypto";

const HOUSE_ORDER = [
  "krillindor",
  "shelltherin",
  "cravenclaw",
  "hufflepinch",
] as const;

export type HouseId = (typeof HOUSE_ORDER)[number];

export const MAX_ANCHOR_LENGTH = 256;
export const MAX_DISPLAY_NAME_LENGTH = 64;
export const UID_PATTERN = /^CLW-[0-9a-f]{16}$/;

export function normalizeAnchor(anchor: string): string {
  return anchor.trim().replace(/\s+/g, " ").toLowerCase();
}

export function generateUid(normalizedAnchor: string): string {
  const hash = createHash("sha256").update(normalizedAnchor).digest("hex");
  return `CLW-${hash.slice(0, 16)}`;
}

export function isValidUid(uid: string): boolean {
  return UID_PATTERN.test(uid);
}

export function sortIntoHouse(uid: string): HouseId {
  let hash = 0;
  for (let i = 0; i < uid.length; i++) {
    const char = uid.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  const index =
    ((hash % HOUSE_ORDER.length) + HOUSE_ORDER.length) % HOUSE_ORDER.length;
  return HOUSE_ORDER[index];
}
