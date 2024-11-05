let notTouched1 = true;
let notTouched2 = true;
let notTouched3 = true;
let slideCounter = 1;
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");

function showSlide(counter) {
    // Sembunyikan semua slide
    slide1.style.display = "none";
    slide2.style.display = "none";
    slide3.style.display = "none";
    
    // Tampilkan slide berdasarkan nilai counter dan kondisi notTouched
    if (counter === 1 && notTouched1) {
        slide1.style.display = "block";
    } else if (counter === 2 && notTouched2) {
        slide2.style.display = "block";
    } else if (counter === 3 && notTouched3) {
        slide3.style.display = "block";
    }
}

// Tampilkan slide awal
showSlide(slideCounter);

function plusSlides() {
    slideCounter++;
    if (slideCounter == 4) {
        slideCounter = 1; // kembali ke slide 1 jika lebih dari 3
    }
    showSlide(slideCounter);

    //console.log(slideCounter);
}

function minusSlides() {
    slideCounter--;
    if (slideCounter == 0) {
        slideCounter = 3; // kembali ke slide terakhir jika kurang dari 1
    }
    showSlide(slideCounter);

    //console.log(slideCounter);
}
