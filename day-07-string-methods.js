// Day 7 - String Methods

const kalimat = "  Belajar JavaScript itu Menyenangkan  ";

// 1. Menghilangkan spasi di awal/akhir
console.log(kalimat.trim());

// 2. Ubah ke huruf besar/kecil
console.log(kalimat.trim().toUpperCase());
console.log(kalimat.trim().toLowerCase());

// 3. Panjang string
console.log(kalimat.trim().length);

// 4. Mengganti bagian string
const teks = "Saya suka kucing";
console.log(teks.replace("kucing", "anjing"));

// 5. Memotong string (slice/substring)
const nama = "Muhammad Azka";
console.log(nama.slice(0, 8));   // "Muhammad"
console.log(nama.slice(9));      // "Azka"

// 6. Cek apakah string mengandung teks tertentu
console.log(teks.includes("suka"));   // true
console.log(teks.startsWith("Saya")); // true
console.log(teks.endsWith("kucing")); // true

// 7. Split string jadi array
const csv = "apel,jeruk,mangga,pisang";
const arrayBuah = csv.split(",");
console.log(arrayBuah);

// 8. Join array jadi string
console.log(arrayBuah.join(" - "));

// 9. Template literal untuk gabung string + variabel
const skor = 90;
console.log(`Nilai kamu adalah ${skor}, ${skor >= 80 ? "Lulus" : "Tidak Lulus"}`);