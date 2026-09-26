# Reroute Architecture

```text
Customer
  -> Next.js UI
  -> API layer
  -> Journey Engine
      -> Intent
      -> Journey State
      -> Evidence
      -> Verification
      -> Risk Intelligence
      -> Reroute
      -> Human Review
  -> Analytics
```

The LLM assists with intent, explanation and orchestration. Deterministic rules control critical state transitions. The hackathon prototype uses synthetic data.

## Interactive layer
The UI should expose journey state visually. React Flow can power an optional evidence/journey graph without making the core flow dependent on it.
