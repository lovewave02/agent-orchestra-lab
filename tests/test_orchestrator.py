from src.orchestrator import run_task
from src.types import Task


def test_route_and_run_plan_task():
    result = run_task(Task(task_id='t-plan-1', task_type='plan', content='Define scope. Build MVP. Add tests.'))
    assert result.status == 'ok'
    assert result.last_run is not None
    assert result.last_run.agent == 'planner'
    assert result.evaluation is not None
    assert result.evaluation.total_runs >= 1


def test_route_and_run_qa_task():
    result = run_task(Task(task_id='t-qa-1', task_type='qa', content='What is the rollback strategy?'))
    assert result.status == 'ok'
    assert result.last_run is not None
    assert result.last_run.agent == 'qa'
