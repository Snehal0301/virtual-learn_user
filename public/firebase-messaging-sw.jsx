importScripts("https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBIE8bhbC7ULZI_QBz9OOFimSXMIAzw8H8",
  authDomain: "virtuallearn-user-ae45a.firebaseapp.com",
  projectId: "virtuallearn-user-ae45a",
  storageBucket: "virtuallearn-user-ae45a.appspot.com",
  messagingSenderId: "881700342599",
  appId: "1:881700342599:web:94851287b2be9d0fc65a62",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});