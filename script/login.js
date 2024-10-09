// Mendapatkan elemen modal dengan ID 'id01'
var modal = document.getElementById('id01');

// Fungsi yang akan dijalankan ketika pengguna mengklik di mana saja di jendela
window.onclick = function(event) {
  // Mengecek apakah elemen yang diklik adalah modal
  if (event.target == modal) {
    // Jika benar, sembunyikan modal dengan mengubah display menjadi 'none'
    modal.style.display = "none";
  }
}

// Supaya ga bisa back tanpa register/login terlebih dahulu
// Menambahkan event listener pada saat halaman project1.html dimuat
window.onload = function () {
  // Menggunakan history.pushState() untuk memanipulasi riwayat halaman
  history.pushState(null, null, window.location.href);

  // Menambahkan event listener untuk mencegah kembali ke halaman login
  window.addEventListener("popstate", function () {
    history.pushState(null, null, window.location.href);
  });
};