// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_DOMAIN",
    databaseURL: "https://YOUR_DATABASE.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Simpan progress di localStorage
function simpanProgress(bab) {
    let progress = JSON.parse(localStorage.getItem('progress')) || [];
    if (!progress.includes(bab)) {
        progress.push(bab);
        localStorage.setItem('progress', JSON.stringify(progress));
    }
}

// Tampilkan progress
function tampilkanProgress() {
    let progress = JSON.parse(localStorage.getItem('progress')) || [];
    alert("Bab yang sudah selesai: " + progress.join(', '));
}

// Fungsi untuk menampilkan Home
function showHome() {
    document.getElementById('home').classList.add('active');
    document.getElementById('home').classList.remove('hidden');
    document.getElementById('materi').classList.add('hidden');
    document.getElementById('latihan').classList.add('hidden');
}

// Fungsi untuk menampilkan Materi
function showMateri() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('materi').classList.add('active');
    document.getElementById('materi').classList.remove('hidden');
    document.getElementById('latihan').classList.add('hidden');
}

// Fungsi untuk menampilkan Latihan
function showLatihan() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('materi').classList.add('hidden');
    document.getElementById('latihan').classList.add('active');
    document.getElementById('latihan').classList.remove('hidden');
}

// Fungsi untuk memuat pelajaran dan materi
function loadPelajaran() {
    const pelajaran = document.getElementById('pilihPelajaran').value;
    const materiSelect = document.getElementById('pilihMateri');
    materiSelect.innerHTML = ''; // Kosongkan opsi sebelumnya

    let materiOptions = [];

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

    // Tambahkan opsi materi ke dropdown
    materiOptions.forEach((option) => {
        let opt = document.createElement('option');
        opt.value = option.value;
        opt.text = option.text;
        materiSelect.add(opt);
    });

    loadMateri();
}

// Fungsi untuk memuat materi yang dipilih
function loadMateri() {
    const materi = document.getElementById('pilihMateri').value;
    let materiContent = '';
    
    switch(materi) {
        case 'derivatif':
            materiContent = `
                <h3>Materi Matematika: Derivatif</h3>
                <p>Penjelasan dasar tentang turunan dan aturan derivatif.</p>
            `;
            break;
        case 'integral':
            materiContent = `
                <h3>Materi Matematika: Integral</h3>
                <p>Penjelasan dasar tentang integral dan konsep-konsep terkait.</p>
            `;
            break;
        case 'hukumNewton':
            materiContent = `
                <h3>Materi Fisika: Hukum Newton</h3>
                <p>Penjelasan tentang Hukum Newton dan aplikasinya.</p>
            `;
            break;
        case 'gerakParabola':
            materiContent = `
                <h3>Materi Fisika: Gerak Parabola</h3>
                <p>Penjelasan tentang gerak parabola dan contoh aplikasinya.</p>
            `;
            break;
        case 'reaksiKimia':
            materiContent = `
                <h3>Materi Kimia: Reaksi Kimia</h3>
                <p>Penjelasan tentang reaksi kimia dan perubahan materi.</p>
            `;
            break;
        case 'ikatanKimia':
            materiContent = `
                <h3>Materi Kimia: Ikatan Kimia</h3>
                <p>Penjelasan tentang jenis-jenis ikatan kimia dan contohnya.</p>
            `;
            break;
    }

    document.getElementById('materiContent').innerHTML = materiContent;
    loadSoal(materi);
}

