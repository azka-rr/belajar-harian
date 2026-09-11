// Day 2 - Operators & Conditionals

// 1. Arithmetic operators
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1 (sisa bagi)

// 2. Comparison operators
console.log(a > b);   // true
console.log(a === 10); // true (strict equal, cek nilai + tipe)
console.log(a == "10"); // true (loose equal, cuma cek nilai)

// 3. Logical operators
let isLoggedIn = true;
let hasAccess = false;

console.log(isLoggedIn && hasAccess); // false (harus dua-duanya true)
console.log(isLoggedIn || hasAccess); // true (salah satu true saja cukup)

// 4. Conditional (if-else)
let nilai = 85;

if (nilai >= 90) {
  console.log("Grade: A");
} else if (nilai >= 80) {
  console.log("Grade: B");
} else if (nilai >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}