const projects = [
  {
    id: 'climate',
    port: 18101,
    title: 'Climate Memory Map',
    number: '01',
    category: 'data',
    categoryLabel: 'Data Experience',
    hook: '개인의 기후 체감을 위치/시간 데이터로 변환',
    purpose: '기후 변화를 거대 담론이 아닌 개인의 기록으로 수집하고, 패턴을 시각화합니다.',
    highlights: ['지도 클릭 기반 기록', '연도/태그 필터', '통계 요약 자동 계산'],
    useCase: '지역별 체감 변화 추적',
    score: '7 APIs'
  },
  {
    id: 'city',
    port: 18102,
    title: 'City Signal Twin',
    number: '02',
    category: 'reliability',
    categoryLabel: 'Urban Signals',
    hook: '교통·대기·기후를 합쳐 도시 스트레스 지도를 생성',
    purpose: '분절된 도시 신호를 하나의 지수로 합성해 위험 구역 우선순위를 판단합니다.',
    highlights: ['stress index 산출', '핫스팟 지도 시각화', '시간대 추세 분석'],
    useCase: '운영 우선순위 결정',
    score: 'Live Map'
  },
  {
    id: 'ocr',
    port: 18103,
    title: 'Browser ONNX OCR Lab',
    number: '03',
    category: 'ai',
    categoryLabel: 'Applied AI',
    hook: '전처리 조합만으로 OCR 성능 차이를 즉시 비교',
    purpose: '모델 교체 전에 입력 파이프라인 최적화로 인식 품질을 개선하는 실험 환경입니다.',
    highlights: ['raw/grayscale/binary 비교', 'confidence/latency 동시 확인', '브라우저 단독 실행'],
    useCase: '인식 품질 튜닝',
    score: '3 Pipelines'
  },
  {
    id: 'rtc',
    port: 18104,
    title: 'RTC Trust Lens',
    number: '04',
    category: 'realtime',
    categoryLabel: 'Realtime',
    hook: '실시간 통신 품질을 trust score로 정량화',
    purpose: 'WebRTC 세션 상태를 수치로 관찰해 품질 이슈를 빠르게 판단합니다.',
    highlights: ['jitter/loss/bitrate 수집', 'integrity 상태 분류', '룸 기반 1:1 검증'],
    useCase: '통화 품질 진단',
    score: 'Live Metrics'
  },
  {
    id: 'journal',
    port: 18105,
    title: 'Local-First Incident Journal',
    number: '05',
    category: 'ops',
    categoryLabel: 'Ops Workflow',
    hook: '오프라인 우선 기록에서 포스트모템 초안 자동 생성',
    purpose: '장애 대응 중 기록 손실을 막고 사후 분석 문서를 빠르게 만듭니다.',
    highlights: ['이벤트 타임라인 입력', 'merge 가능한 구조', 'markdown 초안 자동 출력'],
    useCase: '장애 대응 기록',
    score: 'Draft in 1 click'
  },
  {
    id: 'chaos',
    port: 18106,
    title: 'Edge Chaos Simulator',
    number: '06',
    category: 'reliability',
    categoryLabel: 'Reliability',
    hook: '장애 시나리오별 폴백 전략을 SLO 관점으로 비교',
    purpose: '정책 선택을 감이 아닌 성공률·지연·비용·위반 횟수로 판단합니다.',
    highlights: ['3개 장애 시나리오', '3개 폴백 정책 비교', '자동 리포트 생성'],
    useCase: '정책 의사결정',
    score: '9 Combinations'
  },
  {
    id: 'agent',
    port: 18107,
    title: 'Agent Orchestra Lab',
    number: '07',
    category: 'ai',
    categoryLabel: 'Agent Systems',
    hook: '멀티에이전트 실행을 로그와 누적 지표로 운영',
    purpose: '작업 유형 라우팅, 실행 로그 저장, 품질 지표 계산을 하나의 루프에서 처리합니다.',
    highlights: ['supervisor 라우팅', 'SQLite 실행 로그', '성공률/지연/비용 추적'],
    useCase: '에이전트 운영 관제',
    score: 'Dashboard Ready'
  },
  {
    id: 'gateway',
    port: 18108,
    url: 'https://lovewave.duckdns.org/gateway-guard',
    title: 'MCP Gateway Guard',
    number: '08',
    category: 'ops',
    categoryLabel: 'Security Governance',
    hook: 'MCP 도구 호출을 정책 기반으로 허용/차단하고 감사로그를 남김',
    purpose: '포트폴리오 프로젝트 범위 내에서만 파일/셸 접근을 허용해 운영 안전성을 높입니다.',
    highlights: ['project scope guard', 'allow/deny policy 엔진', 'audit 이벤트 조회'],
    useCase: '에이전트 도구 실행 통제',
    score: 'Guardrail MVP'
  }
];

