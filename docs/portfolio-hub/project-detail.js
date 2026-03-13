const PROJECT_DETAILS = {
  'edge-chaos-simulator': {
    title: 'Edge Chaos Simulator',
    oneLine: '장애 시나리오별 폴백 전략을 SLO 관점으로 비교하는 운영 검증 도구',
    tags: ['운영 안정화', '시뮬레이션', '폴백 정책', 'SLO'],
    problem: [
      '장애 상황에서 폴백 전략을 경험적으로만 선택하면 성능/비용/성공률 트레이드오프를 설명하기 어렵습니다.',
      '정책 선택 근거를 팀 내에서 공유하려면 실패 주입과 결과 비교를 반복 가능한 형태로 남겨야 합니다.',
    ],
    core: [
      '패킷 손실, 리전 장애, 재시도 폭주 시나리오를 주입하는 시뮬레이션 흐름 구현',
      'fail_open / nearest_healthy / cache_prefer 정책 조합 비교',
      '성공률, p95 지연, 추정 비용, SLO 위반 지표를 Markdown 리포트로 자동 생성',
      '시나리오 실행을 테스트/예제 커맨드로 재현 가능한 형태로 정리',
    ],
    appLabel: 'Edge Chaos App',
    projectTech: 'TypeScript, Node.js, Vitest, Markdown report generator',
    ops: [
      'HTTPS + Reverse Proxy 경로로 데모 노출',
      '컨테이너 단위 서비스 분리로 시뮬레이션 변경 영향 범위 관리',
      '실행 결과를 반복 비교할 수 있도록 입력/출력 구조 유지',
    ],
    evidence: {
      live: '/edge-chaos-simulator',
      architecture: '/projects/edge-chaos-simulator#architecture',
      screens: '/projects/edge-chaos-simulator#screens',
      github: 'https://github.com/lovewave02/edge-chaos-simulator',
      updated: '2026-03-12',
    },
    hiringProof:
      '이 프로젝트는 운영 안정화 / 장애 영향도 분석 / 예외 처리 정책 / 의사결정 근거화 역량을 증명하기 위한 실험이자 운영형 데모입니다.',
  },
  'incident-journal': {
    title: 'Local-First Incident Journal',
    oneLine: '장애 대응 기록을 구조화하고 포스트모템 초안을 빠르게 만드는 운영 기록 도구',
    tags: ['운영 기록', 'RCA 보조', '포스트모템', 'Local-first'],
    problem: [
      '장애 대응 중에는 타임라인과 판단 근거가 여러 채널에 흩어져 사후 분석이 지연됩니다.',
      '기록 체계가 없으면 RCA와 재발 방지 액션이 개인 기억에 의존하게 됩니다.',
    ],
    core: [
      '이벤트 타임라인 중심으로 기록하는 로컬 저널 모델 구현',
      'Lamport 기반 병합 로직으로 동시 수정 충돌 처리 흐름 설계',
      '포스트모템 Markdown 초안 자동 생성기 구현',
      '테스트 코드를 통해 기록-병합-문서화 경로를 재현 가능하게 검증',
    ],
    appLabel: 'Incident Journal App',
    projectTech: 'TypeScript, local-first event model, merge logic, markdown generator, Vitest',
    ops: [
      '운영 대응 시 빠른 기록을 위한 로컬 우선 구조 유지',
      '기록 산출물을 문서로 바로 전환해 운영 커뮤니케이션 지연 감소',
      'Reverse Proxy 경로로 데모 접근 경로 단순화',
    ],
    evidence: {
      live: '/local-first-incident-journal',
      architecture: '/projects/incident-journal#architecture',
      screens: '/projects/incident-journal#screens',
      github: 'https://github.com/lovewave02/local-first-incident-journal',
      updated: '2026-03-12',
    },
    hiringProof:
      '이 프로젝트는 RCA 구조화 / 포스트모템 체계화 / 운영 문서화 / 대응 프로세스 개선 역량을 증명하기 위한 운영형 데모입니다.',
  },
  'mcp-gateway-guard': {
    title: 'MCP Gateway Guard',
    oneLine: '도구 호출을 정책 기반으로 허용/차단하고 감사 로그를 남기는 게이트웨이',
    tags: ['정책 제어', '감사 로그', '운영 거버넌스', 'AI 도구화'],
    problem: [
      '툴 호출 범위가 통제되지 않으면 운영/보안 리스크가 빠르게 커질 수 있습니다.',
      '의사결정 로그가 없으면 누가 어떤 호출을 허용/차단했는지 추적하기 어렵습니다.',
    ],
    core: [
      'Allow/Deny 정책 엔진으로 호출 허용 범위 제어',
      '호출 요청 시 actor/tool/decision/reason 단위 감사 로그 기록',
      '정책 상태와 감사 내역을 확인하는 운영용 UI 구성',
      '정책 위반 흐름을 재현 가능한 데모 경로로 정리',
    ],
    appLabel: 'Gateway Guard App',
    projectTech: 'Python, FastAPI, policy engine, audit logging, HTML/CSS/JavaScript UI',
    ops: [
      'Reverse Proxy + TLS 환경에서 정책 제어 엔드포인트 운영',
      '컨테이너 단위 분리로 가드 서비스 롤백/재배포 단위 명확화',
      '감사 로그를 통해 운영 이슈 분석 시 추적성 확보',
    ],
    evidence: {
      live: '/gateway-guard',
      architecture: '/projects/mcp-gateway-guard#architecture',
      screens: '/projects/mcp-gateway-guard#screens',
      github: 'https://github.com/lovewave02/mcp-gateway-guard',
      updated: '2026-03-12',
    },
    hiringProof:
      '이 프로젝트는 정책 기반 제어 / 감사 로그 설계 / 운영 거버넌스 / AI 도구 제어 역량을 증명하기 위한 운영형 데모입니다.',
  },
  'city-signal-twin': {
    title: 'City Signal Twin',
    oneLine: '도시 신호를 통합해 우선 대응 지점을 가시화하는 미니 디지털 트윈',
    tags: ['데이터 통합', '운영 대시보드', '우선순위화', 'FastAPI'],
    problem: [
      '교통/대기/기상 신호가 분리되어 있으면 운영 우선순위를 빠르게 정하기 어렵습니다.',
      '지표를 통합하지 않으면 대응 근거가 담당자별 경험치에 의존하게 됩니다.',
    ],
    core: [
      'FastAPI 기반 신호 통합 API와 스트레스 지수 계산 모델 구현',
      'hotspots/trend API를 통해 운영 지표 조회 경로 설계',
      '지도 + 리스트 + 트렌드를 결합한 운영 대시보드 구성',
      '테스트 코드로 지표 계산/응답 품질을 검증 가능한 형태로 유지',
    ],
    appLabel: 'City Signal App',
    projectTech: 'Python, FastAPI, MapLibre dashboard, synthetic signal simulator, pytest',
    ops: [
      '상시 데모 경로 유지로 지표 기반 의사결정 흐름 시연 가능',
      '컨테이너 분리/Reverse Proxy 구조로 서비스 영향 범위 관리',
      'API/화면 분리로 운영 시나리오 점검',
    ],
    evidence: {
      live: '/city-signal-twin',
      architecture: '/projects/city-signal-twin#architecture',
      screens: '/projects/city-signal-twin#screens',
      github: 'https://github.com/lovewave02/city-signal-twin',
      updated: '2026-03-12',
    },
    hiringProof:
      '이 프로젝트는 운영 지표 통합 / API 설계 / 데이터 기반 우선순위화 역량을 증명하기 위한 운영형 데모입니다.',
  },
  'climate-memory-map': {
    title: 'Climate Memory Map',
    oneLine: '기록 이벤트를 저장·조회하며 시간축으로 보여주는 데이터 실험',
    tags: ['데이터 저장', '기록 조회', 'FastAPI', 'SQLite'],
    problem: [
      '개인 기록 이벤트가 흩어지면 변화 흐름을 빠르게 파악하기 어렵습니다.',
      '기록 구조가 약하면 분석/시각화 확장이 어렵습니다.',
    ],
    core: [
      '이벤트 수집 API와 조회 API를 분리해 데이터 흐름 단순화',
      'SQLite 기반 저장 구조로 데이터 지속성 확보',
      '시간 구간 기반 집계 로직으로 변화 흐름 확인 가능하도록 구성',
      '기록-조회 루프가 반복되도록 테스트 가능한 API 경로 유지',
    ],
    appLabel: 'Climate Memory App',
    projectTech: 'Python, FastAPI, SQLite, event ingestion API, metrics endpoint',
    ops: [
      '데이터와 화면 경로를 분리해 운영 점검 범위 명확화',
      'Reverse Proxy 경로에서 HTTPS 적용',
      '작은 변경도 운영 시나리오로 검증하는 루프 유지',
    ],
    evidence: {
      live: '/climate-memory-map',
      architecture: '/projects/climate-memory-map#architecture',
      screens: '/projects/climate-memory-map#screens',
      github: 'https://github.com/lovewave02/context-switch-radar',
      updated: '2026-03-12',
    },
    hiringProof:
      '이 프로젝트는 데이터 모델링 / 저장-조회 API 설계 / 운영 검증 루프 역량을 증명하기 위한 운영형 데모입니다.',
  },
  'browser-onnx-ocr-lab': {
    title: 'Browser ONNX OCR Lab',
    oneLine: '브라우저에서 전처리 파이프라인별 OCR 품질·지연을 비교하는 실험 도구',
    tags: ['브라우저 추론', '전처리 파이프라인', '성능 비교', 'TypeScript'],
    problem: [
      'OCR 파이프라인은 정확도와 속도의 균형이 중요하지만, 정량 비교가 없으면 튜닝 근거가 약합니다.',
      '실험 결과가 즉시 보이지 않으면 운영 환경 적용 판단이 늦어집니다.',
    ],
    core: [
      'raw/grayscale/binary 3개 전처리 파이프라인 비교 UI 구현',
      '파이프라인별 추론 결과/신뢰도/지연 시간 동시 표시',
      '브라우저 단독 실행 구조로 백엔드 의존성 없이 실험 가능하도록 구성',
      '전처리/추론 래퍼 테스트로 비교 로직 회귀 방지',
    ],
    appLabel: 'OCR Lab App',
    projectTech: 'TypeScript, Vite, browser-side OCR pipeline, preprocessing utilities, tests',
    ops: [
      '실험 결과를 UI에서 즉시 비교해 운영 의사결정 속도 향상',
      'Reverse Proxy 경로로 데모 접근 통일',
      '경량 프론트엔드 서비스 분리로 배포 단위 명확화',
    ],
    evidence: {
      live: '/browser-onnx-ocr-lab',
      architecture: '/projects/browser-onnx-ocr-lab#architecture',
      screens: '/projects/browser-onnx-ocr-lab#screens',
      github: 'https://github.com/lovewave02/browser-onnx-ocr-lab',
      updated: '2026-03-12',
    },
    hiringProof:
      '이 프로젝트는 AI 도구화 / 성능 측정 / 운영 적용 판단 근거화 역량을 증명하기 위한 운영형 데모입니다.',
  },
  'rtc-trust-lens': {
    title: 'RTC Trust Lens',
    oneLine: '실시간 통신 품질 지표를 수집해 신뢰도 상태를 분류하는 관측 도구',
    tags: ['실시간 관측', 'WebRTC', '신뢰도 점수', '품질 진단'],
    problem: [
      '실시간 통신 장애는 체감으로만 판단하면 원인 분리가 어렵습니다.',
      'jitter/loss/bitrate 같은 지표를 운영자가 빠르게 읽을 수 있어야 대응 품질이 높아집니다.',
    ],
    core: [
      'WebSocket signaling + 브라우저 1:1 통신 흐름 구성',
      'getStats 기반 jitter/loss/bitrate 수집 및 trust score 계산',
      'ok/warning/critical 상태 분류 로직으로 대응 기준 제시',
      '지표 계산 테스트 코드로 분류 로직 품질 유지',
    ],
    appLabel: 'RTC Trust App',
    projectTech: 'Node.js, WebRTC, WebSocket signaling, JavaScript metrics pipeline, tests',
    ops: [
      '실시간 지표 수집으로 품질 저하 시점 추적',
      'Reverse Proxy + HTTPS 경로에서 데모 운영',
      '서비스 분리로 실시간 기능 변경 영향 범위 최소화',
    ],
    evidence: {
      live: '/rtc-trust-lens',
      architecture: '/projects/rtc-trust-lens#architecture',
      screens: '/projects/rtc-trust-lens#screens',
      github: 'https://github.com/lovewave02/rtc-trust-lens',
      updated: '2026-03-12',
    },
    hiringProof:
      '이 프로젝트는 관측성 설계 / 실시간 품질 진단 / 지표 기반 대응 역량을 증명하기 위한 운영형 데모입니다.',
  },
  'agent-orchestra-lab': {
    title: 'Agent Orchestra Lab',
    oneLine: '멀티 에이전트 실행 라우팅과 로그/성공률/지연/비용을 운영 루프로 관리',
    tags: ['AI 도구화', '실행 라우팅', '운영 관측성', '평가 지표'],
    problem: [
      '멀티 에이전트 실행은 결과 품질/비용/지연을 수치로 남기지 않으면 개선 루프가 끊깁니다.',
      '운영 환경에서 어떤 요청이 어떤 에이전트로 라우팅됐는지 추적 가능해야 안정적인 확장이 가능합니다.',
    ],
    core: [
      'task type 기반 supervisor 라우터 구현',
      '실행 로그를 SQLite에 구조화 저장',
      '성공률/평균 지연/평균 토큰 비용/재시도율 평가 로직 구현',
      'CLI + API 형태로 재현 가능한 실행 경로 구성',
    ],
    appLabel: 'Agent Orchestra App',
    projectTech: 'Python, FastAPI, SQLite, routing orchestrator, evaluation pipeline',
    ops: [
      'Reverse Proxy + TLS 환경에서 상시 데모 운영',
      '실행 로그와 지표를 분리 저장해 추적성 확보',
      '컨테이너 분리 배포로 기능별 재시작/검증 단위 명확화',
    ],
    evidence: {
      live: '/legacy-agent',
      architecture: '/projects/agent-orchestra-lab#architecture',
      screens: '/projects/agent-orchestra-lab#screens',
      github: 'https://github.com/lovewave02/agent-orchestra-lab',
      updated: '2026-03-12',
    },
    hiringProof:
      '이 프로젝트는 AI 도구 실행 흐름 제어 / 운영 로그 설계 / 비용·성능 트레이드오프 관리 역량을 증명하기 위한 운영형 데모입니다.',
  },
};

