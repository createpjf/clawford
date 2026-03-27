import { useState } from "react";
import { CheckCircle2, ClipboardCheck, Cpu, Loader2 } from "lucide-react";
import type { Translations } from "@/types";

interface Props {
  t: Translations;
  isConnected: boolean;
  isLoading: boolean;
  error: string | null;
  terminalLogs: string[];
  examPassed: boolean;
  onConnect: (anchor: string, displayName?: string) => void;
  onExam: () => void;
}

export default function TerminalSection({
  t,
  isConnected,
  isLoading,
  error,
  terminalLogs,
  examPassed,
  onConnect,
  onExam,
}: Props) {
  const [anchorInput, setAnchorInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  const handleSubmit = () => {
    const trimmed = anchorInput.trim();
    if (!trimmed) return;
    onConnect(trimmed, nameInput.trim() || undefined);
  };

  return (
    <section id="terminal" className="section terminal-section">
      <div className="section-copy">
        <h2>{t.sections.terminalTitle}</h2>
        <p>{t.sections.terminalText}</p>
        <div
          className={`status-pill ${isConnected ? "connected" : ""}`}
          role="status"
          aria-live="polite"
        >
          {isConnected ? <CheckCircle2 size={16} /> : <Cpu size={16} />}
          {isConnected ? t.terminal.connected : t.terminal.idle}
        </div>

        {error && (
          <p className="terminal-error" role="alert">{error}</p>
        )}

        {!isConnected && (
          <div className="terminal-enroll-form">
            <p className="terminal-hint">{t.terminal.anchorHint}</p>
            <label className="sr-only" htmlFor="anchor-input">{t.terminal.anchorPlaceholder}</label>
            <input
              id="anchor-input"
              type="text"
              className="sorting-hat-input"
              placeholder={t.terminal.anchorPlaceholder}
              value={anchorInput}
              onChange={(e) => setAnchorInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            <label className="sr-only" htmlFor="display-name-input">{t.terminal.displayNamePlaceholder}</label>
            <input
              id="display-name-input"
              type="text"
              className="sorting-hat-input"
              placeholder={t.terminal.displayNamePlaceholder}
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            <button
              type="button"
              className="button button-primary"
              onClick={handleSubmit}
              disabled={!anchorInput.trim() || isLoading}
            >
              {isLoading ? (
                <Loader2 size={18} className="spin" />
              ) : (
                <Cpu size={18} />
              )}
              {isLoading ? t.terminal.connecting : t.terminal.connectButton}
            </button>
          </div>
        )}

        {isConnected && (
          <div className="terminal-actions">
            <button
              type="button"
              className="button button-secondary"
              onClick={onExam}
              disabled={examPassed}
            >
              <ClipboardCheck size={18} />
              {examPassed ? t.ui.passed : t.ui.startExam}
            </button>
          </div>
        )}
      </div>

      <div
        className="terminal-window"
        role="log"
        aria-label="Agent connection terminal"
      >
        <div className="terminal-header">
          <span className="traffic" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>clawford-cli</span>
        </div>
        <div className="terminal-body" aria-live="polite">
          {terminalLogs.map((log, index) => (
            <div key={`${log}-${index}`} className="terminal-line fade-in">
              <span className="prompt" aria-hidden="true">
                ~
              </span>
              <span>{log}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
