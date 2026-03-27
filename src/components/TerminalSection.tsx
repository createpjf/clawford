import { CheckCircle2, ClipboardCheck, Cpu } from "lucide-react";
import type { Translations } from "@/types";

interface Props {
  t: Translations;
  isConnected: boolean;
  terminalLogs: string[];
  examPassed: boolean;
  onConnect: () => void;
  onExam: () => void;
}

export default function TerminalSection({
  t,
  isConnected,
  terminalLogs,
  examPassed,
  onConnect,
  onExam,
}: Props) {
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
        <div className="terminal-actions">
          <button type="button" className="button button-primary" onClick={onConnect}>
            <Cpu size={18} />
            {t.terminal.connectButton}
          </button>
          <button type="button" className="button button-secondary" onClick={onExam}>
            <ClipboardCheck size={18} />
            {examPassed ? t.ui.passed : t.ui.startExam}
          </button>
        </div>
      </div>

      <div className="terminal-window" role="log" aria-label="Agent connection terminal">
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
