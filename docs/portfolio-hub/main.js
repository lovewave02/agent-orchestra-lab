const MODE_CONFIG = {
  a: {
    key: 'a',
    label: '서비스 백엔드',
    subtitle: '개발경력 5년(2021.03~) · Java/Spring · REST API · RDBMS · 운영 안정화',
    summary: '서비스 백엔드 채용 관점에서 API 설계, 장애 대응, 운영 안정화 역량이 바로 보이도록 대표 프로젝트를 배치했습니다.',
    flagshipOrder: ['edge-chaos-simulator', 'incident-journal', 'mcp-gateway-guard'],
  },
  b: {
    key: 'b',
    label: '솔루션/플랫폼',
    subtitle: '개발경력 5년(2021.03~) · 운영 안정화 · 영향도 분석 · 배포 품질 · 솔루션/플랫폼',
    summary: '솔루션/플랫폼 포지션 기준으로 정책 제어, 영향도 분석, 운영형 거버넌스 실험 사례를 우선 노출합니다.',
    flagshipOrder: ['mcp-gateway-guard', 'edge-chaos-simulator', 'city-signal-twin'],
  },
  c: {
    key: 'c',
    label: 'AI 연착륙',
    subtitle: '개발경력 5년(2021.03~) · Java/Spring 백엔드 기반 AI 도구화 · 정책 제어 · 운영 자동화',
    summary: 'AI 도구를 안전하게 운영 환경에 붙이는 관점에서 정책 제어, 실행 라우팅, 브라우저 추론 실험을 중심으로 구성했습니다.',
    flagshipOrder: ['mcp-gateway-guard', 'agent-orchestra-lab', 'browser-onnx-ocr-lab'],
  },
};

const HERO_BASE_COPY = [
  '공공/SI 환경에서 구축과 운영을 함께 경험하며, 실제 운영 장애를 분석하고 재발 방지 로직을 설계해온 백엔드 개발자입니다.',
  'Java/Spring, API/DB 중심 서버 개발을 기반으로 영향도 분석과 운영 시나리오 검증을 통해 안전한 릴리즈를 만드는 데 강점이 있습니다.',
  '이 포트폴리오는 말보다 증거를 보여주기 위해 상시 운영 데모, 실무 하이라이트, 아키텍처/운영 근거 중심으로 구성했습니다.',
];

const WORK_HIGHLIGHTS = [
  {
    name: 'LG전자 CSMS 2.0 모바일 개발',
    period: '2025.03 ~ 2025.12',
    role: '리드 개발자',
    tech: 'Linux, AWS, ArgoCD, Jenkins, GitLab, Java, React, TypeScript',
    points: [
      '프로젝트 구조/개발 방식 재편',
      '공통 모듈/유틸 정리',
      'MR 리뷰/브랜치·배포 프로세스 정착',
      'CI/CD 연동 대응',
    ],
    proof: '대규모 협업, 구조 개선, 배포 프로세스 표준화, 품질 일관성 확보',
  },
  {
    name: 'LG전자 다이렉트청약 2.0 리뉴얼',
    period: '2024.04 ~ 2024.06',
    role: '리드 개발자',
    tech: 'Linux, NCD, Nexacro, BizActor',
    points: [
      '문제점 정리 및 요구사항 분해',
      '일정/리스크 관리',
      '영향도 분석 및 예외 케이스 보강',
      '운영 시나리오 기반 검증 체계 수립',
    ],
    proof: '영향도 분석, 예외 처리 설계, 안전한 릴리즈, 품질 기준 수립',
  },
  {
    name: 'LG전자 다이렉트청약 SM',
    period: '2023.12 ~ 2024.03',
    role: '리드 개발자',
    tech: 'Linux, Java, Tomcat, JavaScript, Nginx, GitLab, JIRA',
    points: [
      '운영 장애 RCA',
      '재발 방지(검증/예외 처리 강화)',
      '배포 커뮤니케이션 및 이슈 관리',
    ],
    proof: '운영 안정화, 재발 방지, 장애 대응, 배포 커뮤니케이션',
  },
];

