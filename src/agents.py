from __future__ import annotations

import time

from .types import AgentRun, Task


def summarizer_agent(task: Task) -> AgentRun:
    start = time.perf_counter()
    text = task.content.strip()
    summary = text[:160] + ('...' if len(text) > 160 else '')
    latency = (time.perf_counter() - start) * 1000
    return AgentRun(
        task_id=task.task_id,
        agent='summarizer',
        output=summary,
        success=bool(summary),
        latency_ms=latency,
        token_cost=max(12, len(text) // 5),
    )


def qa_agent(task: Task) -> AgentRun:
    start = time.perf_counter()
    text = task.content.strip()
    output = f'Answer draft: {text[:120]}' if text else ''
    latency = (time.perf_counter() - start) * 1000
    return AgentRun(
        task_id=task.task_id,
        agent='qa',
        output=output,
        success=bool(output),
        latency_ms=latency,
        token_cost=max(18, len(text) // 4),
    )


def planner_agent(task: Task) -> AgentRun:
    start = time.perf_counter()
    text = task.content.strip()
    items = [p.strip() for p in text.split('.') if p.strip()][:4]
    plan = '\n'.join(f'- {i+1}. {item}' for i, item in enumerate(items)) or '- 1. Define objective'
    latency = (time.perf_counter() - start) * 1000
    return AgentRun(
        task_id=task.task_id,
        agent='planner',
        output=plan,
        success=bool(plan),
        latency_ms=latency,
        token_cost=max(16, len(text) // 5),
    )
