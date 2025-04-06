// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

// Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyCmqjuqmp4ixxV17kR7fhHbYxXvIahHWTc",
  authDomain: "nbuser-f550a.firebaseapp.com",
  projectId: "nbuser-f550a",
  storageBucket: "nbuser-f550a.firebasestorage.app",
  messagingSenderId: "401235957631",
  appId: "1:401235957631:web:715ddd5f98dffd7993ec4a",
  measurementId: "G-N9R9V26V88"
});

// Retrieve Firebase Messaging instance
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico' // You can change this to any icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
