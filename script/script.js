document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan elemen tombol
  const buttonPanji = document.getElementById("buttonPanji");
  const buttonJojo = document.getElementById("buttonJojo");
  const buttonRangga = document.getElementById("buttonRangga");
  const paragraphDisplayer = document.getElementById("paragraphDisplayer");

  function addDetailNama(buttonId) {
    let detailNama = document.createElement("p");

    if (buttonId === "buttonPanji") {
      detailNama.textContent = "Nama saya Panji, saya hobby bermain game";
    } else if (buttonId === "buttonJojo") {
      detailNama.textContent = "Nama saya Jojo, saya hobby berenang";
    } else if (buttonId === "buttonRangga") {
      detailNama.textContent = "Nama saya Rangga, saya hobby bersepeda";
    }

    // Mengupdate isi elemen dengan detail
    paragraphDisplayer.innerHTML = "";
    paragraphDisplayer.appendChild(detailNama);

    // Menggulung ke elemen paragraphDisplayer
    paragraphDisplayer.scrollIntoView({ behavior: "smooth" });
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
