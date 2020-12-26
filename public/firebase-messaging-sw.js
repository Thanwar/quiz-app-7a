importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js");

firebase.initializeApp(
    {
        apiKey: "AIzaSyCK118kPu3tPHu_QLdgCBtyYZQJdN51-wg",
        authDomain: "quiz-pwa-7a.firebaseapp.com",
        projectId: "quiz-pwa-7a",
        storageBucket: "quiz-pwa-7a.appspot.com",
        messagingSenderId: "402008526146",
        appId: "1:402008526146:web:3906442fd5b05914ca8cdb"
    }
);

firebase.messaging();