const PROJECTS = {
  'edge-chaos-simulator': {
    slug: 'edge-chaos-simulator',
    name: 'Edge Chaos Simulator',
    oneLine: '장애 시나리오별 폴백 전략을 SLO 관점으로 비교하는 운영 검증 도구',
    problem: '장애 상황에서 폴백 전략을 감으로 선택하면 운영 리스크가 커진다.',
    core: ['실패 주입 시나리오', '정책 조합 비교', '자동 리포트 생성'],
    ops: ['상시 운영 가능한 시뮬레이션 구조', '정책 결과를 반복 검증 가능한 형태로 유지'],
    hiringProof: '운영 안정화, 장애 영향도 분석, 예외 처리 정책, 의사결정 근거화',
    demoUrl: '/edge-chaos-simulator',
    detailUrl: '/projects/edge-chaos-simulator',
    github: 'https://github.com/lovewave02/edge-chaos-simulator',
  },
  'incident-journal': {
    slug: 'incident-journal',
    name: 'Local-First Incident Journal',
    oneLine: '장애 대응 기록을 구조화하고 포스트모템 초안을 빠르게 만드는 운영 기록 도구',
    problem: '장애 대응 중 타임라인과 판단 근거가 흩어져 사후 분석이 느려진다.',
    core: ['타임라인/이벤트 기록 템플릿', '포스트모템 Markdown 초안 생성', '로컬 우선 저장 방식'],
    ops: ['운영 기록을 가볍고 빠르게 남길 수 있는 UX', '사후 분석 문서화 자동화'],
    hiringProof: 'RCA 구조화, 포스트모템 체계화, 운영 문서화, 대응 프로세스 개선',
    demoUrl: '/local-first-incident-journal',
    detailUrl: '/projects/incident-journal',
    github: 'https://github.com/lovewave02/local-first-incident-journal',
  },
  'mcp-gateway-guard': {
    slug: 'mcp-gateway-guard',
    name: 'MCP Gateway Guard',
    oneLine: '도구 호출을 정책 기반으로 허용/차단하고 감사 로그를 남기는 게이트웨이',
    problem: '도구 사용 범위와 감사 추적성이 없으면 운영/보안 리스크가 커진다.',
    core: ['Allow/Deny 정책 엔진', 'Audit 이벤트 조회', '호출 통제 흐름'],
    ops: ['정책 제어와 추적 가능성 강화', '운영형 거버넌스 실험'],
    hiringProof: '정책 기반 제어, 감사 로그 설계, 운영 거버넌스, AI 도구 제어',
    demoUrl: '/gateway-guard',
    detailUrl: '/projects/mcp-gateway-guard',
    github: 'https://github.com/lovewave02/mcp-gateway-guard',
  },
  'city-signal-twin': {
    slug: 'city-signal-twin',
    name: 'City Signal Twin',
    oneLine: '도시 신호를 통합해 우선 대응 지점을 가시화하는 미니 디지털 트윈',
    problem: '운영 의사결정 시 신호가 분산되어 우선순위 판단이 늦어진다.',
    core: ['FastAPI 기반 신호 통합 API', 'Hotspot/Trend 시각화', '스트레스 지수 모델링'],
    ops: ['지도/지표를 동시에 보는 운영 대시보드', '지표 기준 대응 우선순위 검증'],
    hiringProof: '데이터 기반 우선순위화, 운영 지표 통합, API 설계',
    demoUrl: '/city-signal-twin',
    detailUrl: '/projects/city-signal-twin',
    github: 'https://github.com/lovewave02/city-signal-twin',
  },
  'climate-memory-map': {
    slug: 'climate-memory-map',
    name: 'Climate Memory Map',
    oneLine: '기록 이벤트를 저장·조회하며 시간축으로 보여주는 데이터 실험',
    problem: '개인 기록 데이터가 흩어지면 추세를 확인하기 어렵다.',
    core: ['이벤트 수집 API', 'SQLite 저장 구조', '기간별 조회/요약 흐름'],
    ops: ['데이터 지속성 분리', '기록-조회 루프 운영'],
    hiringProof: '데이터 모델링, API 기반 백엔드 흐름 설계',
    demoUrl: '/climate-memory-map',
    detailUrl: '/projects/climate-memory-map',
    github: 'https://github.com/lovewave02/context-switch-radar',
  },
  'browser-onnx-ocr-lab': {
    slug: 'browser-onnx-ocr-lab',
    name: 'Browser ONNX OCR Lab',
    oneLine: '브라우저에서 전처리 파이프라인별 OCR 품질·지연을 비교하는 실험 도구',
    problem: 'OCR 품질을 감각적으로만 튜닝하면 속도/정확도 균형을 잡기 어렵다.',
    core: ['raw/grayscale/binary 파이프라인 비교', '지연/신뢰도 동시 측정', '브라우저 단독 실행 구조'],
    ops: ['전처리 선택 근거를 수치화', '실험 결과 비교를 반복 가능하게 유지'],
    hiringProof: '실험 자동화, 성능 측정, AI 도구 운영화',
    demoUrl: '/browser-onnx-ocr-lab',
    detailUrl: '/projects/browser-onnx-ocr-lab',
    github: 'https://github.com/lovewave02/browser-onnx-ocr-lab',
  },
  'rtc-trust-lens': {
    slug: 'rtc-trust-lens',
    name: 'RTC Trust Lens',
    oneLine: '실시간 통신 품질 지표를 수집해 신뢰도 상태를 분류하는 관측 도구',
    problem: '실시간 품질 이슈를 수치로 보지 못하면 대응 우선순위가 흔들린다.',
    core: ['WebRTC getStats 수집', 'jitter/loss/bitrate 기반 점수화', '신뢰도 상태 분류'],
    ops: ['실시간 품질 이슈 가시화', '관측 지표 기반 점검 루프'],
    hiringProof: '관측성 설계, 실시간 지표 해석, 장애 징후 감지',
    demoUrl: '/rtc-trust-lens',
    detailUrl: '/projects/rtc-trust-lens',
    github: 'https://github.com/lovewave02/rtc-trust-lens',
  },
  'agent-orchestra-lab': {
    slug: 'agent-orchestra-lab',
    name: 'Agent Orchestra Lab',
    oneLine: '멀티 에이전트 실행 라우팅과 로그/성공률/지연/비용을 운영 루프로 관리',
    problem: '에이전트 실행 결과가 누적되지 않으면 품질 개선이 어렵다.',
    core: ['Supervisor 라우팅', 'SQLite 실행 로그', '성공률/지연/비용 평가'],
    ops: ['실행 로그 기반 회고', '품질 지표 중심 반복 개선'],
    hiringProof: 'AI 도구 실행 흐름 제어, 운영 관측성, 비용/성능 트레이드오프 관리',
    demoUrl: '/legacy-agent',
    detailUrl: '/projects/agent-orchestra-lab',
    github: 'https://github.com/lovewave02/agent-orchestra-lab',
  },
};

