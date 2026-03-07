const projectMap = {
  climate: { title: 'Climate Memory Map', port: 18101 },
  city: { title: 'City Signal Twin', port: 18102 },
  ocr: { title: 'Browser ONNX OCR Lab', port: 18103 },
  rtc: { title: 'RTC Trust Lens', port: 18104 },
  journal: { title: 'Local-First Incident Journal', port: 18105 },
  chaos: { title: 'Edge Chaos Simulator', port: 18106 },
  agent: { title: 'Agent Orchestra Lab', port: 18107 },
  gateway: { title: 'MCP Gateway Guard', port: 18108, url: 'https://lovewave.duckdns.org/gateway-guard' }
};

const params = new URLSearchParams(location.search);
const projectId = params.get('project') ?? '';
const info = projectMap[projectId];
const titleNode = document.querySelector('#viewerTitle');
const frame = document.querySelector('#projectFrame');

if (!info) {
  titleNode.textContent = '프로젝트를 찾을 수 없습니다.';
  frame.remove();
  const msg = document.createElement('p');
  msg.className = 'viewer-error';
  msg.textContent = '잘못된 접근입니다. 프로젝트 목록으로 돌아가 다시 선택해 주세요.';
  document.querySelector('.viewer-layout').appendChild(msg);
} else {
  titleNode.textContent = info.title;
  const target = info.url || `http://${location.hostname}:${info.port}`;
  // HTTPS viewer + HTTP iframe is blocked by browser mixed-content policy.
  // Navigate top-level so the target service can open normally.
  window.location.replace(target);
  setTimeout(() => {
    const hint = document.createElement('div');
    hint.className = 'viewer-error';
    hint.innerHTML = `자동 이동이 차단되면 <a href="${target}">여기를 눌러 열기</a>`;
    document.querySelector('.viewer-layout').appendChild(hint);
  }, 1200);
}
