// Day 9 - Higher-Order Functions & Callbacks

// 1. Callback function sederhana
function proses(angka, callback) {
  return callback(angka);
}

function kuadrat(n) {
  return n * n;
}

console.log(proses(5, kuadrat)); // 25

// 2. Callback pakai arrow function langsung
console.log(proses(4, (n) => n * n * n)); // 64 (pangkat 3)

// 3. Array method yang menerima function (higher-order)
const angka = [1, 2, 3, 4, 5];

// map - transformasi tiap elemen
const dikali2 = angka.map((n) => n * 2);
console.log(dikali2); // [2,4,6,8,10]

// filter - saring elemen
const lebihDari2 = angka.filter((n) => n > 2);
console.log(lebihDari2); // [3,4,5]

// reduce - akumulasi jadi satu nilai
const total = angka.reduce((acc, n) => acc + n, 0);
console.log(total); // 15

// 4. Function yang mengembalikan function (fungsi sebagai return value)
function buatPengali(pengali) {
  return function (angka) {
    return angka * pengali;
  };
}

const kali3 = buatPengali(3);
console.log(kali3(10)); // 30

// 5. Contoh praktis: urutkan array of objects pakai callback
const produk = [
  { nama: "Baju", harga: 150000 },
  { nama: "Sepatu", harga: 500000 },
  { nama: "Topi", harga: 75000 },
];

const urutMurah = produk.sort((a, b) => a.harga - b.harga);
console.log(urutMurah);