const ADDITIONAL_PROJECT_KEYS = [
  'city-signal-twin',
  'climate-memory-map',
  'browser-onnx-ocr-lab',
  'rtc-trust-lens',
  'agent-orchestra-lab',
];

const dom = {
  modeButtons: document.querySelector('#modeButtons'),
  heroSubtitle: document.querySelector('#heroSubtitle'),
  heroCopy: document.querySelector('#heroCopy'),
  heroActions: document.querySelector('#heroActions'),
  workCards: document.querySelector('#workCards'),
  flagshipCards: document.querySelector('#flagshipCards'),
  flagshipIntro: document.querySelector('#flagshipIntro'),
  additionalList: document.querySelector('#additionalList'),
  lastUpdated: document.querySelector('#lastUpdated'),
};

function getModeFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get('mode') || 'a';
  return MODE_CONFIG[mode] ? mode : 'a';
}

function setModeInUrl(mode) {
  const params = new URLSearchParams(window.location.search);
  params.set('mode', mode);
  const next = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, '', next);
}

function renderModeButtons(activeMode) {
  dom.modeButtons.innerHTML = Object.values(MODE_CONFIG)
    .map(
      (mode) =>
        `<button class="mode-btn ${mode.key === activeMode ? 'active' : ''}" data-mode="${mode.key}" type="button">${mode.label}</button>`
    )
    .join('');

  dom.modeButtons.querySelectorAll('.mode-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const mode = button.dataset.mode;
      if (!mode || !MODE_CONFIG[mode]) return;
      setModeInUrl(mode);
      render(mode);
    });
  });
}

