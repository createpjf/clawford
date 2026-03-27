import { useCallback, useState } from "react";
import { sortIntoHouse } from "@/data/houses";
import type { HouseId, LearnerProfile, LinkedId } from "@/types";

const STORAGE_KEY = "clawford:learner-profile";

function loadProfile(): LearnerProfile | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as LearnerProfile;
  } catch {
    return null;
  }
}

function saveProfile(profile: LearnerProfile) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

/**
 * @deprecated Use the SessionContext for server-backed identity instead.
 * Kept for backwards compatibility with existing tests.
 */
export function useLearnerProfile() {
  const [profile, setProfile] = useState<LearnerProfile | null>(loadProfile);

  const sortLearner = useCallback((uid: string): HouseId => {
    const trimmed = uid.trim().toLowerCase();
    const house = sortIntoHouse(trimmed);
    const newProfile: LearnerProfile = {
      uid: trimmed,
      house,
      linkedIds: [],
      sortedAt: new Date().toISOString(),
    };
    saveProfile(newProfile);
    setProfile(newProfile);
    return house;
  }, []);

  const addLinkedId = useCallback(
    (provider: LinkedId["provider"], value: string) => {
      if (!profile) return;
      const already = profile.linkedIds.some(
        (l) => l.provider === provider && l.value === value,
      );
      if (already) return;
      const updated: LearnerProfile = {
        ...profile,
        linkedIds: [
          ...profile.linkedIds,
          { provider, value, linkedAt: new Date().toISOString() },
        ],
      };
      saveProfile(updated);
      setProfile(updated);
    },
    [profile],
  );

  const resetProfile = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setProfile(null);
  }, []);

  return { profile, sortLearner, addLinkedId, resetProfile };
}