// Fungsi untuk memuat soal berdasarkan materi
function loadSoal(materi) {
    let quizContainer = document.getElementById('quiz');
    let soalMatematikaDerivatif = [
        { question: "1. Berapakah turunan dari f(x) = 3x²?", options: ["6x", "3x", "6", "x"] },
        { question: "2. Berapakah integral dari f(x) = x?", options: ["x²/2", "x", "1", "x²"] }
    ];

    let soalMatematikaIntegral = [
        { question: "1. Apa hasil integral dari f(x) = 2x?", options: ["x²", "2x", "x² + C", "2x + C"] },
        { question: "2. Berapakah nilai integral dari x dx?", options: ["x²/2 + C", "2x", "x + C", "x²"] }
    ];

    let soalFisikaHukumNewton = [
        { question: "1. Apa bunyi Hukum Newton pertama?", options: ["Inersia", "Aksi-Reaksi", "Gravitasi", "Massa"] },
        { question: "2. Apa satuan SI untuk gaya?", options: ["Newton", "Pascal", "Joule", "Watt"] }
    ];

    let soalFisikaGerakParabola = [
        { question: "1. Apa rumus kecepatan awal dalam gerak parabola?", options: ["v₀ = √(2gh)", "v₀ = u + at", "v₀ = u²", "v₀ = gt"] },
        { question: "2. Sudut optimal untuk mencapai jarak maksimum dalam gerak parabola adalah?", options: ["45°", "60°", "30°", "90°"] }
    ];

    let soalKimiaReaksiKimia = [
        { question: "1. Apa simbol kimia untuk air?", options: ["H₂O", "CO₂", "O₂", "N₂"] },
        { question: "2. Apa jenis reaksi kimia saat zat dibakar?", options: ["Eksoterm", "Endoterm", "Katalis", "Redoks"] }
    ];

    let soalKimiaIkatanKimia = [
        { question: "1. Apa jenis ikatan yang menghubungkan atom hidrogen dan oksigen dalam air?", options: ["Ikatan Kovalen", "Ikatan Ion", "Ikatan Hidrogen", "Ikatan Logam"] },
        { question: "2. Apa nama proses perubahan zat padat langsung menjadi gas?", options: ["Sublimasi", "Kondensasi", "Evaporasi", "Pembekuan"] }
    ];

    let soal;  // Variabel untuk menampung soal sesuai materi yang dipilih

    // Pilih soal berdasarkan materi
    switch(materi) {
        case 'derivatif':
            soal = soalMatematikaDerivatif;
            break;
        case 'integral':
            soal = soalMatematikaIntegral;
            break;
        case 'hukumNewton':
            soal = soalFisikaHukumNewton;
            break;
        case 'gerakParabola':
            soal = soalFisikaGerakParabola;
            break;
        case 'reaksiKimia':
            soal = soalKimiaReaksiKimia;
            break;
        case 'ikatanKimia':
            soal = soalKimiaIkatanKimia;
            break;
    }

    quizContainer.innerHTML = ''; // Kosongkan soal sebelumnya

    soal.forEach((item, index) => {
        let soalHTML = `<p>${item.question}</p>`;
        item.options.forEach((option, i) => {
            soalHTML += `
                <input type="radio" name="soal${index}" value="${String.fromCharCode(65 + i)}">
                <label>${option}</label><br>
            `;
        });
        quizContainer.innerHTML += soalHTML;
    });
}

// Fungsi untuk mengecek jawaban kuis
function cekJawaban() {
    let correctAnswers;
    const materi = document.getElementById('pilihMateri').value;

    switch (materi) {
        case 'derivatif':
            correctAnswers = ['A', 'A']; // Jawaban benar untuk Derivatif
            break;
        case 'integral':
            correctAnswers = ['A', 'A']; // Jawaban benar untuk Integral
            break;
        case 'hukumNewton':
            correctAnswers = ['A', 'A']; // Jawaban benar untuk Hukum Newton
            break;
        case 'gerakParabola':
            correctAnswers = ['A', 'A']; // Jawaban benar untuk Gerak Parabola
            break;
        case 'reaksiKimia':
            correctAnswers = ['A', 'A']; // Jawaban benar untuk Reaksi Kimia
            break;
        case 'ikatanKimia':
            correctAnswers = ['A', 'A']; // Jawaban benar untuk Ikatan Kimia
            break;
    }

    let userAnswers = document.querySelectorAll('input[type="radio"]:checked');
    let totalSoal = correctAnswers.length;
    
    // Jika jumlah jawaban yang diisi tidak sesuai dengan jumlah soal, munculkan pesan error
    if (userAnswers.length < totalSoal) {
        alert("Anda harus menjawab semua soal sebelum melakukan submit!");
        return;
    }

    let correct = 0;
    let wrongQuestions = [];  // Untuk menyimpan nomor soal yang salah

    // Cek setiap jawaban
    userAnswers.forEach((answer, index) => {
        if (answer.value === correctAnswers[index]) {
            correct++;
        } else {
            wrongQuestions.push(index + 1);  // Simpan nomor soal yang salah
        }
    });

    // Menampilkan pop-up hasil
    if (wrongQuestions.length === 0) {
        alert(`Selamat, semua jawaban benar! Anda menjawab ${correct} dari ${totalSoal} soal dengan benar.`);
    } else {
        alert(`Anda menjawab ${correct} dari ${totalSoal} soal dengan benar.\nSoal nomor yang salah: ${wrongQuestions.join(', ')}`);
    }

    // Simpan progress jika semua soal dijawab benar
    if (correct === totalSoal) {
        simpanProgress(`Latihan ${materi}`);
    }
}

