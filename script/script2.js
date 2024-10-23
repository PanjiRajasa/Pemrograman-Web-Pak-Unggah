//lihat ceritaku 1

document.addEventListener("DOMContentLoaded", function() {
    const buttonCeritaku1 = document.getElementById("buttonCeritaku1");
    const tablePanji = document.getElementById("tablePanji");

    let isCeritakuVisible = false; // Status awal, tabel ditampilkan

    buttonCeritaku1.addEventListener("click", function() {
        // Memeriksa status dan melakukan pergantian tampilan
        if (isCeritakuVisible) {
            // Jika paragraf terlihat, sembunyikan dan tampilkan tabel
            const ceritakuElement = document.getElementById("ceritaku1");
            if (ceritakuElement) {
                ceritakuElement.remove(); // Hapus paragraf
            }
            tablePanji.style.display = "table"; // Tampilkan tabel
        } else {
            // Jika tabel terlihat, sembunyikan dan tampilkan paragraf
            tablePanji.style.display = "none"; // Sembunyikan tabel
            // Tambahkan paragraf
            tablePanji.insertAdjacentHTML('afterend', `
                <div class="ceritaku1" id="ceritaku1">
                    Halo! Perkenalkan, saya Panji. Saya lahir pada tanggal 22 Agustus 2007, dan saat ini saya berusia 17 tahun. 
                    Saya adalah siswa di SMKN 1 Denpasar, di mana saya mulai bersekolah pada tahun 2023. 
                    Di sekolah, saya sangat menyukai dunia pemrograman, dan ini adalah salah satu hobi terbesar saya. 
                    Ketertarikan saya pada coding dimulai sejak saya pertama kali mengenal komputer dan programming. 
                    Seiring waktu, saya semakin mendalami berbagai bahasa pemrograman dan teknologi, dan hal ini menjadi lebih dari sekadar hobi — itu adalah passion saya. 
                    Salah satu momen paling membanggakan dalam perjalanan saya adalah ketika saya berhasil meraih juara 3 dalam lomba LKS (Lomba Kompetensi Siswa) untuk kategori desktop menggunakan bahasa C#. 
                    Ini adalah pencapaian yang sangat berarti bagi saya dan menjadi motivasi untuk terus berkembang. 
                    Saya senang mengeksplorasi berbagai aspek dalam dunia pemrograman dan selalu mencari tantangan baru. 
                    Melalui coding, saya dapat mengekspresikan kreativitas saya dan menyelesaikan berbagai masalah dengan cara yang inovatif. 
                    Sekian perkenalan singkat tentang saya. Terima kasih telah meluangkan waktu untuk mengenal saya lebih dekat!
                </div>
            `);
        }
        // Toggle status
        isCeritakuVisible = !isCeritakuVisible; // Ubah status
    });
});

//lihat ceritaku2
document.addEventListener("DOMContentLoaded", function() {
    const buttonCeritaku2 = document.getElementById("buttonCeritaku2");
    const tableJojo = document.getElementById("tableJojo");

    let isCeritakuVisible = false; // Status awal, tabel ditampilkan

    buttonCeritaku2.addEventListener("click", function() {
        // Memeriksa status dan melakukan pergantian tampilan
        if (isCeritakuVisible) {
            // Jika paragraf terlihat, sembunyikan dan tampilkan tabel
            const ceritakuElement = document.getElementById("ceritaku2");
            if (ceritakuElement) {
                ceritakuElement.remove(); // Hapus paragraf
            }
            tableJojo.style.display = "table"; // Tampilkan tabel
        } else {
            // Jika tabel terlihat, sembunyikan dan tampilkan paragraf
            tableJojo.style.display = "none"; // Sembunyikan tabel
            // Tambahkan paragraf
            tableJojo.insertAdjacentHTML('afterend', `
                <div class="ceritaku2" id="ceritaku2">
                    Hai! Perkenalkan, nama saya Jonathan Lionel bisa dipanggil Jojo. 
                    Saya lahir tanggal 14 Mei 2008 dan saat ini saya berumur 16 tahun. 
                    Saya adalah Siswa di SMKN 1 Denpasar, dan saya mulai bersekolah di sini sejak tahun 2023. 
                    Saya sangat penasaran akan dunia pemrograman, karena saya melihat orang-orang membuat game dari bahasa-bahasa pemrograman, 
                    dan saya tertarik tentang pemrograman. Hobi saya juga dari kecil sudah suka akan keteknologian, 
                    dan ini sudah dibilang itu adalah passion saya. 
                    Kedepannya saya akan terus belajar tentang pemrograman dan bidang keteknologian untuk mencapai ke jenjang/tahap berikutnya. 
                    Terima kasih telah meluangkan waktu untuk mengenal dan mengetahui tentang saya!
                </div>
            `);
        }
        // Toggle status
        isCeritakuVisible = !isCeritakuVisible; // Ubah status
    });
});


//lihat ceritaku rangga
document.addEventListener("DOMContentLoaded", function() {
    const buttonCeritakuRangga = document.getElementById("buttonCeritakuRangga");
    const tableRangga = document.getElementById("tableRangga");

    let isCeritakuVisible = false; // Status awal, tabel ditampilkan

    buttonCeritakuRangga.addEventListener("click", function() {
        // Memeriksa status dan melakukan pergantian tampilan
        if (isCeritakuVisible) {
            // Jika paragraf terlihat, sembunyikan dan tampilkan tabel
            const ceritakuElement = document.getElementById("ceritakuRangga");
            if (ceritakuElement) {
                ceritakuElement.remove(); // Hapus paragraf
            }
            tableRangga.style.display = "table"; // Tampilkan tabel
        } else {
            // Jika tabel terlihat, sembunyikan dan tampilkan paragraf
            tableRangga.style.display = "none"; // Sembunyikan tabel
            // Tambahkan paragraf
            tableRangga.insertAdjacentHTML('afterend', `
                <div class="ceritaku-rangga" id="ceritakuRangga">
                    Halo! Nama saya I Putu Rangga Aditya Nandhana. 
                    Saya lahir pada 6 Oktober 2007 dan saat ini berusia 16 tahun. 
                    Saya adalah siswa di SMKN 1 Denpasar dan mulai bersekolah di sini sejak tahun 2023. 
                    Ketertarikan saya dalam dunia pemrograman dan teknologi semakin berkembang, 
                    dan saya memiliki hobi bermain game dan musik. Saya berharap untuk terus belajar dan 
                    mengembangkan keterampilan saya di bidang ini. Terima kasih telah meluangkan waktu untuk mengenal saya!
                </div>
            `);
        }
        // Toggle status
        isCeritakuVisible = !isCeritakuVisible; // Ubah status
    });
});


