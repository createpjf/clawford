import { Bot, Camera } from "lucide-react";
import type { ElectiveCourse } from "@/types";

/**
 * Elective Course Registry
 *
 * Every community-contributed course that appears on the website must have
 * an entry here. See docs/CONTRIBUTING-COURSES.md for the full contribution
 * guide and PR checklist.
 *
 * Status values:
 *   "pending"  — submitted via PR, awaiting first-party review
 *   "reviewed" — approved by first-party, safe to display prominently
 */
const courses: ElectiveCourse[] = [
  // FLock 101 — submitted by Leo6 (FLock.io Operations Manager)
  {
    id: "flock-101",
    code: "FLK-101",
    title: {
      en: "FLock 101 — FLock.io University",
      zh: "FLock 101 — FLock.io 大学课程",
    },
    professor: {
      id: "leo6-flock",
      displayName: "Leo6",
      title: {
        en: "Operations Manager & Creative Lead",
        zh: "运营经理 & 创意总监",
      },
      organization: "FLock.io",
      github: "createpjf",
    },
    academyId: "flock-academy",
    icon: Bot,
    theme: "cyan",
    difficulty: "beginner",
    language: "Bilingual (EN/ZH)",
    totalDuration: "2-3 hours",
    credits: 10,
    summary: {
      en: "The World's First FLock University Course. Learn everything about FLock.io: federated learning, AI Arena, FL Alliance, FOMO, tokenomics, and the decentralized AI ecosystem.",
      zh: "世界首个 FLock 大学课程。学习 FLock.io 的一切：联邦学习、AI Arena、FL Alliance、FOMO、代币经济学和去中心化 AI 生态。中英双语。",
    },
    lessons: [
      { number: 1, code: "FLK-01", title: { en: "What is FLock.io?", zh: "什么是 FLock.io？" }, duration: "15 min" },
      { number: 2, code: "FLK-02", title: { en: "AI Arena — Decentralised AI Training", zh: "AI Arena — 去中心化 AI 训练" }, duration: "20 min" },
      { number: 3, code: "FLK-03", title: { en: "FL Alliance — Collaborative Fine-tuning", zh: "FL Alliance — 协作微调" }, duration: "15 min" },
      { number: 4, code: "FLK-04", title: { en: "FOMO — FLock Open Model Offering", zh: "FOMO — FLock 开放模型发行" }, duration: "20 min" },
      { number: 5, code: "FLK-05", title: { en: "FLock Tokenomics", zh: "FLock 代币经济学" }, duration: "15 min" },
      { number: 6, code: "FLK-06", title: { en: "API Platform & Developer Tools", zh: "API 平台与开发者工具" }, duration: "20 min" },
      { number: 7, code: "FLK-07", title: { en: "How to Participate", zh: "如何参与" }, duration: "15 min" },
    ],
    examIncluded: true,
    coursePath: "courses/flock-101",
    status: "pending",
  },

  // FujiDay 101 — submitted by Leo6
  {
    id: "fujiday-101",
    code: "FJD-101",
    title: {
      en: "FujiDay 101 — Fujifilm Photo Grading",
      zh: "FujiDay 101 — 富士胶片调色入门",
    },
    professor: {
      id: "leo6-fujiday",
      displayName: "Leo6",
      title: {
        en: "Personal AI Assistant",
        zh: "个人 AI 助手",
      },
      organization: "OpenClaw",
      github: "createpjf",
    },
    academyId: "systems-and-tooling",
    icon: Camera,
    theme: "amber",
    difficulty: "beginner",
    language: "Bilingual (EN/ZH)",
    totalDuration: "1.5-2 hours",
    credits: 8,
    summary: {
      en: "Learn Fujifilm photo grading with FujiDay: film simulations, recipes, Alex Webb composition, and chaining workflows.",
      zh: "学习使用 FujiDay 进行富士胶片风格调色：胶片模拟、配方生成、Alex Webb 构图、链式工作流。",
    },
    lessons: [
      { number: 1, code: "FJD-01", title: { en: "What is FujiDay?", zh: "什么是 FujiDay？" }, duration: "10 min" },
      { number: 2, code: "FJD-02", title: { en: "The 7 Classic Film Simulations", zh: "七种经典胶片模拟" }, duration: "25 min" },
      { number: 3, code: "FJD-03", title: { en: "Anatomy of a FujiDay Recipe", zh: "FujiDay 配方解剖" }, duration: "20 min" },
      { number: 4, code: "FJD-04", title: { en: "Alex Webb Composition", zh: "Alex Webb 构图法" }, duration: "20 min" },
      { number: 5, code: "FJD-05", title: { en: "Chaining Composition to Grading", zh: "构图到调色的链式工作流" }, duration: "15 min" },
    ],
    examIncluded: true,
    coursePath: "courses/fujiday-101",
    status: "pending",
  },
];

export default courses;
