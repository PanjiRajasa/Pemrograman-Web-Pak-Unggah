document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan elemen tombol
  const buttonPanji = document.getElementById("buttonPanji");
  const buttonJojo = document.getElementById("buttonJojo");
  const buttonRangga = document.getElementById("buttonRangga");

  // Deklarasi elemen detailNama di luar fungsi
  const detailNama = document.createElement("p");
  const tableHolder1 = document.getElementById("tableHolder1");
  const tableHolder2 = document.getElementById("tableHolder2");
  const tableHolder3 = document.getElementById("tableHolder3");
  const paragraphDisplayer1 = document.getElementById("paragraphDisplayer1");
  const paragraphDisplayer2 = document.getElementById("paragraphDisplayer2");
  const paragraphDisplayer3 = document.getElementById("paragraphDisplayer3");

  function addDetailNama(buttonId) {
    // Menyembunyikan semua table holder sebelum menampilkan yang relevan
    tableHolder1.style.display = "none";
    tableHolder2.style.display = "none";
    tableHolder3.style.display = "none";

    if (buttonId === "buttonPanji") {
      detailNama.textContent = "Nama saya Panji, saya hobby bermain game";
      // Mengupdate isi elemen dengan detail
      paragraphDisplayer1.innerHTML = ""; // Menghapus isi sebelumnya
      paragraphDisplayer1.appendChild(detailNama); // Menambahkan detailNama
      tableHolder1.style.display = "block"; // Menampilkan tableHolder1

      // Menggulung ke elemen paragraphDisplayer
      paragraphDisplayer1.scrollIntoView({ behavior: "smooth" });
    } else if (buttonId === "buttonJojo") {
      detailNama.textContent = "Nama saya Jojo, saya hobby berenang";
      // Mengupdate isi elemen dengan detail
      paragraphDisplayer2.innerHTML = ""; // Menghapus isi sebelumnya
      paragraphDisplayer2.appendChild(detailNama); // Menambahkan detailNama
      tableHolder2.style.display = "block"; // Menampilkan tableHolder2

      // Menggulung ke elemen paragraphDisplayer
      paragraphDisplayer2.scrollIntoView({ behavior: "smooth" });
    } else if (buttonId === "buttonRangga") {
      detailNama.textContent = "Nama saya Rangga, saya hobby bersepeda";
      // Mengupdate isi elemen dengan detail
      paragraphDisplayer3.innerHTML = ""; // Menghapus isi sebelumnya
      paragraphDisplayer3.appendChild(detailNama); // Menambahkan detailNama
      tableHolder3.style.display = "block"; // Menampilkan tableHolder3

      // Menggulung ke elemen paragraphDisplayer
      paragraphDisplayer3.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Event listener untuk tombol
  buttonPanji.addEventListener("click", () => addDetailNama("buttonPanji"));
  buttonJojo.addEventListener("click", () => addDetailNama("buttonJojo"));
  buttonRangga.addEventListener("click", () => addDetailNama("buttonRangga"));
});

//DOM tombol fakta unik untuk menampilkan paragraf fakta unik
document
  .getElementById("buttonPanjiLihatDetail")
  .addEventListener("click", function () {
    let detailUnik = document.querySelector(
      "#paragraphDisplayerUnique1 .fakta-unik-p"
    );
    detailUnik.style.display = "block"; // Menampilkan elemen <p>
    detailUnik.innerText = "1. Suka menonton anime"; // Menambahkan teks ke elemen <p>
  });

document
  .getElementById("buttonJojoLihatDetail")
  .addEventListener("click", function () {
    let detailUnik = document.querySelector(
      "#paragraphDisplayerUnique2 .fakta-unik-p"
    );
    detailUnik.style.display = "block"; // Menampilkan elemen <p>
    detailUnik.innerText =
      "1. Saya suka nonton meme\n2. Terkadang di malam hari, aku kadang garing"; // Menambahkan teks ke elemen <p>
  });

document
  .getElementById("buttonRanggaLihatDetail")
  .addEventListener("click", function () {
    let detailUnik = document.querySelector(
      "#paragraphDisplayerUnique3 .fakta-unik-p"
    );
    detailUnik.style.display = "block"; // Menampilkan elemen <p>
    detailUnik.innerText = `1. Pencinta JMK 48\n2. Suka nonton Ambatron\n3. Pekerjaan akan lebih gampang jika berhubungan dengan kesukaannya\n4. Lebih suka hemat jika mau sesuatu\n5. Lebih suka diajarkan sekaligus praktek\n6. Lebih suka pura-pura lemah ternyata sepuh\n7. Memiliki beda sifat terhadap real life dan Internet\n8. Suka karakter Broly`; // Menambahkan teks ke elemen <p>
  });

//DOM untuk menyembunyikan kembali paragraf fakta unik
document
  .getElementById("buttonSembunyikan1")
  .addEventListener("click", function () {
    let detailUnik = document.querySelector(
      "#paragraphDisplayerUnique1 .fakta-unik-p"
    );
    detailUnik.style.display = "none"; // Menyembunyikan elemen <p>
  });

document
  .getElementById("buttonSembunyikan2")
  .addEventListener("click", function () {
    let detailUnik = document.querySelector(
      "#paragraphDisplayerUnique2 .fakta-unik-p"
    );
    detailUnik.style.display = "none"; // Menyembunyikan elemen <p>
  });

document
  .getElementById("buttonSembunyikan3")
  .addEventListener("click", function () {
    let detailUnik = document.querySelector(
      "#paragraphDisplayerUnique3 .fakta-unik-p"
    );
    detailUnik.style.display = "none"; // Menyembunyikan elemen <p>
  });

//untuk searchbar
document.getElementById("searchInput").addEventListener("input", function () {
  const searchValue = this.value.toLowerCase(); // Mendapatkan nilai input dan diubah ke lowercase
  const articles = document.querySelectorAll(".container-informasi-dasar"); // Mendapatkan semua artikel

  let foundFirst = false; // Flag untuk menandai apakah artikel pertama yang ditemukan sudah ditampilkan

  articles.forEach(function (article) {
    const id = article.id.toLowerCase(); // Mendapatkan ID dari artikel dan diubah ke lowercase

    if (id.includes(searchValue) && !foundFirst) {
      // Jika ID sesuai dengan nilai input dan belum ada artikel yang ditemukan
      article.style.display = "flex"; // Tampilkan artikel
      foundFirst = true; // Tandai bahwa artikel pertama sudah ditampilkan
    } else {
      article.style.display = "none"; // Sembunyikan artikel
    }
  });
});

// supaya ga bisa balik lagi ke homepage tanpa login/register terlebih dahulu
function goBack() {
  window.history.back();
}

//function untuk menampilkan teks
// document.addEventListener("DOMContentLoaded", function() {

//   const tableHolder = document.getElementById("tableHolder");
//   tableHolder.style.display = "block";
// });
