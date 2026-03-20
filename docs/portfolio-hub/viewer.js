const projectMap = {
  climate: { title: 'Climate Memory Map', url: '/projects/climate-memory-map' },
  city: { title: 'City Signal Twin', url: '/projects/city-signal-twin' },
  ocr: { title: 'Browser ONNX OCR Lab', url: '/projects/browser-onnx-ocr-lab' },
  rtc: { title: 'RTC Trust Lens', url: '/projects/rtc-trust-lens' },
  journal: { title: 'Local-First Incident Journal', url: '/projects/incident-journal' },
  chaos: { title: 'Edge Chaos Simulator', url: '/projects/edge-chaos-simulator' },
  gateway: { title: 'MCP Gateway Guard', url: '/projects/mcp-gateway-guard' },
  agent: { title: 'Agent Orchestra Lab', url: '/projects/agent-orchestra-lab' },
  consistency: { title: 'Order/Payment Consistency Lab', url: '/projects/order-payment-consistency-lab' },
};

const params = new URLSearchParams(window.location.search);
const projectId = params.get('project') ?? '';
const info = projectMap[projectId];
const titleNode = document.querySelector('#viewerTitle');
const frame = document.querySelector('#projectFrame');

if (!info) {
  titleNode.textContent = '프로젝트를 찾을 수 없습니다.';
  frame.remove();
  const msg = document.createElement('p');
  msg.className = 'viewer-error';
  msg.textContent = '잘못된 접근입니다. 홈으로 돌아가 프로젝트를 다시 선택해 주세요.';
  document.querySelector('.viewer-layout').appendChild(msg);
} else {
  titleNode.textContent = info.title;
  window.location.replace(info.url);
  setTimeout(() => {
    const hint = document.createElement('div');
    hint.className = 'viewer-error';
    hint.innerHTML = `자동 이동이 차단되면 <a href="${info.url}">여기를 눌러 열기</a>`;
    document.querySelector('.viewer-layout').appendChild(hint);
  }, 1200);
}
