// Day 5 - Objects

// 1. Membuat object
const mahasiswa = {
  nama: "Azka",
  umur: 20,
  jurusan: "Informatika",
  isActive: true,
};
console.log(mahasiswa);

// 2. Akses properti object
console.log(mahasiswa.nama);       // dot notation
console.log(mahasiswa["jurusan"]); // bracket notation

// 3. Menambah / mengubah properti
mahasiswa.semester = 5;       // tambah properti baru
mahasiswa.umur = 21;          // ubah nilai
console.log(mahasiswa);

// 4. Menghapus properti
delete mahasiswa.isActive;
console.log(mahasiswa);

// 5. Object dengan method (function di dalam object)
const kalkulator = {
  a: 10,
  b: 5,
  tambah() {
    return this.a + this.b;
  },
  kurang() {
    return this.a - this.b;
  },
};
console.log(kalkulator.tambah()); // 15
console.log(kalkulator.kurang()); // 5

// 6. Looping object dengan for...in
for (let key in mahasiswa) {
  console.log(`${key}: ${mahasiswa[key]}`);
}