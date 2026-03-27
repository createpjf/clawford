import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Transcript } from "@/types";

const USERNAME_KEY = "clawford:username";

interface SessionState {
  username: string | null;
  transcript: Transcript | null;
  isLoading: boolean;
  error: string | null;
  connect: (username: string, password: string, displayName?: string) => Promise<void>;
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
  const [username, setUsername] = useState<string | null>(() => {
    try {
      return localStorage.getItem(USERNAME_KEY);
    } catch {
      return null;
    }
  });
  const [password, setPassword] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<Transcript | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connect = useCallback(
    async (u: string, pw: string, displayName?: string) => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await api<{ transcript: Transcript }>("/api/admission", {
          method: "POST",
          body: JSON.stringify({ username: u, password: pw, displayName }),
        });
        setUsername(u);
        setPassword(pw);
        setTranscript(data.transcript);
        localStorage.setItem(USERNAME_KEY, u);
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
    setUsername(null);
    setPassword(null);
    setTranscript(null);
    setError(null);
    localStorage.removeItem(USERNAME_KEY);
  }, []);

  const studyModule = useCallback(
    async (moduleId: string) => {
      if (!username || !password) return;
      setError(null);
      try {
        const data = await api<{ transcript: Transcript }>("/api/progress", {
          method: "POST",
          body: JSON.stringify({ username, password, action: "complete-module", moduleId }),
        });
        setTranscript(data.transcript);
      } catch (e) {
        const msg = e instanceof Error ? e.message : "Failed to update progress";
        setError(msg);
        throw e;
      }
    },
    [username, password],
  );

  const takeExam = useCallback(async () => {
    if (!username || !password) return;
    setError(null);
    try {
      const data = await api<{ transcript: Transcript }>("/api/progress", {
        method: "POST",
        body: JSON.stringify({ username, password, action: "pass-exam" }),
      });
      setTranscript(data.transcript);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Failed to submit exam";
      setError(msg);
      throw e;
    }
  }, [username, password]);

  const updateDisplayName = useCallback(
    async (name: string) => {
      if (!username || !password) return;
      setError(null);
      try {
        const data = await api<{ transcript: Transcript }>("/api/transcript", {
          method: "PATCH",
          body: JSON.stringify({ username, password, displayName: name }),
        });
        setTranscript(data.transcript);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to update name");
      }
    },
    [username, password],
  );

  const value = useMemo<SessionState>(
    () => ({
      username,
      transcript,
      isLoading,
      error,
      connect,
      disconnect,
      studyModule,
      takeExam,
      updateDisplayName,
    }),
    [username, transcript, isLoading, error, connect, disconnect, studyModule, takeExam, updateDisplayName],
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
