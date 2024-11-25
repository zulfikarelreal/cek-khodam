const namaUser = document.getElementById("nama-user");
const cekButton = document.getElementById("cek-button");
const resultText = document.getElementById("result-text");

// kumpulan data array khodam
let dataKhodam = [
  "kodok zuma",
  "hellhound",
  "nemesis berak",
  "windah botak",
  "kunti bogel",
  "roro jonggrang",
  "buaya putih",
];

// tombol cek akan bereaksi setelah di klik dengan function(e)
cekButton.addEventListener("click", function (e) {
  e.preventDefault();

  let nama = namaUser.value;

  if (nama === "") {
    resultText.textContent = "Silakan masukkan nama Anda!";
  } else {
    let randomIndex = Math.floor(Math.random() * dataKhodam.length);
    let randomKhodam = dataKhodam[randomIndex];

    resultText.textContent = `Khodam ${nama} adalah "${randomKhodam}"`; // output
    namaUser.value = ""; // kolom input akan kosong setelah klik tombol cek
  }
});
