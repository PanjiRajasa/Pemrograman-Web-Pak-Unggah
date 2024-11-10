//modal script
// Fungsi untuk menampilkan modal
function showModal(imgUrl) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modal-img');
    modal.style.display = "block"; // Menampilkan modal
    modalImg.src = imgUrl; // Mengubah sumber gambar modal sesuai dengan URL yang diberikan
}

// Fungsi untuk menutup modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none"; // Menyembunyikan modal
}
//modal script