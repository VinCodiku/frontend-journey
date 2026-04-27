// D O C U M E N T - O B J E C T - M O D E L
const sectionSoal = document.querySelector(".soal");
const tampilanSoal = document.querySelector(".tampilan-soal");
const daftarJawaban = document.querySelector(".daftar-jawaban");

// D A T A - S O A L
const dataSoal = [
    {
        soal: "Apa itu konsep  'Time Value Of Money' secara sederhana ?",
        jawaban: [
            "Uang sekarang lebih berharga daripada uang di masa depan.",
            "Uang di masa depan lebih berharga daripada uang sekarang.",
            "Uang memiliki nilai yang sama di masa sekarang dan masa depan.",
            "Uang tidak memiliki nilai yang berubah seiring waktu."
        ],
        jawabanBenar: "Uang sekarang lebih berharga daripada uang di masa depan."
    },
    {
        soal: "Apa yang dimaksud dengan 'Present Value' dalam konsep 'Time Value Of Money' ?",
        jawaban: [
            "Nilai uang di masa depan yang dihitung ke nilai saat ini.",
            "Nilai uang saat ini yang dihitung ke nilai di masa depan.",
            "Nilai uang yang tidak berubah seiring waktu.",
            "Nilai uang yang hanya berlaku untuk transaksi tunai."
        ],
        jawabanBenar: "Nilai uang di masa depan yang dihitung ke nilai saat ini."
    },
    {
        soal: "Apa yang dimaksud dengan 'Future Value' dalam konsep 'Time Value Of Money' ?",
        jawaban: [
            "Nilai uang di masa depan yang dihitung ke nilai saat ini.",
            "Nilai uang saat ini yang dihitung ke nilai di masa depan.",
            "Nilai uang yang tidak berubah seiring waktu.",
            "Nilai uang yang hanya berlaku untuk transaksi tunai."
        ],
        jawabanBenar: "Nilai uang saat ini yang dihitung ke nilai di masa depan."   
    },
    {
        soal: "Apa yang dimaksud dengan 'Discount Rate' dalam konsep 'Time Value Of Money' ?",
        jawaban: [
            "Tingkat bunga yang digunakan untuk menghitung nilai sekarang dari uang di masa depan.",
            "Tingkat bunga yang digunakan untuk menghitung nilai masa depan dari uang saat ini.",
            "Tingkat bunga yang tidak berubah seiring waktu.",
            "Tingkat bunga yang hanya berlaku untuk transaksi tunai."
        ],
        jawabanBenar: "Tingkat bunga yang digunakan untuk menghitung nilai sekarang dari uang di masa depan."
    },
    {
        soal: "Apa yang dimaksud dengan 'Compounding' dalam konsep 'Time Value Of Money' ?",
        jawaban: [
            "Proses di mana bunga dihitung pada jumlah pokok dan bunga yang telah diperoleh sebelumnya.",
            "Proses di mana bunga dihitung hanya pada jumlah pokok.",
            "Proses di mana bunga dihitung hanya pada bunga yang telah diperoleh sebelumnya.",
            "Proses di mana bunga tidak dihitung sama sekali."
        ],
        jawabanBenar: "Proses di mana bunga dihitung pada jumlah pokok dan bunga yang telah diperoleh sebelumnya."
    },
    {
        soal: "Apa yang dimaksud dengan 'Annuity' dalam konsep 'Time Value Of Money' ?",
        jawaban: [
            "Serangkaian pembayaran yang dilakukan secara berkala selama periode waktu tertentu.",
            "Serangkaian pembayaran yang dilakukan sekaligus di awal periode.",
            "Serangkaian pembayaran yang dilakukan sekaligus di akhir periode.",
            "Serangkaian pembayaran yang tidak memiliki pola tertentu."
        ],
        jawabanBenar: "Serangkaian pembayaran yang dilakukan secara berkala selama periode waktu tertentu."
    },
    {
        soal: "Apa yang dimaksud dengan 'Perpetuity' dalam konsep 'Time Value Of Money' ?", 
        jawaban: [
            "Serangkaian pembayaran yang dilakukan secara berkala tanpa batas waktu.",
            "Serangkaian pembayaran yang dilakukan secara berkala selama periode waktu tertentu.",
            "Serangkaian pembayaran yang dilakukan sekaligus di awal periode.",
            "Serangkaian pembayaran yang dilakukan sekaligus di akhir periode."
        ],
        jawabanBenar: "Serangkaian pembayaran yang dilakukan secara berkala tanpa batas waktu."
    }, 
    {
        soal: "Apa yang dimaksud dengan 'Net Present Value (NPV)' dalam konsep 'Time Value Of Money' ?",
        jawaban: [
            "Selisih antara nilai sekarang dari arus kas masuk dan nilai sekarang dari arus kas keluar.",
            "Selisih antara nilai masa depan dari arus kas masuk dan nilai masa depan dari arus kas keluar.",
            "Jumlah total arus kas masuk selama periode waktu tertentu.",
            "Jumlah total arus kas keluar selama periode waktu tertentu."
        ],
        jawabanBenar: "Selisih antara nilai sekarang dari arus kas masuk dan nilai sekarang dari arus kas keluar."
    },
    {
        soal: "Apa yang dimaksud dengan 'Internal Rate of Return (IRR)' dalam konsep 'Time Value Of Money' ?",
        jawaban: [
            "Tingkat diskonto yang membuat nilai sekarang dari arus kas masuk sama dengan nilai sekarang dari arus kas keluar.",
            "Tingkat diskonto yang membuat nilai masa depan dari arus kas masuk sama dengan nilai masa depan dari arus kas keluar.",
            "Tingkat diskonto yang membuat jumlah total arus kas masuk sama dengan jumlah total arus kas keluar.",
            "Tingkat diskonto yang tidak memiliki pengaruh terhadap nilai sekarang atau nilai masa depan."
        ],
        jawabanBenar: "Tingkat diskonto yang membuat nilai sekarang dari arus kas masuk sama dengan nilai sekarang dari arus kas keluar."
    },
    {
        soal: "Apa yang dimaksud dengan 'Payback Period' dalam konsep 'Time Value Of Money' ?",
        jawaban: [
            "Periode waktu yang dibutuhkan untuk mendapatkan kembali investasi awal dari arus kas masuk.",
            "Periode waktu yang dibutuhkan untuk mendapatkan kembali investasi awal dari arus kas keluar.",
            "Periode waktu yang dibutuhkan untuk mendapatkan kembali investasi awal dari arus kas masuk dan keluar.",
            "Periode waktu yang tidak memiliki pengaruh terhadap investasi awal."
        ],
        jawabanBenar: "Periode waktu yang dibutuhkan untuk mendapatkan kembali investasi awal dari arus kas masuk."
    }
];

