## Instruksi Instalasi dan Menjalankan Aplikasi

1. **Clone Repository**
   Clone repository aplikasi ini dari GitHub dengan perintah berikut:

   ```bash
   git clone https://github.com/raflytch/React-Car-Management-Fe
   ```

2. **Masuk ke Direktori**
   Pindah ke direktori proyek yang baru saja di-clone:

   ```bash
   cd React-Car-Management-Fe
   ```

3. **Setup Environment Variables**
   Buat file `.env` di root proyek berdasarkan contoh yang disediakan di `.env.example`. Masukkan variabel backend URL Anda sebagai berikut:

   ```
   VITE_BACKEND_URI=[URL-backend-Anda]
   ```

4. **Install Dependencies**
   Install dependensi yang diperlukan oleh aplikasi dengan menggunakan **npm** atau **yarn**:

   ```bash
   npm install
   # atau jika menggunakan yarn
   yarn install
   ```

5. **Menjalankan Aplikasi**
   Jalankan aplikasi menggunakan Vite:

   ```bash
   npm run dev
   # atau jika menggunakan yarn
   yarn dev
   ```

6. **Akses Aplikasi**
   Setelah berhasil dijalankan, buka aplikasi di browser dengan mengunjungi [http://localhost:5173](http://localhost:5173) atau URL yang diberikan oleh Vite.

---

## Deskripsi Aplikasi

Aplikasi **Car Management** memungkinkan pengguna untuk mengelola data mobil dengan fitur yang mencakup penambahan, pengeditan, dan penghapusan data mobil. Aplikasi ini dibangun dengan React, dan mengikuti struktur **Atomic Design** untuk komponen, serta memanfaatkan konteks, hooks, dan layanan API untuk pengelolaan data.

---

## Struktur Folder

**Berikut deskripsi folder utama:**

- **public**: Menyimpan berkas-berkas publik seperti `index.html`, ikon, dan manifest yang diperlukan untuk pengaturan dasar aplikasi web.

- **src**: Direktori utama berisi kode sumber aplikasi.
  - **assets**: Folder ini digunakan untuk menyimpan gambar, ikon, dan berkas statis lain yang digunakan di seluruh aplikasi.
  - **components**: Menyimpan komponen-komponen UI, yang dibagi berdasarkan struktur **Atomic Design**:
    - **elements**: Komponen UI terkecil (misalnya tombol, input, dan link) yang digunakan di seluruh aplikasi.
    - **fragments**: Komponen yang terdiri dari beberapa elemen, seperti form atau kumpulan elemen yang lebih kompleks yang dibentuk menjadi bagian yang dapat digunakan kembali.
  - **contexts**: Tempat penyimpanan konteks (state global) untuk data yang dapat diakses di seluruh aplikasi.
  - **hooks**: Custom hooks yang digunakan untuk logika umum yang dapat digunakan ulang di berbagai komponen.
  - **pages**: Folder ini menyimpan halaman utama aplikasi. Dibagi menjadi:
    - **admin**: Halaman-halaman khusus admin untuk manajemen data mobil.
    - **users**: Halaman-halaman khusus pengguna untuk melihat data mobil.
  - **services**: Menyimpan fungsi untuk pengambilan data dari API (fetch API).
  - **App.jsx**: Komponen utama yang mengatur rute dan struktur aplikasi.
  - **main.jsx**: Berkas utama yang merender aplikasi ke dalam DOM.

---

## Legacy Penggunaan Komponen

```javascript
// src/App.jsx
import React from "react";

// Komponen utama aplikasi Car Management
const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Car Management</h1>
    </div>
  );
};

export default App;
```

> **Legacy Note**: Komponen `App` ini menjadi entry point utama yang merender elemen root dari aplikasi **Car Management**. Struktur dan styling dapat disesuaikan untuk menampilkan navigasi, halaman, dan komponen tambahan sesuai kebutuhan aplikasi.

Komponen ini menampilkan judul aplikasi **Car Management** sebagai elemen utama halaman dengan style kelas yang dapat disesuaikan dengan TailwindCSS.

---

## Legacy Penggunaan Custom Hooks

> **Legacy Note**: Custom hooks dalam aplikasi ini harus diawali dengan kata `use`, seperti `useLogin`, `useFetchData`, atau `useAuth`. Penamaan ini mengikuti konvensi React untuk hooks dan memastikan bahwa kode lebih mudah dipahami serta konsisten dengan pola hooks pada umumnya.

Custom hooks ini dapat dibuat di dalam folder `hooks` dan digunakan untuk menangani logika yang dapat dipakai kembali di berbagai komponen.

---
