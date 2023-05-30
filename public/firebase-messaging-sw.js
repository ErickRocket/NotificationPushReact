//service worker
importScripts("https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js")
const firebaseConfig = {
  apiKey: "AIzaSyDhN25EXLKAFumCN1WcF9XA3ktSBQUdYzA",
  authDomain: "rocketnotifica.firebaseapp.com",
  projectId: "rocketnotifica",
  storageBucket: "rocketnotifica.appspot.com",
  messagingSenderId: "534525300649",
  appId: "1:534525300649:web:e8aff6657dabf81dfc7eb8",
  measurementId: "G-E7L833SQSD"
};
const app = firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

//en caso de que la app este cerrada
messaging.onBackgroundMessage(payload => {
    console.log("Recibiste un mensaje mientras estuviste ausente", payload);
    const  notificationTitle = payload.notification.title;
    const  notificationOptions = {
        body: payload.notification.body,
        icon: "/logo192.png"
    }
    return self.ServiceWorkerRegistration.showNotification(
        notificationTitle, notificationOptions
    )
})