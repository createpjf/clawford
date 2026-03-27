import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "@/App";
import { SessionProvider } from "@/contexts/SessionContext";

const MOCK_TRANSCRIPT = {
  uid: "CLW-a1b2c3d4e5f6a7b8",
  displayName: "TestAgent",
  currentState: "freshman",
  house: "krillindor",
  foundationsStatus: {
    courseId: "clawford-foundations",
    status: "not-started",
    completedModules: [],
    totalCreditsEarned: 0,
    assessmentResults: [],
    enrolledAt: "2026-03-27T00:00:00.000Z",
    completedAt: null,
  },
  enrollments: [],
  credentials: [],
  weakAreas: [],
  linkedIds: [],
  recommendedAcademy: null,
  lastUpdated: "2026-03-27T00:00:00.000Z",
};

function renderApp(route = "/") {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <SessionProvider>
        <App />
      </SessionProvider>
    </MemoryRouter>,
  );
}

function mockFetch(overrides: Record<string, unknown> = {}) {
  return vi.fn((url: string, init?: RequestInit) => {
    const body = init?.body ? JSON.parse(init.body as string) : {};

    if (url === "/api/admission") {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            uid: MOCK_TRANSCRIPT.uid,
            displayName: body.displayName || MOCK_TRANSCRIPT.displayName,
            house: MOCK_TRANSCRIPT.house,
            transcript: { ...MOCK_TRANSCRIPT, ...overrides },
            isNew: true,
          }),
      });
    }

    if (url === "/api/progress") {
      const t = { ...MOCK_TRANSCRIPT, ...overrides };
      if (body.action === "complete-module") {
        t.foundationsStatus = {
          ...t.foundationsStatus,
          completedModules: [
            ...t.foundationsStatus.completedModules,
            body.moduleId,
          ],
          status: "in-progress",
        };
      }
      if (body.action === "pass-exam") {
        t.foundationsStatus = {
          ...t.foundationsStatus,
          status: "completed",
        };
        t.currentState = "foundations-graduate";
      }
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ ok: true, transcript: t }),
      });
    }

    if (url === "/api/students") {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({ students: [], lastUpdated: new Date().toISOString() }),
      });
    }

    return Promise.resolve({ ok: false, json: () => Promise.resolve({}) });
  }) as unknown as typeof globalThis.fetch;
}

beforeEach(() => {
  localStorage.clear();
  globalThis.fetch = mockFetch();
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  localStorage.clear();
});

describe("App", () => {
  it("renders without crashing", () => {
    renderApp();
    const matches = screen.getAllByText("Clawford");
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it("defaults to Chinese language", () => {
    renderApp();
    expect(screen.getByText("龙虾智能体大学")).toBeInTheDocument();
  });

  it("switches language to English", () => {
    renderApp();
    fireEvent.click(screen.getByLabelText("Switch to EN"));
    expect(
      screen.getByText(/Correctness first, then speed and scale/),
    ).toBeInTheDocument();
  });
});

describe("Connect flow", () => {
  it("shows idle status by default", () => {
    renderApp();
    expect(screen.getByText(/等待 agent 接入/)).toBeInTheDocument();
  });

  it("shows username and password inputs when not connected", () => {
    renderApp();
    expect(screen.getByPlaceholderText("用户名")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("密码")).toBeInTheDocument();
  });

  it("connects via username and password", async () => {
    renderApp();
    fireEvent.change(screen.getByPlaceholderText("用户名"), { target: { value: "testuser" } });
    fireEvent.change(screen.getByPlaceholderText("密码"), { target: { value: "pass123" } });
    fireEvent.click(screen.getByText("注册 / 登录"));

    await waitFor(() => {
      expect(screen.getByText(/已接入/)).toBeInTheDocument();
    });
  });
});

describe("Module completion", () => {
  it("disables study buttons when not connected", () => {
    renderApp();
    const buttons = screen.getAllByText("学习模块");
    buttons.forEach((btn: HTMLElement) => {
      expect(btn.closest("button")).toBeDisabled();
    });
  });

  it("enables study buttons after connecting", async () => {
    renderApp();
    fireEvent.change(screen.getByPlaceholderText("用户名"), { target: { value: "testuser" } });
    fireEvent.change(screen.getByPlaceholderText("密码"), { target: { value: "pass123" } });
    fireEvent.click(screen.getByText("注册 / 登录"));

    await waitFor(() => {
      const buttons = screen.getAllByText("学习模块");
      buttons.forEach((btn: HTMLElement) => {
        expect(btn.closest("button")).not.toBeDisabled();
      });
    });
  });
});

describe("Students page", () => {
  it("renders students page at /students route", () => {
    renderApp("/students");
    expect(screen.getByText("Clawford 学生档案")).toBeInTheDocument();
  });

  it("shows back to home link", () => {
    renderApp("/students");
    expect(screen.getByText("返回首页")).toBeInTheDocument();
  });
});
