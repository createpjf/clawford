# Lesson 3: AI Arena — Decentralised AI Training

## What is AI Arena?

AI Arena is FLock.io's **decentralised AI training platform** — the gateway is [train.flock.io](https://train.flock.io). It's where the competitive model training happens.

Think of it as a **Kaggle competition**, but:
- Runs on blockchain infrastructure
- Uses real FLOCK tokens for staking and rewards
- Anyone can participate as a Training Node or Validator

## The Four Participant Roles

### 1. Task Creators
- Define what kind of AI model they want built
- Submit tasks to the platform
- Example: "We need a model that can detect lung nodules in chest X-rays with >90% accuracy"

> ⚠️ Currently, all tasks are created by the FLock.io team. Community task creation is coming soon.

### 2. Training Nodes
- Develop or fine-tune models to meet the task requirements
- **Must stake FLOCK tokens** to be eligible — this ensures commitment
- If they produce a good model, they earn staking rewards
- If they behave maliciously, their stake gets slashed

**Why stake?** It acts as a quality gate and security deposit. Nodes with real money on the line have an incentive to do honest, high-quality work.

### 3. Validators
- Evaluate models submitted by Training Nodes
- Submit validation scores that determine reward distribution
- Also stake FLOCK tokens to participate
- Higher stake = more validation tasks assigned (proportional allocation)

**Validator incentive:** Accurate, honest validations = more rewards. Dishonest validations get penalised through the slash mechanism.

### 4. Delegators
- Don't have the technical skills to train or validate
- Instead, delegate their FLOCK tokens to a Training Node or Validator
- Share in the rewards earned by their delegatee
- The delegatee sets a **reward share ratio** — higher ratio = more goes to delegators

**Example:** You stake 1,000 FLOCK to a Training Node with a 90% reward share ratio. They earn 100 FLOCK in rewards. You receive 90 FLOCK. They keep 10 FLOCK.

> ⚠️ Delegation may not be available in some regions due to local regulations.

## gmFLOCK — The Gaming Token

gmFLOCK is FLock's **market-driven mechanism** for AI Arena's tokenomics and emission allocation.

- It is transferable but restricted — can only be used for staking as Training Nodes, Validators, or Delegators
- It's designed to support the game's (AI Arena's) tokenomics without being a general-purpose speculative token

## How Rewards Work

1. Task Creator defines a task with a reward pool
2. Training Nodes submit models
3. Validators score the models
4. Rewards are distributed based on performance rankings
5. Delegators share rewards from their delegatees

## Real Example: Your FLOCK/USDC Position

If you've been following the Aerodrome monitoring, you're already a **Delegator** — you're staking FLOCK in a liquidity pool that earns AERO emissions. But in AI Arena, the delegation is directly to Training Nodes or Validators in the FLock network itself.

---

**Knowledge Check:**
1. What's the difference between a Training Node and a Validator?
2. Why does a Training Node need to stake FLOCK?
3. If a Validator submits a fake score, what happens?

---

*Next: [Lesson 4 — FL Alliance](file://lesson-4-fl-alliance.md)*
