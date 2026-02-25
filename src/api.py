from __future__ import annotations

from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.responses import Response
from fastapi.staticfiles import StaticFiles

from .eval import evaluate_runs
from .orchestrator import run_stub, run_task
from .store import fetch_runs
from .types import Task

app = FastAPI(title='Agent Orchestra Lab API', version='0.1.0')
web_dir = Path(__file__).resolve().parent / 'web'
app.mount('/static', StaticFiles(directory=web_dir), name='static')


@app.get('/')
def index() -> FileResponse:
    return FileResponse(web_dir / 'index.html')


@app.head('/')
def index_head() -> Response:
    return Response(status_code=200)


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


@app.get('/stats')
def stats() -> dict:
    eval_result = evaluate_runs(fetch_runs())
    return {
        'evaluation': eval_result.__dict__,
        'totalRuns': eval_result.total_runs,
    }


@app.get('/runs')
def runs(limit: int = 20) -> dict:
    safe_limit = max(1, min(100, limit))
    rows = fetch_runs()
    recent = rows[-safe_limit:][::-1]
    return {
        'count': len(recent),
        'items': [
            {
                'taskId': r.task_id,
                'agent': r.agent,
                'success': r.success,
                'latencyMs': r.latency_ms,
                'tokenCost': r.token_cost,
                'createdAt': r.created_at,
                'output': r.output,
            }
            for r in recent
        ],
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
