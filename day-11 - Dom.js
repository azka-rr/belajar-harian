// Day 11 - DOM Manipulation

// 1. Mengambil elemen
const judul = document.getElementById("judul");
const semuaParagraf = document.querySelectorAll(".deskripsi");
const daftar = document.querySelector("#daftar");

// 2. Mengubah isi & style
judul.style.color = "teal";
semuaParagraf[0].textContent = "Paragraf pertama sudah diubah lewat JS.";

// 3. Event listener: klik tombol untuk ubah judul
const btnUbah = document.getElementById("btn-ubah");
btnUbah.addEventListener("click", () => {
  judul.textContent = "Judul berubah!";
  judul.classList.toggle("aktif");
});

// 4. Membuat elemen baru dan menambahkannya ke halaman
let counter = 1;
const btnTambah = document.getElementById("btn-tambah");
btnTambah.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = `Item ke-${counter}`;
  daftar.appendChild(li);
  counter++;
});

// 5. Menghapus elemen saat item diklik
daftar.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});