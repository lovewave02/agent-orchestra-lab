from __future__ import annotations

from dataclasses import dataclass
from typing import Literal

TaskType = Literal['summarize', 'qa', 'plan']


@dataclass
class Task:
    task_id: str
    task_type: TaskType
    content: str


@dataclass
class AgentRun:
    task_id: str
    agent: str
    output: str
    success: bool
    latency_ms: float
    token_cost: int
    created_at: str = ''


@dataclass
class EvalResult:
    total_runs: int
    success_rate: float
    avg_latency_ms: float
    avg_token_cost: float
    retry_rate: float
