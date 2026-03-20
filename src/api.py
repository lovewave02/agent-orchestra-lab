from __future__ import annotations

from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.responses import Response

from .eval import evaluate_runs
from .orchestrator import run_stub, run_task
from .store import fetch_runs
from .types import Task

app = FastAPI(title='Agent Orchestra Lab API', version='0.1.0')

package_dir = Path(__file__).resolve().parent
project_root = package_dir.parent
portfolio_web_dir = project_root / 'docs' / 'portfolio-hub'
project_pages_dir = project_root / 'docs' / 'project-pages'
default_web_dir = package_dir / 'web'
web_dir = portfolio_web_dir if portfolio_web_dir.exists() else default_web_dir

PROJECT_PAGE_ALIASES = {
    'city': 'city-signal-twin',
    'city-signal-twin': 'city-signal-twin',
    'chaos': 'edge-chaos-simulator',
    'edge-chaos-simulator': 'edge-chaos-simulator',
    'journal': 'incident-journal',
    'incident-journal': 'incident-journal',
    'local-first-incident-journal': 'incident-journal',
    'gateway': 'mcp-gateway-guard',
    'mcp-gateway-guard': 'mcp-gateway-guard',
    'gateway-guard': 'mcp-gateway-guard',
    'climate': 'climate-memory-map',
    'climate-memory-map': 'climate-memory-map',
    'ocr': 'browser-onnx-ocr-lab',
    'browser-onnx-ocr-lab': 'browser-onnx-ocr-lab',
    'rtc': 'rtc-trust-lens',
    'rtc-trust-lens': 'rtc-trust-lens',
    'agent': 'agent-orchestra-lab',
    'agent-orchestra-lab': 'agent-orchestra-lab',
    'consistency': 'order-payment-consistency-lab',
    'order-consistency': 'order-payment-consistency-lab',
    'order-payment-consistency-lab': 'order-payment-consistency-lab',
}


@app.get('/')
def index() -> FileResponse:
    return FileResponse(web_dir / 'index.html')


@app.head('/')
def index_head() -> Response:
    return Response(status_code=200)


@app.get('/projects/{project_id}')
def project_page(project_id: str) -> FileResponse:
    slug = PROJECT_PAGE_ALIASES.get(project_id, project_id)
    target = (project_pages_dir / f'{slug}.html').resolve()
    if target.exists() and target.is_file() and str(target).startswith(str(project_pages_dir.resolve())):
        return FileResponse(target)
    raise HTTPException(status_code=404, detail='project not found')


@app.get('/resume')
@app.get('/resume/')
def resume_page() -> FileResponse:
    target = (web_dir / 'resume.html').resolve()
    if target.exists() and target.is_file() and str(target).startswith(str(web_dir.resolve())):
        return FileResponse(target)
    raise HTTPException(status_code=404, detail='resume page not found')


@app.get('/legacy-agent')
def legacy_agent_index() -> FileResponse:
    return FileResponse(default_web_dir / 'index.html')


@app.get('/legacy-agent/{asset_path:path}')
def legacy_agent_assets(asset_path: str) -> FileResponse:
    normalized = asset_path.removeprefix('static/')
    safe_path = (default_web_dir / normalized).resolve()
    if safe_path.exists() and safe_path.is_file() and str(safe_path).startswith(str(default_web_dir.resolve())):
        return FileResponse(safe_path)
    raise HTTPException(status_code=404, detail='asset not found')


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


@app.get('/{asset_path:path}')
def static_assets(asset_path: str) -> FileResponse:
    safe_path = (web_dir / asset_path).resolve()
    if safe_path.exists() and safe_path.is_file() and str(safe_path).startswith(str(web_dir.resolve())):
        return FileResponse(safe_path)
    return FileResponse(web_dir / 'index.html')

