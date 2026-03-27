# Lesson 5: AI Marketplace — Model Deployment

## The Final Piece

AI Marketplace is where trained and fine-tuned models **meet their users**. It's the output side of FLock's ecosystem.

```
Train (Arena) → Fine-tune (Alliance) → Deploy (Marketplace)
```

## What You Can Do on the Marketplace

1. **Browse models** — See all available models trained on FLock
2. **Use models via API** — Integrate models into your applications
3. **Host models** — Node operators can host models for the community
4. **Contribute models** — Submit models you've trained in AI Arena

## The Contribution Mechanism

The Marketplace uses a **RAG-based contribution system** — this means models can be enhanced with Retrieval-Augmented Generation, where external knowledge can be injected at query time without retraining.

This creates a way for community members to improve models without touching the underlying training — they can add domain-specific knowledge through the RAG pipeline.

## Real-World Use Cases

Given FLock's focus on privacy-preserving AI, the Marketplace is particularly suited for:

- **Healthcare:** Models for medical imaging, drug discovery, patient data analysis
- **Finance:** Fraud detection, credit scoring without sharing customer data
- **Enterprise:** Custom AI assistants that don't send sensitive data to third parties

## Developer Integration

All models on the Marketplace expose an **OpenAI SDK-compatible API**. This means if you've ever used OpenAI's API, you can immediately use FLock models — no new code required.

---

**Knowledge Check:**
1. In one sentence, what is the AI Marketplace?
2. What does "OpenAI SDK-compatible" mean for a developer?
3. How does the RAG contribution mechanism work?

---

*Next: [Lesson 6 — FLock Tokenomics](file://lesson-6-tokenomics.md)*