let indexSoal = 0;
let skorSoal = 0;

// F U N G S I - F U N G S I
function tampilkanSoal() {
    // t a m p i l a n - s o a l
    const paketSoal = dataSoal[indexSoal];
    tampilanSoal.textContent = paketSoal.soal;
    daftarJawaban.innerHTML = "";

    // t a m p i l a n - j a w a b a n
    for (let i = 0; i < paketSoal.jawaban.length; i++) {
        // 1. Buat elemen 'li'
        const li = document.createElement("li");
        // 2. Buat variabel untuk jawaban
        const jawaban = paketSoal.jawaban[i];
        // 3. Buat elemen 'input' untuk pilihan ganda
        const inputRadio = document.createElement("input");
        inputRadio.type = "radio";
        inputRadio.id = `jawaban-${i}`;
        inputRadio.name = "jawaban";
        inputRadio.value = jawaban;
        // 4. 'input' dimasukan ke dalam 'li'
        li.appendChild(inputRadio);

        // 5. Buat elemen 'label'
        const label = document.createElement("label");
        label.htmlFor = `jawaban-${i}`;
        // htmlFor => digunakan untuk mengaitkan elemen label dengan elemen input yang memiliki id yang sesuai. Dalam hal ini, setiap label akan terkait dengan input radio yang memiliki id yang sama, sehingga ketika pengguna mengklik label, input radio yang terkait akan dipilih.
        label.textContent = jawaban;
        li.appendChild(label);
        daftarJawaban.appendChild(li);

        inputRadio.addEventListener("change", () => {
            // change => digunakan untuk mendeteksi perubahan pada elemen input, dalam hal ini ketika pengguna memilih salah satu jawaban. Ketika pengguna memilih jawaban, fungsi yang diberikan akan dijalankan untuk memeriksa apakah jawaban yang dipilih benar atau salah dan kemudian melanjutkan ke soal berikutnya atau menampilkan skor akhir jika semua soal telah dijawab.
            if (inputRadio.value === paketSoal.jawabanBenar) {
                skorSoal += 10;
            }

            li.style.backgroundColor = "#ff7a7a"; // Memberikan warna merah pada jawaban yang dipilih, baik itu benar atau salah, untuk memberikan umpan balik visual kepada pengguna bahwa mereka telah memilih jawaban tersebut.

            setTimeout(() => {
                indexSoal++;
                if (indexSoal < dataSoal.length) {
                    tampilkanSoal();
                } else {
                    tampilkanSkor();
                }
            }, 2000); // Jeda 2 detik biar user bisa lihat apa yang dia klik
        });
    }
}

function tampilkanSkor() {
    tampilanSoal.textContent = `Skor Anda: ${skorSoal} / ${dataSoal.length * 10}`;
    daftarJawaban.innerHTML = "";

    if (skorSoal >= 90) {
        const pesan = document.createElement("p");
        pesan.textContent = "Selamat! Anda memiliki pengetahuan yang sangat baik tentang keuangan.";
        daftarJawaban.appendChild(pesan);
    } else if (skorSoal >= 70) {
        const pesan = document.createElement("p");
        pesan.textContent = "Bagus! Anda memiliki pengetahuan yang baik tentang keuangan.";
        daftarJawaban.appendChild(pesan);
    } else if (skorSoal >= 50) {
        const pesan = document.createElement("p");
        pesan.textContent = "Cukup baik! Anda memiliki pengetahuan yang cukup tentang keuangan.";
        daftarJawaban.appendChild(pesan);
    } else {
        const pesan = document.createElement("p");
        pesan.textContent = "Perlu belajar lebih banyak! Anda memiliki pengetahuan yang kurang tentang keuangan.";
        pesan.style.backgroundColor = "#ff7a7a";
        daftarJawaban.appendChild(pesan);
    }

    const tombolRestart = document.createElement("button");
    tombolRestart.textContent = "Restart Quiz";
    tombolRestart.addEventListener("click", () => {
        indexSoal = 0;
        skorSoal = 0;
        tampilkanSoal();
    });

    daftarJawaban.appendChild(tombolRestart);
}

// E V E N T - L I S T E N E R
window.addEventListener("load", () => {
    // load => ketika halaman selesai dimuat, maka fungsi tampilkanSoal() akan dipanggil untuk menampilkan soal pertama kepada pengguna.
    tampilkanSoal();
});