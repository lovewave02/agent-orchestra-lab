from __future__ import annotations

import argparse
import json

from .orchestrator import run_task
from .types import Task


def main() -> None:
    parser = argparse.ArgumentParser(description='Agent Orchestra Lab CLI')
    parser.add_argument('--task-id', required=True)
    parser.add_argument('--type', required=True, choices=['summarize', 'qa', 'plan'])
    parser.add_argument('--content', required=True)
    args = parser.parse_args()

    result = run_task(Task(task_id=args.task_id, task_type=args.type, content=args.content))
    print(
        json.dumps(
            {
                'status': result.status,
                'retries': result.retries,
                'agent': result.last_run.agent if result.last_run else None,
                'success_rate': result.evaluation.success_rate if result.evaluation else None,
                'avg_latency_ms': result.evaluation.avg_latency_ms if result.evaluation else None,
                'avg_token_cost': result.evaluation.avg_token_cost if result.evaluation else None,
            },
            ensure_ascii=False,
        )
    )


if __name__ == '__main__':
    main()
