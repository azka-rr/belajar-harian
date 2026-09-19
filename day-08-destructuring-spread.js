// Day 8 - Destructuring & Spread/Rest Operator

// 1. Array destructuring
const buah = ["Apel", "Jeruk", "Mangga"];
const [pertama, kedua, ketiga] = buah;
console.log(pertama, kedua, ketiga);

// 2. Object destructuring
const mahasiswa = { nama: "Azka", umur: 21, jurusan: "Informatika" };
const { nama, jurusan } = mahasiswa;
console.log(nama, jurusan);

// 3. Destructuring dengan default value
const { kota = "Sumbawa" } = mahasiswa;
console.log(kota); // "Sumbawa" karena tidak ada properti kota di object

// 4. Rename saat destructuring
const { nama: namaLengkap } = mahasiswa;
console.log(namaLengkap);

// 5. Spread operator - array
const angka1 = [1, 2, 3];
const angka2 = [4, 5, 6];
const gabungan = [...angka1, ...angka2];
console.log(gabungan); // [1,2,3,4,5,6]

// 6. Spread operator - object
const dataTambahan = { semester: 5 };
const mahasiswaLengkap = { ...mahasiswa, ...dataTambahan };
console.log(mahasiswaLengkap);

// 7. Rest operator - kumpulkan sisa argumen jadi array
function jumlahkan(...angka) {
  return angka.reduce((total, n) => total + n, 0);
}
console.log(jumlahkan(1, 2, 3, 4, 5)); // 15

// 8. Rest saat destructuring array
const [utama, ...sisanya] = ["A", "B", "C", "D"];
console.log(utama);   // "A"
console.log(sisanya); // ["B", "C", "D"]