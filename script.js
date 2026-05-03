// Danh sách chuyên đề lớn xuất hiện ở trang chủ
const chuyenDeList = [
  { name: "Xác Suất", image: "hanu.jpg" },
  { name: "Đạo Hàm", image: "hanu2.jpg" },
  { name: "Lượng Giác", image: "hanu4.jpg" },
  { name: "Dãy Số", image: "hanu9.jpg" },
  { name: "Hàm Số Mũ Và Logarit", image: "hanu6.jpg" },
  { name: "Góc Trong Không Gian", image: "hanu5.jpg" },
  { name: "Khoảng Cách", image: "hanu8.jpg" },
  { name: "Thể tích", image: "hanu7.jpg" }
];

const deThiList = [
  // ------------------Chuyên đề Xác Suất-----------------------
  {
    chuyenDe: "Xác Suất",
    tenDe: "Đề số 01 - Xác suất",
    linkDe: "ChuyenDe/Xac-suat/xs-01.html",
    soCau: 25,
    thoiGian: 45
  },
  {
    chuyenDe: "Xác Suất",
    tenDe: "Đề số 02 - Xác suất",
    linkDe: "ChuyenDe/Xac-suat/xs-02.html",
    soCau: 25,
    thoiGian: 45
  },
  // ------------------Chuyên đề Đạo Hàm-----------------------
  {
    chuyenDe: "Đạo Hàm",
    tenDe: "Đề số 01 - Đạo hàm",
    linkDe: "ChuyenDe/Dao-ham/dh-01.html",
    soCau: 25,
    thoiGian: 45
  },
  {
    chuyenDe: "Đạo Hàm",
    tenDe: "Đề số 02 - Đạo hàm",
    linkDe: "ChuyenDe/Dao-ham/dh-02.html",
    soCau: 25,
    thoiGian: 45
  },
  {
    chuyenDe: "Đạo Hàm",
    tenDe: "Đề số 03 - Đạo hàm",
    linkDe: "ChuyenDe/Dao-ham/dh-03.html",
    soCau: 25,
    thoiGian: 45
  },
  {
    chuyenDe: "Đạo Hàm",
    tenDe: "Đề số 04 - Đạo hàm",
    linkDe: "ChuyenDe/Dao-ham/dh-04.html",
    soCau: 25,
    thoiGian: 45
  },
  {
    chuyenDe: "Đạo Hàm",
    tenDe: "Đề số 05 - Đạo hàm",
    linkDe: "ChuyenDe/Dao-ham/dh-05.html",
    soCau: 25,
    thoiGian: 45
  },
  // ------------------Chuyên đề hàm số Lượng Giác-------------------------
  {
    chuyenDe: "Lượng Giác",
    tenDe: "Đề số 01 - Lượng Giác",
    linkDe: "ChuyenDe/Luong-giac/lgiac-01.html",
    soCau: 25,
    thoiGian: 45
  },
  {
    chuyenDe: "Lượng Giác",
    tenDe: "Đề số 02 - Lượng Giác",
    linkDe: "ChuyenDe/Luong-giac/lgiac-02.html",
    soCau: 25,
    thoiGian: 45
  },
  {
    chuyenDe: "Lượng Giác",
    tenDe: "Đề số 03 - Lượng Giác",
    linkDe: "ChuyenDe/Luong-giac/lgiac-03.html",
    soCau: 25,
    thoiGian: 45
  },
  // ------------------Dãy số, cấp số cộng, cấp số nhân---------------------
  {
    chuyenDe: "Dãy Số",
    tenDe: "Đề số 01 - Dãy số",
    linkDe: "ChuyenDe/Day-so/ds-01.html",
    soCau: 25,
    thoiGian: 45
  },
  {
    chuyenDe: "Dãy Số",
    tenDe: "Đề số 02 - Dãy số",
    linkDe: "ChuyenDe/Day-so/ds-02.html",
    soCau: 25,
    thoiGian: 45
  },
  // ------------------Chuyên đề hàm số Mũ và Logarit-----------------------
  {
    chuyenDe: "Hàm Số Mũ Và Logarit",
    tenDe: "Đề số 01 - Mũ và Logarit",
    linkDe: "ChuyenDe/Mu-Loga/log-01.html",
    soCau: 25,
    thoiGian: 45
  },
  {
    chuyenDe: "Hàm Số Mũ Và Logarit",
    tenDe: "Đề số 02 - Mũ và Logarit",
    linkDe: "ChuyenDe/Mu-Loga/log-02.html",
    soCau: 25,
    thoiGian: 45
  },
  {
    chuyenDe: "Hàm Số Mũ Và Logarit",
    tenDe: "Đề số 03 - Mũ và Logarit",
    linkDe: "ChuyenDe/Mu-Loga/log-03.html",
    soCau: 25,
    thoiGian: 45
  },
];

// Hàm hiển thị chuyên đề ở trang chủ index.html[cite: 7]
function renderChuyenDe() {
  const container = document.getElementById('chuyen-de-container');
  if (!container) return;
  container.innerHTML = '';

  chuyenDeList.forEach(cd => {
    const card = document.createElement('div');
    card.className = 'chuyende-card';
    card.innerHTML = `
      <div class="image-container">
        <img src="${cd.image}" alt="${cd.name}">
        <div class="vip-badge">FREE</div>
      </div>
      <div class="name">${cd.name}</div>
    `;
    card.onclick = () => {
      window.location.href = `chuyende.html?chuyende=${encodeURIComponent(cd.name)}`;
    };
    container.appendChild(card);
  });
}

// Hàm mở link đề thi[cite: 7]
function moDeThi(link) {
  window.location.href = link;
}

// Khởi tạo khi trang tải xong[cite: 7]
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('chuyen-de-container')) {
    renderChuyenDe();
  }
});