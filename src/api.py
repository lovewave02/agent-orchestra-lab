from __future__ import annotations

from fastapi import FastAPI

from .orchestrator import run_stub, run_task
from .types import Task

app = FastAPI(title='Agent Orchestra Lab API', version='0.1.0')


@app.get('/health')
def health() -> dict:
    return {'status': 'ok'}


@app.get('/demo')
def demo() -> dict:
    result = run_stub()
    return {
        'status': result.status,
        'retries': result.retries,
        'last_agent': result.last_run.agent if result.last_run else None,
        'evaluation': result.evaluation.__dict__ if result.evaluation else None,
    }


@app.post('/run')
def run(payload: Task) -> dict:
    result = run_task(payload)
    return {
        'status': result.status,
        'retries': result.retries,
        'agent': result.last_run.agent if result.last_run else None,
        'output': result.last_run.output if result.last_run else None,
        'evaluation': result.evaluation.__dict__ if result.evaluation else None,
    }