const filters = [
  { id: 'all', label: '전체' },
  { id: 'ai', label: 'AI' },
  { id: 'realtime', label: '실시간' },
  { id: 'reliability', label: '신뢰성' },
  { id: 'data', label: '데이터' },
  { id: 'ops', label: '운영' }
];

const readinessPlan = [
  '핵심 지표를 전/후 수치로 비교해 개선 효과를 명확히 제시',
  '아키텍처 선택 이유와 트레이드오프를 문서화',
  '실패 주입 및 복구 절차를 데모 흐름에서 검증',
  '일일 자동 테스트 결과를 개선 이력과 연결'
];

const PINNED_STORAGE_KEY = 'portfolioHubPinnedProjects';

const state = {
  filter: 'all',
  query: '',
  sort: 'number',
  pinOnly: false,
  pinned: new Set()
};

const tune = {
  themeName: '',
  heroEyebrow: '',
  heroTitle: '',
  heroCopy: '',
  defaultFilter: '',
  focusProjectIds: [],
  microImprovement: '',
  weekSlot: '',
  nextTheme: ''
};

const heroStatsNode = document.querySelector('#heroStats');
const focusLineNode = document.querySelector('#focusLine');
const marqueeTrackNode = document.querySelector('#marqueeTrack');
const spotlightNode = document.querySelector('#spotlight');
const filtersNode = document.querySelector('#filters');
const cardsNode = document.querySelector('#cards');
const readinessNode = document.querySelector('#readiness');
const timelineNode = document.querySelector('#timelineList');
const searchInputNode = document.querySelector('#searchInput');
const sortSelectNode = document.querySelector('#sortSelect');
const pinOnlyToggleNode = document.querySelector('#pinOnlyToggle');
const resultMetaNode = document.querySelector('#resultMeta');

function countBy(category) {
  return projects.filter((p) => p.category === category).length;
}

function getFocusProjects() {
  const tuned = projects.filter((p) => tune.focusProjectIds.includes(p.id));
  if (tuned.length > 0) {
    return tuned.slice(0, 3);
  }
  return [
    projects.find((p) => p.id === 'gateway'),
    projects.find((p) => p.id === 'chaos'),
    projects.find((p) => p.id === 'agent')
  ].filter(Boolean);
}

function renderHeroStats() {
  const stats = [
    { label: 'Projects', value: String(projects.length).padStart(2, '0') },
    { label: 'AI Systems', value: String(countBy('ai')).padStart(2, '0') },
    { label: 'Reliability', value: String(countBy('reliability')).padStart(2, '0') },
    { label: 'Ops & Security', value: String(countBy('ops')).padStart(2, '0') }
  ];

  heroStatsNode.innerHTML = stats
    .map(
      (stat) => `
      <article class="stat-box">
        <p>${stat.label}</p>
        <strong>${stat.value}</strong>
      </article>
    `
    )
    .join('');

  const focusTitles = getFocusProjects().map((project) => project.title).join(' · ');
  focusLineNode.textContent = `Focus: ${focusTitles}`;
}

function renderMarquee() {
  const words = [
    'Realtime Diagnostics',
    'Guardrail Governance',
    'Local-first Incident Flow',
    'Agent Runtime Ops',
    'Resilience-by-Design',
    'Data Story Systems',
    'Latency-aware UX',
    'AI Product Loops'
  ];

  const row = words
    .map((word) => `<span class="marquee-item">${word}</span>`)
    .join('');

  marqueeTrackNode.innerHTML = row + row;
}

function renderSpotlight() {
  const focused = getFocusProjects();
  spotlightNode.innerHTML = `
    <div class="spotlight-head">
      <p class="eyebrow">Flagship Proof</p>
      <h2>대표 프로젝트 3개를 먼저 보여줍니다</h2>
      <p>문제 정의, 운영 임팩트, 실행 가능성 관점에서 우선 확인할 대상을 배치했습니다.</p>
    </div>
    <div class="spotlight-grid">
      ${focused
        .map((project) => {
          const targetUrl = project.url || `/viewer.html?project=${encodeURIComponent(project.id)}`;
          return `
            <article class="spot-card">
              <p class="spot-index">${project.number}</p>
              <p class="spot-title">${project.title}</p>
              <p class="spot-hook">${project.hook}</p>
              <a class="spot-link" href="${targetUrl}">열어보기</a>
            </article>
          `;
        })
        .join('')}
    </div>
  `;
}

