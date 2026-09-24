// Day 10 - Asynchronous JavaScript (Promise & Async/Await)

// 1. Promise dasar
function ambilData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sukses = true;
      if (sukses) {
        resolve("Data berhasil diambil!");
      } else {
        reject("Gagal mengambil data.");
      }
    }, 1000);
  });
}

// 2. Menggunakan .then() dan .catch()
ambilData()
  .then((hasil) => console.log("Then:", hasil))
  .catch((error) => console.log("Catch:", error));

// 3. Async/Await (cara lebih modern & mudah dibaca)
async function prosesData() {
  try {
    console.log("Mulai mengambil data...");
    const hasil = await ambilData();
    console.log("Async/Await:", hasil);
  } catch (error) {
    console.log("Error:", error);
  }
}

prosesData();

// 4. Simulasi beberapa proses async berurutan
function tunggu(detik) {
  return new Promise((resolve) => setTimeout(resolve, detik * 1000));
}

async function urutanProses() {
  console.log("Langkah 1: mulai");
  await tunggu(1);
  console.log("Langkah 2: 1 detik berlalu");
  await tunggu(1);
  console.log("Langkah 3: 2 detik berlalu, selesai");
}

urutanProses();

// 5. Promise.all - jalankan beberapa promise bersamaan
async function jalankanBarengan() {
  const [data1, data2] = await Promise.all([
    Promise.resolve("Data A"),
    Promise.resolve("Data B"),
  ]);
  console.log(data1, data2);
}

jalankanBarengan();