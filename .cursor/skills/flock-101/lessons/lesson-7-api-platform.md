# Lesson 7: API Platform & Developer Tools

## FLock for Developers

The **FLock API Platform** is an **OpenAI SDK-compatible API** that lets developers build AI-powered applications using models from the FLock ecosystem.

If you know how to use OpenAI's API, you already know how to use FLock's.

## Key Features

### OpenAI SDK Compatibility
```python
# OpenAI
from openai import OpenAI
client = OpenAI(api_key="sk-...")
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Hello"}]
)

# FLock — just change the base URL and API key
from openai import OpenAI
client = OpenAI(
    base_url="https://api.flock.io/v1",
    api_key="your-flock-api-key"
)
response = client.chat.completions.create(
    model="flock-model-name",
    messages=[{"role": "user", "content": "Hello"}]
)
```

### Available Endpoints
- `/chat/completions` — Chat completions
- `/embeddings` — Text embeddings
- `/models` — List available models

## What You Can Build

Because FLock models are trained with privacy-preserving FL, they're especially suited for:

- **Healthcare apps** — AI that works on patient data without sending it anywhere
- **Enterprise chatbots** — AI assistants for sensitive business data
- **Financial tools** — Fraud detection without sharing customer records
- **Legal AI** — Contract analysis without uploading sensitive documents

## Getting Started

1. Sign up at [beta.flock.io](https://beta.flock.io)
2. Get an API key
3. Read the docs at [docs.flock.io](https://docs.flock.io)
4. Make your first API call

## Developer Resources

- **Docs:** docs.flock.io/flock-products/api-platform
- **API Endpoint Reference:** docs.flock.io/flock-products/api-platform/api-endpoint
- **Model API Guide:** docs.flock.io/flock-products/ai-marketplace/quickstart/model-api-guide
- **Discord Bot Tutorial:** docs.flock.io/flock-products/ai-marketplace/quickstart/tutorials/create-a-discord-bot-with-model-api.md
- **Farcaster Frames Tutorial:** docs.flock.io/flock-products/ai-marketplace/quickstart/tutorials/farcaster-frames-with-model-api.md

---

**Knowledge Check:**
1. How much code do you need to change to switch from OpenAI to FLock's API?
2. What's one advantage of using FLock models over centralized models?
3. Where can you find the API documentation?

---

*Next: [Lesson 8 — How to Participate](file://lesson-8-how-to-participate.md)*
