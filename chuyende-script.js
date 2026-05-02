function renderDeTheoChuyenDe() {
  const urlParams = new URLSearchParams(window.location.search);
  const chuyenDeParam = urlParams.get('chuyende');

  if (!chuyenDeParam) return;

  document.getElementById('chuyen-de-title').textContent = `Chuyên đề: ${chuyenDeParam}`;
  const container = document.getElementById('de-thi-container');
  container.innerHTML = '';

  // Lọc đề từ danh sách cố định trong script.js
  const filteredDe = deThiList.filter(de => de.chuyenDe === chuyenDeParam);

  if (filteredDe.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding:80px; color:#94a3b8;">Sắp ra mắt đề mới cho chuyên đề này!</p>`;
    return;
  }

  filteredDe.forEach(de => {
    const cardHTML = `
      <div class="card">
        <div class="card-image">
          <img src="hanu2.jpg" alt="Đề">
          <div class="vip-badge">ĐỀ THI</div>
        </div>
        <div class="card-body">
          <div class="title">${de.tenDe}</div>
          <div class="info">
            <div>📝 ${de.soCau} câu</div>
            <div>⏱️ ${de.thoiGian} phút</div>
          </div>
          <button class="button" onclick="moDeThi('${de.linkDe}')">
            Bắt đầu làm bài
          </button>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

document.addEventListener('DOMContentLoaded', renderDeTheoChuyenDe);