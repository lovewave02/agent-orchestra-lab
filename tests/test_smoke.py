from src.orchestrator import run_stub


def test_run_stub():
    assert run_stub().status in ('ok', 'failed')