function renderHero(mode) {
  const config = MODE_CONFIG[mode];
  dom.heroSubtitle.textContent = config.subtitle;
  dom.heroCopy.innerHTML = HERO_BASE_COPY.map((line) => `<p>${line}</p>`).join('');

  const links = [
    { label: '대표 프로젝트 보기', href: '#flagship-projects', type: 'solid' },
    { label: '실무 하이라이트 보기', href: '#work-highlights', type: 'line' },
    { label: '이력서 PDF', href: '/resume', type: 'line' },
    { label: 'GitHub', href: 'https://github.com/lovewave02', type: 'line', target: '_blank' },
    { label: '이메일 문의', href: 'mailto:lovewave02@gmail.com', type: 'line' },
  ];

  dom.heroActions.innerHTML = links
    .map((link) => {
      const className = link.type === 'solid' ? 'btn-solid' : 'btn-line';
      const target = link.target ? ' target="_blank" rel="noreferrer"' : '';
      return `<a class="${className}" href="${link.href}"${target}>${link.label}</a>`;
    })
    .join('');
}

function renderWorkHighlights() {
  dom.workCards.innerHTML = WORK_HIGHLIGHTS.map(
    (item) => `
      <article class="work-card">
        <h3>${item.name}</h3>
        <div class="work-meta">
          <p><strong>기간:</strong> ${item.period}</p>
          <p><strong>역할:</strong> ${item.role}</p>
          <p><strong>기술:</strong> ${item.tech}</p>
        </div>
        <ul>${item.points.map((point) => `<li>${point}</li>`).join('')}</ul>
        <p class="work-proof"><strong>이 프로젝트가 증명하는 것:</strong> ${item.proof}</p>
      </article>
    `
  ).join('');
}

function renderFlagship(mode) {
  const config = MODE_CONFIG[mode];
  const projects = config.flagshipOrder.map((key) => PROJECTS[key]).filter(Boolean);

  dom.flagshipIntro.textContent = `${config.summary} 실제로 동작하는 데모와 운영 근거를 통해, 백엔드/운영/정책 제어 역량을 증명합니다.`;

  dom.flagshipCards.innerHTML = projects
    .map(
      (project) => `
      <article class="flagship-card">
        <h3>${project.name}</h3>
        <p class="summary">${project.oneLine}</p>

        <p class="label">해결한 문제</p>
        <p>${project.problem}</p>

        <p class="label">내가 만든 핵심</p>
        <ul>${project.core.map((item) => `<li>${item}</li>`).join('')}</ul>

        <p class="label">운영/배포 포인트</p>
        <ul>${project.ops.map((item) => `<li>${item}</li>`).join('')}</ul>

        <p class="label">이 프로젝트가 증명하는 채용 역량</p>
        <p>${project.hiringProof}</p>

        <div class="flagship-actions">
          <a class="primary" href="${project.demoUrl}" target="_blank" rel="noreferrer">Demo</a>
          <a href="${project.detailUrl}#architecture">Architecture</a>
          <a href="${project.detailUrl}#screens">Screens</a>
          <a href="${project.detailUrl}">상세 보기</a>
        </div>
      </article>
    `
    )
    .join('');
}

function renderAdditional(mode) {
  const promoted = new Set(MODE_CONFIG[mode].flagshipOrder);

  dom.additionalList.innerHTML = ADDITIONAL_PROJECT_KEYS.map((key) => {
    const project = PROJECTS[key];
    if (!project) return '';
    const promotedChip = promoted.has(key) ? '<span class="mode-chip">현재 모드 대표 프로젝트</span>' : '';

    return `
      <article class="additional-item">
        <div class="additional-top">
          <h3>${project.name}</h3>
          ${promotedChip}
        </div>
        <p>${project.oneLine}</p>
        <p class="additional-proof"><strong>증명:</strong> ${project.hiringProof}</p>
        <div class="additional-links">
          <a href="${project.detailUrl}">상세</a>
          <a href="${project.demoUrl}" target="_blank" rel="noreferrer">Demo</a>
        </div>
      </article>
    `;
  }).join('');
}

function renderLastUpdated() {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' });
  dom.lastUpdated.textContent = `Last updated: ${formatter.format(date)}`;
}

function bindReveal() {
  document.querySelectorAll('.reveal').forEach((element, index) => {
    setTimeout(() => element.classList.add('in'), 20 + index * 20);
  });
}

function render(mode) {
  renderModeButtons(mode);
  renderHero(mode);
  renderWorkHighlights();
  renderFlagship(mode);
  renderAdditional(mode);
  renderLastUpdated();
}

function boot() {
  const mode = getModeFromUrl();
  setModeInUrl(mode);
  render(mode);
  bindReveal();
}

boot();




