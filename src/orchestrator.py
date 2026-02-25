from __future__ import annotations

from dataclasses import dataclass

from .eval import evaluate_runs
from .router import route_task
from .store import fetch_runs, log_run
from .types import AgentRun, EvalResult, Task


@dataclass
class RunResult:
    status: str
    retries: int
    last_run: AgentRun | None = None
    evaluation: EvalResult | None = None


def run_task(task: Task) -> RunResult:
    handler = route_task(task)
    run = handler(task)

    # single retry guard for empty output
    retries = 0
    if not run.success:
        retries = 1
        run = handler(task)

    log_run(run)
    eval_result = evaluate_runs(fetch_runs())
    status = 'ok' if run.success else 'failed'

    return RunResult(status=status, retries=retries, last_run=run, evaluation=eval_result)


def run_stub() -> RunResult:
    task = Task(task_id='stub-1', task_type='summarize', content='stub content for orchestration')
    return run_task(task)
