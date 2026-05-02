function renderDeTheoChuyenDe() {
  const urlParams = new URLSearchParams(window.location.search);
  const chuyenDeParam = urlParams.get('chuyende');

  if (!chuyenDeParam) return;

  document.getElementById('chuyen-de-title').textContent = `Chuyên đề: ${chuyenDeParam}`;

  const container = document.getElementById('de-thi-container');
  container.innerHTML = '';

  const filteredDe = deThiList.filter(de => de.chuyenDe === chuyenDeParam);

  if (filteredDe.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding:80px; color:#94a3b8; font-size:18px;">Chưa có đề nào trong chuyên đề này.</p>`;
    return;
  }

  filteredDe.forEach(de => {
    const cardHTML = `
      <div class="card">
        <div class="card-image">
          <img src="hanu2.jpg" alt="Đề">
          <div class="vip-badge">VIP</div>
        </div>
        <div class="card-body">
          <div class="title">${de.tenDe}</div>
          <div class="info">
            <div>📝 ${de.soCau} câu</div>
            <div>⏱️ ${de.thoiGian} phút</div>
          </div>
          <button class="button" onclick="moDeThi('${de.linkDe}')">
            Bắt đầu thi
          </button>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

// Khởi tạo trang chuyên đề
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('chuyende.html')) {
    renderDeTheoChuyenDe();
  }
});