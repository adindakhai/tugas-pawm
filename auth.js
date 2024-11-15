// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuqUPS58ExVwVTxzzSCTeYmTh7w397j9M",
  authDomain: "learnbyheart-c8a90.firebaseapp.com",
  projectId: "learnbyheart-c8a90",
  storageBucket: "learnbyheart-c8a90.firebasestorage.app",
  messagingSenderId: "518367347168",
  appId: "1:518367347168:web:7498d04507e98db21aab85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

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
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('register-confirm-password').value;

  // Basic input validation
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

  // Attempt to create a user with the provided email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User registered successfully
      const user = userCredential.user;
      console.log('Registration successful:', user);

      // Save user data to Firestore
      return setDoc(doc(db, 'users', user.uid), {
        name: name,
        email: email,
        uid: user.uid
      });
    })
    .then(() => {
      // Data saved successfully
      alert("Registration successful!");
      window.location.href = 'index.html'; // Redirect to index.html
    })
    .catch((error) => {
      console.error("Error during registration:", error);

      // Handle specific error codes for better user feedback
      if (error.code === 'auth/email-already-in-use') {
        alert("The email address is already in use by another account.");
      } else {
        alert(`Registration failed: ${error.message}`);
      }
    });
}

// Handle login
function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Basic input validation
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Process login
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login successful
      console.log('Login successful:', userCredential);
      window.location.href = 'index.html'; // Redirect to the main page
    })
    .catch((error) => {
      console.error('Login failed:', error);
      
      // Handle specific error codes for better user feedback
      if (error.code === 'auth/user-not-found') {
        alert("No user found with this email. Please register first.");
      } else if (error.code === 'auth/wrong-password') {
        alert("Incorrect password. Please try again.");
      } else {
        alert(`Login failed: ${error.message}`);
      }
    });
}

// Handle logout
window.handleLogout = function handleLogout() {
  signOut(auth)
    .then(() => {
      // Sign-out successful
      console.log('Logout successful');
      window.location.href = 'auth.html'; // Redirect to the login page
    })
    .catch((error) => {
      console.error('Logout failed:', error);
      alert(`Logout failed: ${error.message}`);
    });
}

// Event listener for registration form submission
document.getElementById('register').addEventListener('submit', handleRegister);

// Event listener for login form submission
document.getElementById('login').addEventListener('submit', handleLogin);
