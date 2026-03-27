# Lesson 4: FL Alliance — Collaborative Fine-tuning

## The Flow: Arena → Alliance

After AI Arena produces champion models (the best models from competitive training), they go to **FL Alliance** for further refinement.

```
AI Arena (competitive) → FL Alliance (collaborative) → AI Marketplace (deployment)
```

## What FL Alliance Does

FL Alliance is about **collaborative fine-tuning** — not competition, but cooperation.

In AI Arena, models are trained on **public/common datasets**. In FL Alliance, the champion models are further fine-tuned using **proprietary/private data** from participating organisations.

**Key insight:** Organisations often can't share their data (privacy, competitive advantage, regulations like GDPR or HIPAA). FL Alliance lets them contribute their private data to improve AI models **without actually sharing the data**.

## How It Works (The Technical Part)

FL Alliance uses FLock's research paper published at IEEE Transactions on Artificial Intelligence. The key mechanisms:

1. **Random role assignment** — Participants are randomly assigned roles to prevent collusion
2. **Staking mechanism** — All participants stake tokens as commitment
3. **Incentive mechanism** — Honest participants earn rewards; malicious participants get slashed
4. **Global model improvement** — Each participant's local model updates are aggregated into a better global model

## Why This Matters

**Traditional approach:** Company A has medical data, Company B has financial data. They can't share raw data, so AI models stay siloed and limited.

**FL Alliance approach:** Both companies contribute their data's model updates (not raw data). The global model gets smarter without anyone seeing anyone else's private data. Both companies benefit from a better model and get rewarded for contributing.

## Slash & Reward Mechanism

The system is designed to catch and punish:
- Free-riders (contributing nothing but taking rewards)
- Poisoning attacks (submitting bad updates to harm the model)
- Collusion (participants coordinating to game the system)

Honest participants are rewarded proportionally to their contribution quality and stake size.

---

**Knowledge Check:**
1. What's the difference between AI Arena and FL Alliance in one sentence?
2. Why is FL Alliance important for data privacy?
3. What happens if a participant tries to game the system?

---

*Next: [Lesson 5 — AI Marketplace](file://lesson-5-ai-marketplace.md)*