const CORE_WORK_STACK = 'Java, Spring Framework / Spring Boot, MyBatis, REST API, Oracle / MariaDB / PostgreSQL / MySQL, Linux, AWS, Jenkins, ArgoCD';

const slug = document.body.dataset.projectSlug || '';
const project = PROJECT_DETAILS[slug];

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (!node) return;
  node.textContent = value;
}

function renderList(selector, items) {
  const node = document.querySelector(selector);
  if (!node) return;
  node.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
}

function renderProblem(items) {
  const node = document.querySelector('#problemBody');
  if (!node) return;
  node.innerHTML = items.map((line) => `<p>${line}</p>`).join('');
}

function renderBadges(tags) {
  const node = document.querySelector('#tagBadges');
  if (!node) return;
  node.innerHTML = tags.map((tag) => `<span class="badge">${tag}</span>`).join('');
}

function renderArchitecture(appLabel) {
  const node = document.querySelector('#architectureDiagram');
  if (!node) return;

  node.innerHTML = `
    <svg viewBox="0 0 860 220" role="img" aria-label="architecture diagram">
      <rect x="18" y="80" width="160" height="60" rx="10" fill="#213246" stroke="#77a0c5" />
      <text x="98" y="116" text-anchor="middle" fill="#eaf4ff" font-size="14">User / Browser</text>

      <rect x="230" y="80" width="180" height="60" rx="10" fill="#24394a" stroke="#85b4d0" />
      <text x="320" y="116" text-anchor="middle" fill="#eaf4ff" font-size="14">Reverse Proxy</text>

      <rect x="470" y="80" width="170" height="60" rx="10" fill="#24453f" stroke="#7ad0b7" />
      <text x="555" y="116" text-anchor="middle" fill="#edfff8" font-size="14">${appLabel}</text>

      <rect x="690" y="46" width="150" height="54" rx="10" fill="#35345d" stroke="#a6a8df" />
      <text x="765" y="78" text-anchor="middle" fill="#f1f2ff" font-size="14">Data Store</text>

      <rect x="690" y="120" width="150" height="54" rx="10" fill="#4a3554" stroke="#cf97de" />
      <text x="765" y="152" text-anchor="middle" fill="#fff0ff" font-size="14">Logs / Audit</text>

      <line x1="178" y1="110" x2="230" y2="110" stroke="#9ec1dd" stroke-width="2" marker-end="url(#arrow)" />
      <line x1="410" y1="110" x2="470" y2="110" stroke="#9ec1dd" stroke-width="2" marker-end="url(#arrow)" />
      <line x1="640" y1="102" x2="690" y2="76" stroke="#9ec1dd" stroke-width="2" marker-end="url(#arrow)" />
      <line x1="640" y1="118" x2="690" y2="146" stroke="#9ec1dd" stroke-width="2" marker-end="url(#arrow)" />

      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#9ec1dd"></polygon>
        </marker>
      </defs>
    </svg>
  `;
}

