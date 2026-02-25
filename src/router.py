from __future__ import annotations

from .agents import planner_agent, qa_agent, summarizer_agent
from .types import Task


def route_task(task: Task):
    if task.task_type == 'summarize':
        return summarizer_agent
    if task.task_type == 'qa':
        return qa_agent
    return planner_agent
