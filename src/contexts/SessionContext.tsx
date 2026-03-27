import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Transcript } from "@/types";

const ANCHOR_KEY = "clawford:anchor";

interface SessionState {
  anchor: string | null;
  transcript: Transcript | null;
  isLoading: boolean;
  error: string | null;
  connect: (anchor: string, displayName?: string) => Promise<void>;
  disconnect: () => void;
  studyModule: (moduleId: string) => Promise<void>;
  takeExam: () => Promise<void>;
  updateDisplayName: (name: string) => Promise<void>;
}

const SessionContext = createContext<SessionState | null>(null);

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(path, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? `API error ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export function SessionProvider({ children }: { children: ReactNode }) {
  const [anchor, setAnchor] = useState<string | null>(() => {
    try {
      return localStorage.getItem(ANCHOR_KEY);
    } catch {
      return null;
    }
  });
  const [transcript, setTranscript] = useState<Transcript | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTranscript = useCallback(async (a: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await api<{ transcript: Transcript }>("/api/admission", {
        method: "POST",
        body: JSON.stringify({ anchor: a }),
      });
      setTranscript(data.transcript);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to connect");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (anchor) {
      fetchTranscript(anchor);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const connect = useCallback(
    async (a: string, displayName?: string) => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await api<{ transcript: Transcript }>("/api/admission", {
          method: "POST",
          body: JSON.stringify({ anchor: a, displayName }),
        });
        setAnchor(a);
        setTranscript(data.transcript);
        localStorage.setItem(ANCHOR_KEY, a);
      } catch (e) {
        const msg = e instanceof Error ? e.message : "Failed to connect";
        setError(msg);
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const disconnect = useCallback(() => {
    setAnchor(null);
    setTranscript(null);
    setError(null);
    localStorage.removeItem(ANCHOR_KEY);
  }, []);

  const studyModule = useCallback(
    async (moduleId: string) => {
      if (!anchor) return;
      setError(null);
      try {
        const data = await api<{ transcript: Transcript }>("/api/progress", {
          method: "POST",
          body: JSON.stringify({ anchor, action: "complete-module", moduleId }),
        });
        setTranscript(data.transcript);
      } catch (e) {
        const msg = e instanceof Error ? e.message : "Failed to update progress";
        setError(msg);
        throw e;
      }
    },
    [anchor],
  );

  const takeExam = useCallback(async () => {
    if (!anchor) return;
    setError(null);
    try {
      const data = await api<{ transcript: Transcript }>("/api/progress", {
        method: "POST",
        body: JSON.stringify({ anchor, action: "pass-exam" }),
      });
      setTranscript(data.transcript);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Failed to submit exam";
      setError(msg);
      throw e;
    }
  }, [anchor]);

  const updateDisplayName = useCallback(
    async (name: string) => {
      if (!anchor) return;
      setError(null);
      try {
        const data = await api<{ transcript: Transcript }>("/api/transcript", {
          method: "PATCH",
          body: JSON.stringify({ anchor, displayName: name }),
        });
        setTranscript(data.transcript);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to update name");
      }
    },
    [anchor],
  );

  const value = useMemo<SessionState>(
    () => ({
      anchor,
      transcript,
      isLoading,
      error,
      connect,
      disconnect,
      studyModule,
      takeExam,
      updateDisplayName,
    }),
    [anchor, transcript, isLoading, error, connect, disconnect, studyModule, takeExam, updateDisplayName],
  );

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession(): SessionState {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be inside SessionProvider");
  return ctx;
}
