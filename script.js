// Dữ liệu chung
let deThiList = JSON.parse(localStorage.getItem('deThiList')) || [
  
];

// Danh sách chuyên đề
const chuyenDeList = [
  { name: "Xác Suất", image: "hanu.jpg" },
  { name: "Đạo Hàm", image: "hanu2.jpg" },
  { name: "Lượng Giác", image: "hanu4.jpg" },
  { name: "Thể Tích", image: "hanu9.jpg" },
  { name: "Hàm Số", image: "hanu6.jpg" },
  { name: "Hình Học", image: "hanu5.jpg" },
  { name: "Phương Trình", image: "hanu8.jpg" },
  { name: "Tổ Hợp", image: "hanu7.jpg" }
];

function getDeThiList() {
    return JSON.parse(localStorage.getItem('deThiList')) || [];
}

// Render chuyên đề trên trang chủ (đẹp hơn)
function renderChuyenDe() {
  const container = document.getElementById('chuyen-de-container');
  if (!container) return;

  container.innerHTML = '';

  chuyenDeList.forEach(chuyenDe => {
    const card = document.createElement('div');
    card.className = 'chuyende-card';
    card.innerHTML = `
      <div class="image-container">
        <img src="${chuyenDe.image}" alt="${chuyenDe.name}">
        <div class="vip-badge">VIP</div>
        <div class="overlay"></div>
      </div>
      <div class="name">${chuyenDe.name}</div>
    `;
    
    card.onclick = () => {
      window.location.href = `chuyende.html?chuyende=${encodeURIComponent(chuyenDe.name)}`;
    };
    
    container.appendChild(card);
  });
}

// Render các đề theo chuyên đề
function renderDeTheoChuyenDe() {
  const urlParams = new URLSearchParams(window.location.search);
  const chuyenDeParam = urlParams.get('chuyende');

  if (!chuyenDeParam) return;

  document.getElementById('chuyen-de-title').textContent = `Chuyên đề: ${chuyenDeParam}`;

  const container = document.getElementById('de-thi-container');
  container.innerHTML = '';

  const filteredDe = deThiList.filter(de => de.chuyenDe === chuyenDeParam);

  filteredDe.forEach(de => {
    const cardHTML = `
      <div class="card">
        <div class="card-image">
          <img src="hust.jpg" alt="Đề">
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

// Mở link đề thi
function moDeThi(link) {
  if (link && link !== "#") {
    window.open(link, '_self');
  } else {
    alert("Link đề đang được cập nhật!");
  }
}

// Thêm đề mới (dùng ở admin.html)
function themDeMoi() {
  const chuyenDe = document.getElementById('chuyen-de').value.trim();
  const tenDe = document.getElementById('ten-de').value.trim();
  const linkDe = document.getElementById('link-de').value.trim();
  const soCau = parseInt(document.getElementById('so-cau').value) || 40;
  const thoiGian = parseInt(document.getElementById('thoi-gian').value) || 90;

  if (!chuyenDe || !tenDe || !linkDe) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  deThiList.push({
    id: Date.now(),
    chuyenDe,
    tenDe,
    linkDe,
    soCau,
    thoiGian
  });

  localStorage.setItem('deThiList', JSON.stringify(deThiList));
  alert("✅ Đề thi đã được thêm thành công!");
  
  // Reset form
  document.getElementById('ten-de').value = '';
  document.getElementById('link-de').value = '';
}

// Khởi tạo
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    renderChuyenDe();
  } else if (window.location.pathname.includes('chuyende.html')) {
    renderDeTheoChuyenDe();
  }
});