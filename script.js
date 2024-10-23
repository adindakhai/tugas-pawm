// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",  // API key yang digunakan untuk otentikasi aplikasi dengan Firebase
    authDomain: "YOUR_DOMAIN",  // Domain otentikasi Firebase
    databaseURL: "https://YOUR_DATABASE.firebaseio.com",  // URL database Firebase
    projectId: "YOUR_PROJECT_ID",  // ID proyek Firebase
    storageBucket: "YOUR_STORAGE_BUCKET",  // Storage bucket untuk menyimpan file
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",  // ID pengirim pesan Firebase Cloud Messaging
    appId: "YOUR_APP_ID"  // ID aplikasi Firebase
};
firebase.initializeApp(firebaseConfig);  // Inisialisasi aplikasi Firebase dengan konfigurasi di atas
const db = firebase.database();  // Referensi ke database Firebase

// Fungsi untuk menyimpan progress pengguna di localStorage
function simpanProgress(bab) {
    let progress = JSON.parse(localStorage.getItem('progress')) || [];  // Ambil data progress dari localStorage atau buat array kosong
    if (!progress.includes(bab)) {  // Jika progress belum mencakup bab ini
        progress.push(bab);  // Tambahkan bab ke array progress
        localStorage.setItem('progress', JSON.stringify(progress));  // Simpan progress yang telah diupdate ke localStorage
    }
}

// Fungsi untuk menampilkan progress yang sudah disimpan
function tampilkanProgress() {
    let progress = JSON.parse(localStorage.getItem('progress')) || [];  // Ambil data progress dari localStorage
    alert("Bab yang sudah selesai: " + progress.join(', '));  // Tampilkan progress dalam bentuk alert
}

// Fungsi untuk menampilkan halaman Home
function showHome() {
    document.getElementById('home').classList.add('active');  // Tambahkan kelas 'active' ke elemen dengan id 'home'
    document.getElementById('home').classList.remove('hidden');  // Hapus kelas 'hidden' untuk menampilkan elemen home
    document.getElementById('materi').classList.add('hidden');  // Sembunyikan elemen materi
    document.getElementById('latihan').classList.add('hidden');  // Sembunyikan elemen latihan
}

// Fungsi untuk menampilkan halaman Materi
function showMateri() {
    document.getElementById('home').classList.add('hidden');  // Sembunyikan elemen home
    document.getElementById('materi').classList.add('active');  // Tampilkan elemen materi dengan menambahkan kelas 'active'
    document.getElementById('materi').classList.remove('hidden');  // Hapus kelas 'hidden' dari elemen materi
    document.getElementById('latihan').classList.add('hidden');  // Sembunyikan elemen latihan
}

// Fungsi untuk menampilkan halaman Latihan
function showLatihan() {
    document.getElementById('home').classList.add('hidden');  // Sembunyikan elemen home
    document.getElementById('materi').classList.add('hidden');  // Sembunyikan elemen materi
    document.getElementById('latihan').classList.add('active');  // Tampilkan elemen latihan dengan menambahkan kelas 'active'
    document.getElementById('latihan').classList.remove('hidden');  // Hapus kelas 'hidden' dari elemen latihan
}

// Fungsi untuk memuat pelajaran dan materi yang relevan
function loadPelajaran() {
    const pelajaran = document.getElementById('pilihPelajaran').value;  // Ambil pelajaran yang dipilih dari dropdown
    const materiSelect = document.getElementById('pilihMateri');  // Referensi ke dropdown materi
    materiSelect.innerHTML = '';  // Kosongkan opsi sebelumnya di dropdown materi

    let materiOptions = [];  // Buat array untuk menyimpan opsi materi

    // Jika pelajaran adalah matematika, tambahkan opsi materi terkait matematika
    if (pelajaran === 'matematika') {
        materiOptions = [
            { value: 'derivatif', text: 'Derivatif' },
            { value: 'integral', text: 'Integral' }
        ];
    } else if (pelajaran === 'fisika') {
        materiOptions = [
            { value: 'hukumNewton', text: 'Hukum Newton' },
            { value: 'gerakParabola', text: 'Gerak Parabola' }
        ];
    } else if (pelajaran === 'kimia') {
        materiOptions = [
            { value: 'reaksiKimia', text: 'Reaksi Kimia' },
            { value: 'ikatanKimia', text: 'Ikatan Kimia' }
        ];
    }

    // Tambahkan setiap opsi materi ke dropdown materi
    materiOptions.forEach((option) => {
        let opt = document.createElement('option');  // Buat elemen option baru
        opt.value = option.value;  // Setel nilai option
        opt.text = option.text;  // Setel teks yang akan ditampilkan di dropdown
        materiSelect.add(opt);  // Tambahkan option ke dropdown
    });

    loadMateri();  // Panggil fungsi loadMateri untuk menampilkan materi yang dipilih
}

// Fungsi untuk menampilkan halaman Materi
function showMateri() {
    window.location.href = 'materials.html';  // Arahkan pengguna ke halaman materials.html
}

// Fungsi untuk menampilkan halaman Kuis
function showQuiz() {
    window.location.href = 'question.html';  // Arahkan pengguna ke halaman question.html
}

