import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useLearnerProfile } from "@/hooks/useLearnerProfile";

const STORAGE_KEY = "clawford:learner-profile";

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

describe("useLearnerProfile", () => {
  it("returns null profile when localStorage is empty", () => {
    const { result } = renderHook(() => useLearnerProfile());
    expect(result.current.profile).toBeNull();
  });

  it("loads existing profile from localStorage", () => {
    const stored = {
      learnerId: "alice",
      house: "krillindor",
      linkedIds: [],
      sortedAt: "2026-01-01T00:00:00.000Z",
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));

    const { result } = renderHook(() => useLearnerProfile());
    expect(result.current.profile).toEqual(stored);
  });

  it("sortLearner creates and persists a profile", () => {
    const { result } = renderHook(() => useLearnerProfile());

    act(() => {
      result.current.sortLearner("TestUser");
    });

    expect(result.current.profile).not.toBeNull();
    expect(result.current.profile!.learnerId).toBe("testuser");
    expect(result.current.profile!.house).toBeTruthy();
    expect(result.current.profile!.linkedIds).toEqual([]);

    const persisted = JSON.parse(localStorage.getItem(STORAGE_KEY)!);
    expect(persisted.learnerId).toBe("testuser");
  });

  it("addLinkedId appends a linked account", () => {
    const { result } = renderHook(() => useLearnerProfile());

    act(() => {
      result.current.sortLearner("bob");
    });

    act(() => {
      result.current.addLinkedId("github", "bob-gh");
    });

    expect(result.current.profile!.linkedIds).toHaveLength(1);
    expect(result.current.profile!.linkedIds[0].provider).toBe("github");
    expect(result.current.profile!.linkedIds[0].value).toBe("bob-gh");
  });

  it("addLinkedId does not duplicate existing entries", () => {
    const { result } = renderHook(() => useLearnerProfile());

    act(() => {
      result.current.sortLearner("carol");
    });

    act(() => {
      result.current.addLinkedId("github", "carol-gh");
    });

    act(() => {
      result.current.addLinkedId("github", "carol-gh");
    });

    expect(result.current.profile!.linkedIds).toHaveLength(1);
  });

  it("addLinkedId is a no-op when profile is null", () => {
    const { result } = renderHook(() => useLearnerProfile());
    act(() => {
      result.current.addLinkedId("github", "nobody");
    });
    expect(result.current.profile).toBeNull();
  });

  it("resetProfile clears profile and localStorage", () => {
    const { result } = renderHook(() => useLearnerProfile());

    act(() => {
      result.current.sortLearner("dave");
    });

    expect(result.current.profile).not.toBeNull();

    act(() => {
      result.current.resetProfile();
    });

    expect(result.current.profile).toBeNull();
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  });

  it("handles corrupted localStorage gracefully", () => {
    localStorage.setItem(STORAGE_KEY, "not-valid-json{{{");

    const { result } = renderHook(() => useLearnerProfile());
    expect(result.current.profile).toBeNull();
  });
});
