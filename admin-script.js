// admin-script.js - Dark Mode

function loadChuyenDeToSelect() {
  const select = document.getElementById('chuyen-de');
  if (!select) return;

  select.innerHTML = '<option value="">-- Chọn chuyên đề --</option>';
  
  chuyenDeList.forEach(cd => {
    const option = document.createElement('option');
    option.value = cd.name;
    option.textContent = cd.name;
    select.appendChild(option);
  });87
}

function themDeMoi() {
  const chuyenDe = document.getElementById('chuyen-de').value;
  const tenDe = document.getElementById('ten-de').value.trim();
  const linkDe = document.getElementById('link-de').value.trim();
  const soCau = parseInt(document.getElementById('so-cau').value) || 25;
  const thoiGian = parseInt(document.getElementById('thoi-gian').value) || 45;

  if (!chuyenDe || !tenDe || !linkDe) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  deThiList.push({
    id: Date.now(),
    chuyenDe: chuyenDe,
    tenDe: tenDe,
    linkDe: linkDe,
    soCau: soCau,
    thoiGian: thoiGian
  });

  localStorage.setItem('deThiList', JSON.stringify(deThiList));
  alert("✅ Đề thi đã được thêm thành công!");

  resetAdminForm();
  renderAdminList();
}

function resetAdminForm() {
  document.getElementById('chuyen-de').selectedIndex = 0; 
  document.getElementById('ten-de').value = '';
  document.getElementById('link-de').value = '';
  document.getElementById('so-cau').value = '25';
  document.getElementById('thoi-gian').value = '45';
}

function renderAdminList() {
  const container = document.getElementById('admin-list');
  const countEl = document.getElementById('de-count');
  
  if (!container) return;

  container.innerHTML = '';

  if (deThiList.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#94a3b8; padding:60px 20px;">Chưa có đề thi nào được đăng.</p>';
    countEl.textContent = '0';
    return;
  }

  countEl.textContent = deThiList.length;

  deThiList.forEach((de, index) => {
    const item = document.createElement('div');
    item.className = 'admin-de-item';

    // Kiểm tra xem là link web hay file nội bộ dự án
    const isExternal = de.linkDe.startsWith('http');
    const displayLink = de.linkDe.length > 60 ? de.linkDe.substring(0,57) + '...' : de.linkDe;

    item.innerHTML = `
      <div class="admin-de-info">
        <strong>${de.tenDe}</strong>
        <p><strong>Chuyên đề:</strong> ${de.chuyenDe}</p>
        <p><strong>Đường dẫn:</strong> 
          <a href="${de.linkDe}" target="_self" style="color: #7dd3fc;">
            ${isExternal ? '🌐' : '📄'} ${displayLink}
          </a>
        </p>
        <p>${de.soCau} câu • ${de.thoiGian} phút</p>
      </div>
      <div class="admin-de-actions">
        <button class="btn-edit" onclick="suaDe(${index})">Sửa</button>
        <button class="btn-delete" onclick="xoaDe(${index})">Xóa</button>
      </div>
    `;
    container.appendChild(item);
  });
}

function xoaDe(index) {
  if (confirm(`Bạn có chắc muốn xóa đề "${deThiList[index].tenDe}" không?`)) {
    deThiList.splice(index, 1);
    localStorage.setItem('deThiList', JSON.stringify(deThiList));
    renderAdminList();
  }
}

function suaDe(index) {
  alert("Chức năng Sửa đề sẽ được phát triển ở phiên bản sau.\n\nHiện tại bạn có thể xóa rồi thêm lại đề mới.");
}

// Khởi tạo trang Admin
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('admin.html')) {
    loadChuyenDeToSelect();
    renderAdminList();
  }
});