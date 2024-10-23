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

// Fungsi untuk menampilkan halaman Materi
function showMateri() {
    window.location.href = 'materials.html'; // Redirect to the materials page
}

// Fungsi untuk menampilkan halaman Question
function showQuiz() {
    window.location.href = 'question.html'; // Redirect to the quiz page
}

function loadQuiz(subject) {
    let quizContent = '';
    
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
    
    document.getElementById('quizContent').innerHTML = quizContent;
    document.getElementById('quizContent').classList.remove('hidden'); // Tampilkan quizContent setelah user memilih
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
    simpanProgress(`Latihan ${materi}`); }
}