// Fungsi untuk memuat kuis berdasarkan subjek yang dipilih
function loadQuiz(subject) {
    let quizContent = '';  // Variabel untuk menyimpan konten kuis

    // Tentukan kuis berdasarkan subjek yang dipilih
    switch(subject) {
        case 'matematika':
            quizContent = `
                <h3>Mathematics Quiz</h3>
                <p>1. What is the derivative of f(x) = 3x²?</p>
                <input type="radio" name="q1" value="A"> 6x<br>
                <input type="radio" name="q1" value="B"> 3x<br>
                <input type="radio" name="q1" value="C"> 6<br>
                <input type="radio" name="q1" value="D"> x<br><br>
                <p>2. What is the integral of f(x) = x?</p>
                <input type="radio" name="q2" value="A"> x²/2<br>
                <input type="radio" name="q2" value="B"> x<br>
                <input type="radio" name="q2" value="C"> 1<br>
                <input type="radio" name="q2" value="D"> x²<br><br>
                <button onclick="cekJawaban()">Submit</button>
            `;
            break;
        case 'fisika':
            quizContent = `
                <h3>Physics Quiz</h3>
                <p>1. What is Newton's first law?</p>
                <input type="radio" name="q1" value="A"> Inertia<br>
                <input type="radio" name="q1" value="B"> Action-Reaction<br>
                <input type="radio" name="q1" value="C"> Gravity<br>
                <input type="radio" name="q1" value="D"> Mass<br><br>
                <p>2. What is the SI unit of force?</p>
                <input type="radio" name="q2" value="A"> Newton<br>
                <input type="radio" name="q2" value="B"> Pascal<br>
                <input type="radio" name="q2" value="C"> Joule<br>
                <input type="radio" name="q2" value="D"> Watt<br><br>
                <button onclick="cekJawaban()">Submit</button>
            `;
            break;
        case 'kimia':
            quizContent = `
                <h3>Chemistry Quiz</h3>
                <p>1. What is the chemical symbol for water?</p>
                <input type="radio" name="q1" value="A"> H₂O<br>
                <input type="radio" name="q1" value="B"> CO₂<br>
                <input type="radio" name="q1" value="C"> O₂<br>
                <input type="radio" name="q1" value="D"> N₂<br><br>
                <p>2. What type of reaction occurs when a substance is burned?</p>
                <input type="radio" name="q2" value="A"> Exothermic<br>
                <input type="radio" name="q2" value="B"> Endothermic<br>
                <input type="radio" name="q2" value="C"> Catalysis<br>
                <input type="radio" name="q2" value="D"> Redox<br><br>
                <button onclick="cekJawaban()">Submit</button>
            `;
            break;
    }
    
    document.getElementById('quizContent').innerHTML = quizContent;  // Tampilkan konten kuis di elemen dengan id 'quizContent'
    document.getElementById('quizContent').classList.remove('hidden'); // Hapus kelas 'hidden' untuk menampilkan kuis setelah user memilih subjek
}

// Fungsi untuk mengecek jawaban kuis yang diberikan oleh pengguna
function cekJawaban() {
    let correctAnswers;  // Variabel untuk menyimpan jawaban yang benar
    const materi = document.getElementById('pilihMateri').value;  // Ambil materi yang dipilih oleh pengguna dari dropdown

    // Tentukan jawaban yang benar berdasarkan materi yang dipilih
    switch (materi) {
        case 'derivatif':
            correctAnswers = ['A', 'A']; // Jawaban benar untuk materi Derivatif
            break;
        case 'integral':
            correctAnswers = ['A', 'A']; // Jawaban benar untuk materi Integral
            break;
        case 'hukumNewton':
            correctAnswers = ['A', 'A']; // Jawaban benar untuk materi Hukum Newton
            break;
        case 'gerakParabola':
            correctAnswers = ['A', 'A']; // Jawaban benar untuk materi Gerak Parabola
            break;
        case 'reaksiKimia':
            correctAnswers = ['A', 'A']; // Jawaban benar untuk materi Reaksi Kimia
            break;
        case 'ikatanKimia':
            correctAnswers = ['A', 'A']; // Jawaban benar untuk materi Ikatan Kimia
            break;
    }

    let userAnswers = document.querySelectorAll('input[type="radio"]:checked');  // Ambil semua jawaban yang dipilih oleh pengguna
    let totalSoal = correctAnswers.length;  // Tentukan jumlah total soal

    // Jika jumlah jawaban yang diisi tidak sesuai dengan jumlah soal, munculkan pesan error
    if (userAnswers.length < totalSoal) {
        alert("Anda harus menjawab semua soal sebelum melakukan submit!");  // Tampilkan pesan bahwa semua soal harus dijawab
        return;  // Keluar dari fungsi jika ada soal yang belum dijawab
    }

    let correct = 0;  // Variabel untuk menghitung jumlah jawaban yang benar
    let wrongQuestions = [];  // Array untuk menyimpan nomor soal yang salah

    // Loop melalui setiap jawaban yang dipilih oleh pengguna
    userAnswers.forEach((answer, index) => {
        if (answer.value === correctAnswers[index]) {  // Jika jawaban benar
            correct++;  // Tambahkan satu ke variabel correct
        } else {
            wrongQuestions.push(index + 1);  // Jika salah, tambahkan nomor soal yang salah ke array
        }
    });

    // Tampilkan hasil dalam pop-up
    if (wrongQuestions.length === 0) {  // Jika semua jawaban benar
        alert(`Selamat, semua jawaban benar! Anda menjawab ${correct} dari ${totalSoal} soal dengan benar.`);  // Tampilkan pesan selamat
    } else {  // Jika ada jawaban yang salah
        alert(`Anda menjawab ${correct} dari ${totalSoal} soal dengan benar.\nSoal nomor yang salah: ${wrongQuestions.join(', ')}`);  // Tampilkan soal yang salah
    }

    // Simpan progress jika semua soal dijawab benar
    if (correct === totalSoal) {
        simpanProgress(`Latihan ${materi}`);  // Panggil fungsi untuk menyimpan progress ke localStorage
    }
}
