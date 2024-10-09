// fungsi supaya user ga masukin nomor telepon asal-asalan
function validatePhoneInput(input) {
    input.value = input.value.replace(/[^0-9+]/g, ''); // Menghapus karakter yang bukan angka atau tanda +
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