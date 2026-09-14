// Day 4 - Arrays

// 1. Membuat array
const buah = ["Apel", "Jeruk", "Mangga", "Pisang"];
console.log(buah);

// 2. Akses elemen array (index mulai dari 0)
console.log(buah[0]); // Apel
console.log(buah[2]); // Mangga

// 3. Panjang array
console.log(buah.length); // 4

// 4. Menambah & menghapus elemen
buah.push("Anggur");     // tambah di akhir
console.log(buah);

buah.pop();               // hapus elemen terakhir
console.log(buah);

buah.unshift("Melon");    // tambah di awal
console.log(buah);

// 5. Looping array dengan forEach
buah.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

// 6. Method array yang sering dipakai: map & filter
const angka = [1, 2, 3, 4, 5, 6];

const kuadrat = angka.map((n) => n * n);
console.log(kuadrat); // [1, 4, 9, 16, 25, 36]

const genap = angka.filter((n) => n % 2 === 0);
console.log(genap); // [2, 4, 6]