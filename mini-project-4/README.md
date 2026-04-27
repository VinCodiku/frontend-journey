# Mini Project 4: Chalistenics Tracker

Aplikasi pelacak latihan kalistenik berbasis web yang ringan, simpel, dan futuristik. Dibuat khusus untuk memantau progres latihan harian dengan fokus pada kecepatan performa, bahkan di perangkat dengan spesifikasi terbatas.

## 🌟 Fitur Utama
- **Tambah Data (Create)**: Input nama latihan dan jumlah repetisi dengan mudah.
- **Tampilkan Data (Read)**: Daftar latihan ditampilkan secara real-time dengan tampilan bersih.
- **Ubah Data (Update)**: Fitur edit untuk memperbaiki nama latihan atau jumlah reps tanpa hapus data lama.
- **Hapus Data (Delete)**: Menghapus data spesifik menggunakan logika filter yang efisien.
- **Penyimpanan Lokal**: Data tersimpan di `localStorage` browser, jadi progresmu tidak hilang meski halaman di-refresh.


## 🚀 Teknologi yang Digunakan
- **HTML5**: Struktur semantik yang rapi.
- **CSS3**: Menggunakan Custom Properties (Variables), Flexbox, dan estetika Dark Mode.
- **JavaScript (ES6+)**: Manipulasi DOM, penanganan JSON, dan Array Methods (`filter`, `find`, `unshift`).
- **Icons**: [Feather Icons](https://feathericons.com/).
- **Fonts**: Montserrat & Poppins via Google Fonts.

## 📸 Logika Dibalik Layar
Aplikasi ini menjalankan siklus **CRUD** yang optimal:
1. **Logika Unshift**: Data terbaru selalu muncul di urutan paling atas.
2. **Penyimpanan JSON**: Mengubah objek JavaScript menjadi string agar bisa disimpan di memori browser.
3. **ID Unik**: Menggunakan `Date.now()` untuk memastikan setiap baris latihan punya identitas yang berbeda.

## 🛠️ Cara Penggunaan
1. Download atau Clone repositori ini.
2. Buka file `index.html` di browser favoritmu.
3. Mulai catat progres latihanmu!

## 🧠 Pelajaran Baru (Key Learnings)
Dalam proyek ini, saya berhasil memecahkan tantangan:
1. Menerapkan **CRUD** dengan efisien menggunakan JavaScript murni tanpa framework.
2. Mengelola data dengan **localStorage** untuk memastikan data tetap ada meskipun halaman di-refresh.
3. Melakukan **DOM Cleansing** (`innerHTML = ""`) sebelum merender data baru agar aplikasi tidak tumpang tindih.   
4. Menggunakan **Array Methods** untuk memanipulasi data dengan cara yang lebih bersih dan efisien.
5. Menerapkan desain yang responsif dan estetis dengan CSS3, termasuk penggunaan variabel untuk memudahkan pengelolaan tema.

---
*Created with by [VinCodiku](https://github.com/VinCodiku)*
*Dibuat sebagai bagian dari perjalanan saya belajar HTML, CSS3, dan JavaScript*