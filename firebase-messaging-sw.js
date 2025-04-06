importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

// تهيئة Firebase في الـ Service Worker
firebase.initializeApp({
  apiKey: "AIzaSyCmqjuqmp4ixxV17kR7fhHbYxXvIahHWTc",
  authDomain: "nbuser-f550a.firebaseapp.com",
  projectId: "nbuser-f550a",
  storageBucket: "nbuser-f550a.firebasestorage.app",
  messagingSenderId: "401235957631",
  appId: "1:401235957631:web:715ddd5f98dffd7993ec4a",
  measurementId: "G-N9R9V26V88"
});

// استرجاع نسخة من Firebase Messaging
const messaging = firebase.messaging();

// التعامل مع الإشعارات في الخلفية
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] استلام رسالة في الخلفية', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico'  // تقدر تغيرها لأي أيقونة
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
