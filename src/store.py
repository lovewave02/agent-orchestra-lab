from __future__ import annotations

import sqlite3
from pathlib import Path

from .types import AgentRun

DB_PATH = Path('data/runs.db')


def init_db() -> None:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute(
            '''
            CREATE TABLE IF NOT EXISTS runs (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              task_id TEXT NOT NULL,
              agent TEXT NOT NULL,
              output TEXT NOT NULL,
              success INTEGER NOT NULL,
              latency_ms REAL NOT NULL,
              token_cost INTEGER NOT NULL,
              created_at TEXT NOT NULL DEFAULT (datetime('now'))
            )
            '''
        )
        conn.commit()


def log_run(run: AgentRun) -> None:
    init_db()
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute(
            'INSERT INTO runs (task_id, agent, output, success, latency_ms, token_cost) VALUES (?, ?, ?, ?, ?, ?)',
            (
                run.task_id,
                run.agent,
                run.output,
                1 if run.success else 0,
                run.latency_ms,
                run.token_cost,
            ),
        )
        conn.commit()


def fetch_runs() -> list[AgentRun]:
    init_db()
    with sqlite3.connect(DB_PATH) as conn:
        rows = conn.execute(
            'SELECT task_id, agent, output, success, latency_ms, token_cost FROM runs ORDER BY id ASC'
        ).fetchall()

    return [
        AgentRun(
            task_id=r[0],
            agent=r[1],
            output=r[2],
            success=bool(r[3]),
            latency_ms=float(r[4]),
            token_cost=int(r[5]),
        )
        for r in rows
    ]
