from __future__ import annotations

from .types import AgentRun, EvalResult


def evaluate_runs(runs: list[AgentRun]) -> EvalResult:
    if not runs:
        return EvalResult(0, 0.0, 0.0, 0.0, 0.0)

    total = len(runs)
    success = sum(1 for r in runs if r.success)
    retries = sum(1 for r in runs if not r.success)

    return EvalResult(
        total_runs=total,
        success_rate=round(success / total, 4),
        avg_latency_ms=round(sum(r.latency_ms for r in runs) / total, 2),
        avg_token_cost=round(sum(r.token_cost for r in runs) / total, 2),
        retry_rate=round(retries / total, 4),
    )
