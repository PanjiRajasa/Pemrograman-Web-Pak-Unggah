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