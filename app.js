// --- THIS IS VERY IMPORTANT: Paste your Firebase details here ---
const firebaseConfig = {
  apiKey: "PASTE-YOUR-COPIED-apiKey-HERE",
  authDomain: "YOUR-PROJECT-NAME.firebaseapp.com", // Can be copied from Firebase or left as is
  databaseURL: "PASTE-YOUR-COPIED-databaseURL-HERE",
  projectId: "YOUR-PROJECT-ID", // Can be copied from Firebase or left as is
  storageBucket: "YOUR-PROJECT-NAME.appspot.com", // Can be copied from Firebase or left as is
  messagingSenderId: "1234567890", // Can be copied from Firebase or left as is
  appId: "1:1234567890:web:abcdef123456" // Can be copied from Firebase or left as is
};
// -----------------------------------------------------------------

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// Code required for the app to function (This is not yet complete, it's the first version)
document.addEventListener('DOMContentLoaded', () => {
    
    // For hiding/showing screens
    const homeScreen = document.getElementById('home-screen');
    const loginScreen = document.getElementById('login-screen');
    const registerScreen = document.getElementById('register-screen');
    const ownerScreen = document.getElementById('owner-screen');
    const dashboardScreen = document.getElementById('dashboard-screen');
    const adminScreen = document.getElementById('admin-screen');
    const helpScreen = document.getElementById('help-screen');

    // Function to hide all screens
    function hideAllScreens() {
        homeScreen.style.display = 'none';
        loginScreen.style.display = 'none';
        registerScreen.style.display = 'none';
        ownerScreen.style.display = 'none';
        dashboardScreen.style.display = 'none';
        adminScreen.style.display = 'none';
        helpScreen.style.display = 'none';
    }

    // Home screen buttons
    document.getElementById('show-login-btn').addEventListener('click', () => {
        hideAllScreens();
        loginScreen.style.display = 'block';
    });

    document.getElementById('show-register-btn').addEventListener('click', () => {
        hideAllScreens();
        registerScreen.style.display = 'block';
    });

    document.getElementById('owner-menu-button').addEventListener('click', () => {
        hideAllScreens();
        ownerScreen.style.display = 'block';
    });

    // "Back to Home" links
    document.getElementById('back-to-home-1').addEventListener('click', (e) => {
        e.preventDefault();
        hideAllScreens();
        homeScreen.style.display = 'block';
    });
     document.getElementById('back-to-home-2').addEventListener('click', (e) => {
        e.preventDefault();
        hideAllScreens();
        homeScreen.style.display = 'block';
    });
     document.getElementById('back-to-home-3').addEventListener('click', (e) => {
        e.preventDefault();
        hideAllScreens();
        homeScreen.style.display = 'block';
    });

    // --- Login and Registration functions will go here ---
    // (We will add them later)

    alert("KVC Market Web App Loaded!"); // To test if the app has loaded

});
