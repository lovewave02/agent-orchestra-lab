# Agent Orchestra Lab

A measurable multi-agent orchestration sandbox with supervisor routing, run logging, and quality/cost/latency evaluation.

## MVP implemented
- Supervisor router (`src/router.py`) chooses specialist agent by task type
- Specialist agents:
  - summarizer
  - qa
  - planner
- SQLite run log (`data/runs.db`) with structured execution records
- Evaluation metrics:
  - success rate
  - average latency
  - average token cost
  - retry rate
- CLI entrypoint for reproducible task runs

## Quick start
```bash
pip install -r requirements.txt
python3 -m pytest -q
python3 -m src.cli --task-id demo-1 --type plan --content "Define scope. Build MVP. Add tests."
```

## Core files
- `src/orchestrator.py`: supervisor run lifecycle
- `src/router.py`: task-type routing
- `src/agents.py`: specialist agent handlers
- `src/store.py`: SQLite logging
- `src/eval.py`: run quality/cost/latency evaluation
- `src/cli.py`: command-line execution

## Why this is portfolio-worthy
- Converts "multi-agent" buzzword into measurable engineering outcomes.
- Keeps orchestration transparent with persistent structured logs.
- Easy interview demo: run CLI tasks and show evolving eval metrics.

## Next roadmap
1. Add tool-call abstraction and per-tool failure taxonomy
2. Add benchmark dataset runner for regression tracking
3. Add web dashboard for evaluation trend over time