function renderFilters() {
  filtersNode.innerHTML = filters
    .map(
      (filter) =>
        `<button class="chip ${state.filter === filter.id ? 'active' : ''}" data-filter="${filter.id}">${filter.label}</button>`
    )
    .join('');

  filtersNode.querySelectorAll('.chip').forEach((button) => {
    button.addEventListener('click', () => {
      state.filter = button.dataset.filter || 'all';
      renderFilters();
      renderCards();
    });
  });
}

function loadPinnedState() {
  try {
    const raw = localStorage.getItem(PINNED_STORAGE_KEY);
    if (!raw) {
      return;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      state.pinned = new Set(parsed.filter((id) => typeof id === 'string'));
    }
  } catch (error) {
    console.warn('pinned state unavailable', error);
  }
}

function savePinnedState() {
  try {
    localStorage.setItem(PINNED_STORAGE_KEY, JSON.stringify([...state.pinned]));
  } catch (error) {
    console.warn('failed to save pinned state', error);
  }
}

function renderPinToggle() {
  if (!pinOnlyToggleNode) {
    return;
  }
  pinOnlyToggleNode.textContent = state.pinOnly ? 'Pinned only: ON' : 'Pinned only: OFF';
  pinOnlyToggleNode.classList.toggle('active', state.pinOnly);
}

function normalizeText(value) {
  return String(value || '').toLowerCase();
}

function includesQuery(project, query) {
  if (!query) {
    return true;
  }

  const bag = [
    project.title,
    project.hook,
    project.purpose,
    project.useCase,
    project.categoryLabel,
    ...project.highlights
  ]
    .map(normalizeText)
    .join(' ');

  return bag.includes(query);
}

function getVisibleProjects() {
  const query = normalizeText(state.query).trim();
  let visible = projects.filter((project) => (state.filter === 'all' ? true : project.category === state.filter));

  visible = visible.filter((project) => includesQuery(project, query));

  if (state.pinOnly) {
    visible = visible.filter((project) => state.pinned.has(project.id));
  }

  visible.sort((a, b) => {
    if (state.sort === 'title') {
      return a.title.localeCompare(b.title, 'ko');
    }
    if (state.sort === 'category') {
      const byCategory = a.categoryLabel.localeCompare(b.categoryLabel, 'ko');
      if (byCategory !== 0) {
        return byCategory;
      }
      return a.title.localeCompare(b.title, 'ko');
    }
    return Number.parseInt(a.number, 10) - Number.parseInt(b.number, 10);
  });

  return visible;
}

function renderResultMeta(visibleCount) {
  if (!resultMetaNode) {
    return;
  }

  const pinnedCount = state.pinned.size;
  resultMetaNode.textContent = `표시 ${visibleCount} / 전체 ${projects.length} · Pinned ${pinnedCount}개`;
}

function projectCard(project, index) {
  const visibleIndex = String(index + 1).padStart(2, '0');
  const targetUrl = project.url || `http://${location.hostname}:${project.port}`;
  const isPinned = state.pinned.has(project.id);

  return `
    <article class="project-card reveal" style="animation-delay:${index * 70}ms">
      <div class="card-top">
        <p class="card-index">${visibleIndex}</p>
        <span class="tag">${project.categoryLabel}</span>
      </div>
      <h3>${project.title}</h3>
      <p class="hook">${project.hook}</p>
      <p class="purpose">${project.purpose}</p>
      <ul>
        ${project.highlights.map((highlight) => `<li>${highlight}</li>`).join('')}
      </ul>
      <div class="card-foot">
        <div>
          <p class="foot-label">적용 상황</p>
          <p class="foot-value">${project.useCase}</p>
        </div>
        <div>
          <p class="foot-label">Snapshot</p>
          <p class="foot-value">${project.score}</p>
        </div>
      </div>
      <div class="card-actions">
        <button class="pin-btn ${isPinned ? 'active' : ''}" type="button" data-pin="${project.id}" aria-pressed="${isPinned}">
          ${isPinned ? 'Pinned' : 'Pin'}
        </button>
        <a href="${targetUrl}">프로젝트 열기</a>
      </div>
    </article>
  `;
}

function bindCardActions() {
  cardsNode.querySelectorAll('.pin-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const projectId = button.dataset.pin;
      if (!projectId) {
        return;
      }

      if (state.pinned.has(projectId)) {
        state.pinned.delete(projectId);
      } else {
        state.pinned.add(projectId);
      }

      savePinnedState();
      renderPinToggle();
      renderCards();
    });
  });
}

