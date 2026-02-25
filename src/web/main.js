const taskIdInput = document.querySelector('#taskId');
const taskTypeInput = document.querySelector('#taskType');
const contentInput = document.querySelector('#content');
const runButton = document.querySelector('#runButton');
const sampleButton = document.querySelector('#sampleButton');
const statusText = document.querySelector('#status');
const lastOutput = document.querySelector('#lastOutput');
const statsNode = document.querySelector('#stats');
const historyBody = document.querySelector('#historyBody');

function makeTaskId() {
  return `task-${Date.now()}`;
}

function asPercent(value) {
  return `${(Number(value) * 100).toFixed(1)}%`;
}

function renderStats(evaluation) {
  if (!evaluation) {
    statsNode.innerHTML = '<p>데이터가 없습니다.</p>';
    return;
  }

  const items = [
    ['총 실행 수', evaluation.total_runs],
    ['성공률', asPercent(evaluation.success_rate)],
    ['평균 지연', `${evaluation.avg_latency_ms} ms`],
    ['평균 토큰비용', evaluation.avg_token_cost],
    ['재시도율', asPercent(evaluation.retry_rate)]
  ];

  statsNode.innerHTML = items
    .map(
      ([label, value]) =>
        `<div class="metric"><div class="label">${label}</div><div class="value">${value}</div></div>`
    )
    .join('');
}

function renderHistory(rows) {
  if (!rows.length) {
    historyBody.innerHTML = '<tr><td colspan="6" class="empty">실행 이력이 없습니다.</td></tr>';
    return;
  }

  historyBody.innerHTML = rows
    .map(
      (row) => `
      <tr>
        <td>${row.createdAt}</td>
        <td>${row.taskId}</td>
        <td>${row.agent}</td>
        <td>${row.success ? '성공' : '실패'}</td>
        <td>${Number(row.latencyMs).toFixed(2)}</td>
        <td>${row.tokenCost}</td>
      </tr>
    `
    )
    .join('');
}

async function refreshDashboard() {
  const [statsRes, runsRes] = await Promise.all([fetch('/stats'), fetch('/runs?limit=20')]);
  if (!statsRes.ok || !runsRes.ok) {
    throw new Error('대시보드 로드 실패');
  }
  const stats = await statsRes.json();
  const runs = await runsRes.json();
  renderStats(stats.evaluation);
  renderHistory(runs.items ?? []);
}

async function runTask() {
  runButton.disabled = true;
  statusText.textContent = '실행 중...';

  const payload = {
    task_id: taskIdInput.value.trim() || makeTaskId(),
    task_type: taskTypeInput.value,
    content: contentInput.value.trim()
  };

  if (!payload.content) {
    statusText.textContent = '작업 내용을 입력해 주세요.';
    runButton.disabled = false;
    return;
  }

  try {
    const res = await fetch('/run', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();
    lastOutput.textContent = data.output || '(출력 없음)';
    renderStats(data.evaluation);
    await refreshDashboard();
    statusText.textContent = `완료: ${data.agent} 에이전트가 처리했습니다.`;
    taskIdInput.value = payload.task_id;
  } catch (error) {
    statusText.textContent = `오류: ${error instanceof Error ? error.message : 'unknown'}`;
  } finally {
    runButton.disabled = false;
  }
}

function fillSample() {
  taskIdInput.value = makeTaskId();
  taskTypeInput.value = 'plan';
  contentInput.value = '사용자 피드백 수집. 장애 패턴 분석. 우선순위 정의. 릴리즈 계획 수립.';
  statusText.textContent = '예시 입력 완료';
}

runButton.addEventListener('click', runTask);
sampleButton.addEventListener('click', fillSample);

taskIdInput.value = makeTaskId();
refreshDashboard().catch(() => {
  statusText.textContent = '대시보드 초기 로드 실패';
});
