// Day 6 - Loops

// 1. for loop
for (let i = 1; i <= 5; i++) {
  console.log(`Perulangan ke-${i}`);
}

// 2. while loop
let i = 0;
while (i < 3) {
  console.log(`While loop: ${i}`);
  i++;
}

// 3. do...while loop (jalan minimal 1x walau kondisi false)
let j = 10;
do {
  console.log(`Do-while jalan walau j = ${j}`);
} while (j < 5);

// 4. for...of (buat looping array)
const buah = ["Apel", "Jeruk", "Mangga"];
for (const item of buah) {
  console.log(`Buah: ${item}`);
}

// 5. break & continue
for (let k = 1; k <= 10; k++) {
  if (k === 5) continue; // lewati angka 5
  if (k === 8) break;    // stop di angka 8
  console.log(`Angka: ${k}`);
}

// 6. Contoh praktis: cari angka genap dalam array pakai loop
const angka = [3, 8, 12, 7, 4, 9, 6];
const hasilGenap = [];

for (const n of angka) {
  if (n % 2 === 0) {
    hasilGenap.push(n);
  }
}
console.log("Angka genap:", hasilGenap);