// Danh sách chuyên đề lớn xuất hiện ở trang chủ
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

// Nơi bạn sẽ "đăng đề" bằng VS Code
// Mỗi khi có đề mới, bạn chỉ cần thêm một dòng vào mảng này
const deThiList = [
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