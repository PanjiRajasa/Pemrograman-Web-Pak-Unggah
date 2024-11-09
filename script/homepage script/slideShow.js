window.onload = function() {
    //nampilin gambar 1
    document.getElementById("slide1").style.display = "block";

    //manggil class Slider
    //selalu update parameternya setiap kali nambah slide baru
    const slider = new Slider(7); //masukin total slide di html ke parameternya

    //masukin method class kedalam a
    document.getElementById("next").onclick = () => slider.nextSlide(); //untuk next
    document.getElementById("prev").onclick = () => slider.prevSlide(); //untuk prev

}

class Slider {
    constructor(totalSlides) {
        this.currentSlide = 1;
        this.totalSlide = totalSlides;
    }

    // Method untuk pindah ke slide berikutnya
    nextSlide() {
        const currentElement = document.getElementById(`slide${this.currentSlide}`);
        
        // Pastikan elemen saat ini ada
        if (currentElement) {
            // Sembunyikan slide saat ini
            currentElement.style.display = "none";

            // Update slide ke berikutnya, kembali ke slide pertama jika sudah di slide terakhir
            this.currentSlide = this.currentSlide < this.totalSlide ? this.currentSlide + 1 : 1;

            const nextElement = document.getElementById(`slide${this.currentSlide}`);
            
            // Tampilkan slide baru jika elemen tersebut ada
            if (nextElement) {
                nextElement.style.display = "block";
            }
        }
    }

    // Method untuk kembali ke slide sebelumnya
    prevSlide() {
        const currentElement = document.getElementById(`slide${this.currentSlide}`);
        
        // Pastikan elemen saat ini ada
        if (currentElement) {
            // Sembunyikan slide saat ini
            currentElement.style.display = "none";

            // Update slide ke sebelumnya, kembali ke slide terakhir jika di slide pertama
            this.currentSlide = this.currentSlide > 1 ? this.currentSlide - 1 : this.totalSlide;

            const prevElement = document.getElementById(`slide${this.currentSlide}`);
            
            // Tampilkan slide baru jika elemen tersebut ada
            if (prevElement) {
                prevElement.style.display = "block";
            }
        }
    }
}