function renderCards() {
  const visibleProjects = getVisibleProjects();

  if (visibleProjects.length === 0) {
    cardsNode.innerHTML = `
      <article class="project-card empty-card reveal">
        <h3>조건에 맞는 프로젝트가 없습니다.</h3>
        <p class="purpose">검색어를 지우거나, 필터/정렬 조건을 변경해 보세요.</p>
      </article>
    `;
    renderResultMeta(0);
    bindReveal();
    return;
  }

  cardsNode.innerHTML = visibleProjects.map((project, index) => projectCard(project, index)).join('');
  renderResultMeta(visibleProjects.length);
  bindCardActions();
  bindReveal();
}

function renderExecution() {
  const tuneLine = tune.microImprovement ? `today micro improvement: ${tune.microImprovement}` : null;
  const lines = tuneLine ? [...readinessPlan, tuneLine] : readinessPlan;

  readinessNode.innerHTML = lines.map((line) => `<li>${line}</li>`).join('');

  const timeline = [
    { label: 'THIS WEEK', text: tune.themeName || '운영 테마를 정의해 우선순위를 고정합니다.' },
    { label: 'CURRENT SLOT', text: tune.weekSlot ? `${tune.weekSlot} 기준 실행 점검 진행` : '주간 슬롯 기반 개선 실행' },
    { label: 'NEXT', text: tune.nextTheme || '다음 테마를 위한 실험군 구성' }
  ];

  timelineNode.innerHTML = timeline
    .map(
      (item) => `
      <div class="timeline-item">
        <strong>${item.label}</strong>
        <p>${item.text}</p>
      </div>
    `
    )
    .join('');
}

function applyHeroTune() {
  const eyebrow = document.querySelector('#heroEyebrow');
  const title = document.querySelector('#heroTitle');
  const copy = document.querySelector('#heroCopy');

  if (eyebrow && tune.heroEyebrow) {
    eyebrow.textContent = tune.heroEyebrow;
  }

  if (title && tune.heroTitle) {
    title.innerHTML = tune.heroTitle.replace(/\\n/g, '<br />');
  }

  if (copy && tune.heroCopy) {
    copy.textContent = tune.heroCopy;
  }
}

function applyThemeBadge() {
  const badge = document.querySelector('#themeBadge');
  if (!badge) {
    return;
  }

  const parts = [];
  if (tune.weekSlot) {
    parts.push(tune.weekSlot);
  }
  if (tune.themeName) {
    parts.push(tune.themeName);
  }

  const title = parts.length ? parts.join(' · ') : 'Theme Active';
  badge.textContent = tune.nextTheme ? `${title} (Next: ${tune.nextTheme})` : title;
}

function applyDailyTune(payload) {
  if (!payload || typeof payload !== 'object') {
    return;
  }

  Object.assign(tune, {
    themeName: payload.themeName || '',
    heroEyebrow: payload.heroEyebrow || '',
    heroTitle: payload.heroTitle || '',
    heroCopy: payload.heroCopy || '',
    defaultFilter:
      filters.some((filter) => filter.id === payload.defaultFilter) && payload.defaultFilter
        ? payload.defaultFilter
        : 'all',
    focusProjectIds: Array.isArray(payload.focusProjectIds) ? payload.focusProjectIds : [],
    microImprovement: payload.microImprovement || '',
    weekSlot: payload.weekSlot || '',
    nextTheme: payload.nextTheme || ''
  });

  state.filter = tune.defaultFilter;
}

function initControls() {
  if (searchInputNode) {
    searchInputNode.value = state.query;
    searchInputNode.addEventListener('input', () => {
      state.query = searchInputNode.value;
      renderCards();
    });
  }

  if (sortSelectNode) {
    sortSelectNode.value = state.sort;
    sortSelectNode.addEventListener('change', () => {
      state.sort = sortSelectNode.value;
      renderCards();
    });
  }

  if (pinOnlyToggleNode) {
    pinOnlyToggleNode.addEventListener('click', () => {
      state.pinOnly = !state.pinOnly;
      renderPinToggle();
      renderCards();
    });
  }

  renderPinToggle();
}

function bindReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
}

async function bootstrap() {
  loadPinnedState();
  initControls();

  try {
    const response = await fetch(`/daily-tune.json?v=${Date.now()}`);
    if (response.ok) {
      const payload = await response.json();
      applyDailyTune(payload);
    }
  } catch (error) {
    console.warn('daily tune unavailable', error);
  }

  applyHeroTune();
  applyThemeBadge();
  renderHeroStats();
  renderMarquee();
  renderSpotlight();
  renderFilters();
  renderCards();
  renderExecution();
  bindReveal();
}

bootstrap();