function renderEvidence(evidence) {
  const links = document.querySelector('#evidenceLinks');
  if (links) {
    links.innerHTML = `
      <a class="primary" href="${evidence.live}" target="_blank" rel="noreferrer">Live Demo</a>
      <a href="${evidence.screens}">Screenshots</a>
      <a href="${evidence.architecture}">Architecture</a>
      <a href="${evidence.github}" target="_blank" rel="noreferrer">GitHub / Code Sample</a>
    `;
  }

  setText('#lastUpdated', evidence.updated);
}

function renderPage(detail) {
  document.title = `${detail.title} | 차동운 포트폴리오`;
  setText('#projectTitle', detail.title);
  setText('#projectOneLine', detail.oneLine);
  renderBadges(detail.tags);
  renderProblem(detail.problem);
  renderList('#coreList', detail.core);
  renderArchitecture(detail.appLabel);
  setText('#projectTech', detail.projectTech);
  setText('#coreWorkStack', CORE_WORK_STACK);
  renderList('#opsList', detail.ops);
  renderEvidence(detail.evidence);
  setText('#hiringProof', detail.hiringProof);
}

if (!project) {
  setText('#projectTitle', '프로젝트를 찾을 수 없습니다.');
  setText('#projectOneLine', '요청한 상세 페이지 정보가 없습니다. 홈으로 돌아가 다시 선택해 주세요.');
  document.querySelectorAll('.section').forEach((section) => {
    section.remove();
  });
} else {
  renderPage(project);
}
