from src.eval import evaluate_runs
from src.types import AgentRun


def test_evaluate_runs_metrics():
    runs = [
        AgentRun('a', 'qa', 'x', True, 10.0, 20),
        AgentRun('b', 'planner', 'y', False, 30.0, 40),
    ]
    r = evaluate_runs(runs)
    assert r.total_runs == 2
    assert r.success_rate == 0.5
    assert r.retry_rate == 0.5
    assert r.avg_latency_ms == 20.0
    assert r.avg_token_cost == 30.0
