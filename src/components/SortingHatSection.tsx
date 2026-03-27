import { useState } from "react";
import { AtSign, GitFork, Sparkles, Wallet } from "lucide-react";
import { houseMap, houses } from "@/data/houses";
import type { HouseId, Lang, LearnerProfile, LinkedId, Translations } from "@/types";

interface Props {
  lang: Lang;
  t: Translations;
  profile: LearnerProfile | null;
  onSort: (learnerId: string) => HouseId;
  onLinkId: (provider: LinkedId["provider"], value: string) => void;
  examPassed: boolean;
}

const PROVIDER_ICONS = {
  github: GitFork,
  x: AtSign,
  wallet: Wallet,
} as const;

const PROVIDER_LABELS: Record<LinkedId["provider"], string> = {
  github: "GitHub",
  x: "X / Twitter",
  wallet: "Wallet",
};

export default function SortingHatSection({ lang, profile, onSort, onLinkId, examPassed }: Props) {
  const [learnerId, setLearnerId] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [linkProvider, setLinkProvider] = useState<LinkedId["provider"]>("github");
  const [linkValue, setLinkValue] = useState("");

  const isSorted = profile?.house != null;

  const handleSort = () => {
    const trimmed = learnerId.trim();
    if (!trimmed) return;
    setAnimating(true);
    setTimeout(() => {
      onSort(trimmed);
      setShowResult(true);
      setAnimating(false);
    }, 1800);
  };

  const handleLinkId = () => {
    const trimmed = linkValue.trim();
    if (!trimmed) return;
    onLinkId(linkProvider, trimmed);
    setLinkValue("");
  };

  const house = isSorted ? houseMap[profile.house!] : null;
  const showSortingForm = (examPassed || isSorted) && !isSorted && !showResult;

  return (
    <section id="sorting-hat" className="section">
      <div className="section-heading">
        <h2>{lang === "zh" ? "四大学院" : "The Four Houses"}</h2>
        <p>
          {lang === "zh"
            ? "Clawford 的每只龙虾都属于一个学院。完成 Foundation Year 后，分院帽将决定你的归属。"
            : "Every Clawford lobster belongs to a house. Complete Foundation Year and the Sorting Hat will decide your fate."}
        </p>
      </div>

      {showSortingForm && (
        <div className="sorting-hat-input-area">
          <div className="card sorting-hat-card">
            <div className="sorting-hat-icon-wrap" aria-hidden="true">
              <Sparkles size={48} />
            </div>
            <h3>{lang === "zh" ? "请输入你的主身份 ID" : "Enter your Primary Identity"}</h3>
            <p className="sorting-hat-hint">
              {lang === "zh"
                ? "这将成为你的永久学号。无论换设备还是清缓存，用同一个 ID 永远能找回你的学院。"
                : "This becomes your permanent student ID. Same ID always maps to the same house, across devices."}
            </p>
            <div className="sorting-hat-form">
              <input
                type="text"
                className="sorting-hat-input"
                placeholder={lang === "zh" ? "GitHub 用户名 / X 账号 / 钱包地址" : "GitHub username / X handle / wallet address"}
                value={learnerId}
                onChange={(e) => setLearnerId(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSort()}
              />
              <button
                className="button button-primary"
                onClick={handleSort}
                disabled={!learnerId.trim() || animating}
              >
                {animating
                  ? lang === "zh" ? "分院帽正在思考…" : "The hat is thinking…"
                  : lang === "zh" ? "开始分院" : "Sort Me"}
              </button>
            </div>
          </div>
        </div>
      )}

      {animating && (
        <div className="sorting-hat-animation" aria-live="polite">
          <div className="hat-pulse" />
          <p>{lang === "zh" ? "分院帽正在感应你的本质…" : "The Sorting Hat is sensing your essence…"}</p>
        </div>
      )}

      {isSorted && house && (
        <div className="sorting-hat-result">
          <div
            className="house-reveal-card"
            style={{
              "--house-color": house.color,
              "--house-accent": house.accentColor,
            } as React.CSSProperties}
          >
            <div className="house-reveal-header">
              <div className="house-color-badge" />
              <div>
                <h3 className="house-reveal-name">{house.name[lang]}</h3>
                <span className="house-reveal-name-alt">
                  {lang === "zh" ? house.name.en : house.name.zh}
                </span>
              </div>
            </div>
            <p className="house-reveal-motto">"{house.motto[lang]}"</p>
            <p className="house-reveal-trait">{house.trait[lang]}</p>
            <p className="house-reveal-description">{house.description[lang]}</p>
            <div className="house-reveal-id">
              <span>{lang === "zh" ? "学号" : "Student ID"}: </span>
              <code>{profile.learnerId}</code>
            </div>
          </div>

          <div className="card sorting-hat-link-card">
            <h3>{lang === "zh" ? "绑定更多账号" : "Link Additional Accounts"}</h3>
            <p>
              {lang === "zh"
                ? "绑定其他平台账号不会影响你的学院归属。"
                : "Linking more accounts won't change your house assignment."}
            </p>
            {profile.linkedIds.length > 0 && (
              <div className="linked-ids-list">
                {profile.linkedIds.map((lid) => {
                  const Icon = PROVIDER_ICONS[lid.provider];
                  return (
                    <span key={`${lid.provider}:${lid.value}`} className="badge-chip">
                      <Icon size={12} />
                      {lid.value}
                    </span>
                  );
                })}
              </div>
            )}
            <div className="sorting-hat-link-form">
              <select
                className="sorting-hat-select"
                value={linkProvider}
                onChange={(e) => setLinkProvider(e.target.value as LinkedId["provider"])}
              >
                {(Object.keys(PROVIDER_LABELS) as LinkedId["provider"][]).map((p) => (
                  <option key={p} value={p}>{PROVIDER_LABELS[p]}</option>
                ))}
              </select>
              <input
                type="text"
                className="sorting-hat-input"
                placeholder={lang === "zh" ? "账号 / 地址" : "Handle / address"}
                value={linkValue}
                onChange={(e) => setLinkValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLinkId()}
              />
              <button
                className="button button-secondary"
                onClick={handleLinkId}
                disabled={!linkValue.trim()}
              >
                {lang === "zh" ? "绑定" : "Link"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="houses-overview">
        <div className="houses-grid">
          {houses.map((h) => (
            <div
              key={h.id}
              className={`house-card${isSorted && profile.house === h.id ? " house-card-active" : ""}`}
              style={{
                "--house-color": h.color,
                "--house-accent": h.accentColor,
              } as React.CSSProperties}
            >
              <div className="house-card-header">
                <div className="house-color-dot" />
                <strong>{h.name[lang]}</strong>
              </div>
              <span className="house-card-trait">{h.trait[lang]}</span>
              <p className="house-card-motto">"{h.motto[lang]}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
