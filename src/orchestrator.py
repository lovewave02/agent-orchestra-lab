from dataclasses import dataclass


@dataclass
class RunResult:
    status: str
    retries: int


def run_stub() -> RunResult:
    return RunResult(status="ok", retries=0)
