// fungsi supaya user ga masukin nomor telepon asal-asalan
function validatePhoneInput(input) {
    input.value = input.value.replace(/[^0-9+]/g, ''); // Menghapus karakter yang bukan angka atau tanda +
}