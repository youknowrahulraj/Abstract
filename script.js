  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA2UgVrDoDNijExJF0NL9I3PCD54QZam2U",
    authDomain: "abstracttobinary.firebaseapp.com",
    projectId: "abstracttobinary",
    storageBucket: "abstracttobinary.firebasestorage.app",
    messagingSenderId: "908087090742",
    appId: "1:908087090742:web:5524fce38f23b07e218297",
    measurementId: "G-ZD7YYEZSNN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
