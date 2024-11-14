// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuqUPS58ExVwVTxzzSCTeYmTh7w397j9M",
  authDomain: "learnbyheart-c8a90.firebaseapp.com",
  projectId: "learnbyheart-c8a90",
  storageBucket: "learnbyheart-c8a90.appspot.com",
  messagingSenderId: "518367347168",
  appId: "1:518367347168:web:7498d04507e98db21aab85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Helper function to validate email
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

// Helper function to validate password
function isValidPassword(password) {
  // Password should be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one number
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordPattern.test(password);
}

// Handle registration
function handleRegister(event) {
  event.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('register-confirm-password').value;

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!isValidPassword(password)) {
    alert('Password must be at least 8 characters, include at least one uppercase letter, one lowercase letter, and one number.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Registration successful:', userCredential);
      // User registered successfully, redirect to index.html
      window.location.href = 'index.html';
    })
    .catch((error) => {
      alert(`Registration failed: ${error.message}`);
    });
}

// Fungsi untuk menangani login
function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (!isValidEmail(email)) {
    alert('Email tidak valid. Masukkan email yang benar.');
    return;
  }

  // Proses login
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Login berhasil:', userCredential);
      localStorage.setItem("userLoggedIn", "true");  // Simpan status login
      window.location.href = 'index.html';           // Redirect ke halaman utama
    })
    .catch((error) => {
      console.error('Login gagal:', error);
      alert(`Login gagal: ${error.message}`);
    });
}

// Pastikan form login mengaktifkan handleLogin saat submit
document.getElementById('login').addEventListener('submit', handleLogin);
