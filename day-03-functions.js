// Day 3 - Functions

// 1. Function declaration
function sapa(nama) {
  return `Halo, ${nama}!`;
}
console.log(sapa("Azka"));

// 2. Function expression
const tambah = function (a, b) {
  return a + b;
};
console.log(tambah(5, 3));

// 3. Arrow function
const kali = (a, b) => a * b;
console.log(kali(4, 6));

// 4. Default parameter
function sapaDefault(nama = "Tamu") {
  return `Selamat datang, ${nama}`;
}
console.log(sapaDefault());       // pakai default
console.log(sapaDefault("Budi")); // override default

// 5. Function dengan banyak parameter & logic
function cekGenap(angka) {
  if (angka % 2 === 0) {
    return `${angka} adalah bilangan genap`;
  } else {
    return `${angka} adalah bilangan ganjil`;
  }
}
console.log(cekGenap(7));
console.log(cekGenap(10));