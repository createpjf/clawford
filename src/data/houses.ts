import type { House, HouseId } from "@/types";

export const houses: House[] = [
  {
    id: "krillindor",
    name: { zh: "钳兰芬多", en: "Krillindor" },
    motto: { zh: "挥舞双钳，一往无前", en: "Pincers high, never shy" },
    trait: { zh: "勇敢 · 无畏", en: "Courage & Bravery" },
    color: "#e63946",
    accentColor: "#ff6b6b",
    description: {
      zh: "Krill（磷虾）虽小，却敢直面鲸鱼。钳兰芬多的龙虾们挥舞双钳迎向未知深海，永远是第一个冲锋的。",
      en: "Krill may be small, but they face whales head-on. Krillindor lobsters charge into the unknown deep with pincers raised — always first to the front line.",
    },
  },
  {
    id: "shelltherin",
    name: { zh: "斯莱特鳞", en: "Shelltherin" },
    motto: { zh: "鳞甲之下，深谋远虑", en: "Beneath the shell, a sharper mind" },
    trait: { zh: "精明 · 野心", en: "Cunning & Ambition" },
    color: "#1d7a50",
    accentColor: "#2dd4a0",
    description: {
      zh: "Shell（甲壳）是龙虾最坚硬的铠甲。斯莱特鳞的龙虾们深藏不露，用最精密的策略在深海中编织自己的领地。",
      en: "The shell is a lobster's toughest armor. Shelltherin lobsters play the long game — calculating, strategic, weaving their territory through the deep.",
    },
  },
  {
    id: "cravenclaw",
    name: { zh: "拉文克螯", en: "Cravenclaw" },
    motto: { zh: "以螯为笔，书写智慧", en: "Claw sharp, mind sharper" },
    trait: { zh: "智慧 · 敏锐", en: "Wisdom & Wit" },
    color: "#2563eb",
    accentColor: "#60a5fa",
    description: {
      zh: "Claw（钳）是龙虾的终极武器，也是思考的延伸。拉文克螯的龙虾们相信：最锋利的螯，来自最聪明的脑。",
      en: "The claw is both weapon and instrument of thought. Cravenclaw lobsters believe the sharpest pincer belongs to the sharpest mind.",
    },
  },
  {
    id: "hufflepinch",
    name: { zh: "赫奇爬奇", en: "Hufflepinch" },
    motto: { zh: "脚踏海底，不急不躁", en: "Steady crawl, loyal pinch" },
    trait: { zh: "忠诚 · 勤奋", en: "Loyalty & Hard Work" },
    color: "#d97706",
    accentColor: "#fbbf24",
    description: {
      zh: "Pinch（夹）看似温柔，实则最有力。赫奇爬奇的龙虾们在海底勤奋地爬行，低调却最可靠——急了也会给你最紧的拥抱。",
      en: "A pinch seems gentle but packs real force. Hufflepinch lobsters crawl steadily across the seabed — humble, reliable, and ready to give you the tightest hug when it counts.",
    },
  },
];

export const houseMap: Record<HouseId, House> = Object.fromEntries(
  houses.map((h) => [h.id, h]),
) as Record<HouseId, House>;

const HOUSE_ORDER: HouseId[] = ["krillindor", "shelltherin", "cravenclaw", "hufflepinch"];

export function sortIntoHouse(learnerId: string): HouseId {
  let hash = 0;
  for (let i = 0; i < learnerId.length; i++) {
    const char = learnerId.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  const index = ((hash % HOUSE_ORDER.length) + HOUSE_ORDER.length) % HOUSE_ORDER.length;
  return HOUSE_ORDER[index];
}
