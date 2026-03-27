import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import App from "@/App";

afterEach(cleanup);

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    const matches = screen.getAllByText("Clawford");
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it("defaults to Chinese language", () => {
    render(<App />);
    expect(screen.getByText("龙虾智能体大学")).toBeInTheDocument();
  });

  it("switches language to English", () => {
    render(<App />);
    fireEvent.click(screen.getByLabelText("Switch to EN"));
    expect(screen.getByText(/Correctness first, then speed and scale/)).toBeInTheDocument();
  });

  it("switches language back to Chinese", () => {
    render(<App />);
    fireEvent.click(screen.getByLabelText("Switch to EN"));
    expect(screen.getByText(/Correctness first, then speed and scale/)).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Switch to ZH"));
    expect(screen.getByText("龙虾智能体大学")).toBeInTheDocument();
  });
});

describe("Connect flow", () => {
  it("shows idle status by default", () => {
    render(<App />);
    expect(screen.getByText(/等待新生龙虾 agent 接入/)).toBeInTheDocument();
  });

  it("connects and shows connected status", () => {
    render(<App />);
    fireEvent.click(screen.getByText("运行接入流程"));
    expect(screen.getByText(/已接入/)).toBeInTheDocument();
  });

  it("appends flow logs after connecting", () => {
    vi.useFakeTimers();
    render(<App />);

    fireEvent.click(screen.getByText("运行接入流程"));

    act(() => {
      vi.advanceTimersByTime(4000);
    });

    expect(screen.getByText("> course graph ready")).toBeInTheDocument();

    vi.useRealTimers();
  });
});

describe("Module completion", () => {
  it("disables study buttons when not connected", () => {
    render(<App />);
    const buttons = screen.getAllByText("学习模块");
    buttons.forEach((btn: HTMLElement) => {
      expect(btn.closest("button")).toBeDisabled();
    });
  });

  it("enables study buttons after connecting", () => {
    render(<App />);
    fireEvent.click(screen.getByText("运行接入流程"));
    const buttons = screen.getAllByText("学习模块");
    buttons.forEach((btn: HTMLElement) => {
      expect(btn.closest("button")).not.toBeDisabled();
    });
  });

  it("marks module as completed after studying", () => {
    render(<App />);
    fireEvent.click(screen.getByText("运行接入流程"));
    const studyButtons = screen.getAllByText("学习模块");
    fireEvent.click(studyButtons[0]);
    expect(screen.getAllByText("已掌握").length).toBeGreaterThanOrEqual(1);
  });
});

describe("Exam flow", () => {
  it("shows exam button text initially", () => {
    render(<App />);
    expect(screen.getByText("开始评测")).toBeInTheDocument();
  });

  it("marks exam as passed after clicking", () => {
    render(<App />);
    fireEvent.click(screen.getByText("运行接入流程"));
    fireEvent.click(screen.getByText("开始评测"));
    expect(screen.getByText("评测通过")).toBeInTheDocument();
  });

  it("does not pass exam when not connected", () => {
    render(<App />);
    fireEvent.click(screen.getByText("开始评测"));
    expect(screen.getByText("开始评测")).toBeInTheDocument();
  });
});
