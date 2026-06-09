importScripts(
  "https://www.gstatic.com/firebasejs/11.4.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/11.4.0/firebase-messaging-compat.js"
);


// Initialize the Firebase app in the service worker
  const firebaseConfig = {
  apiKey: "AIzaSyBwblBdWGgwPSllhsdRxBRSJQQ2oNzZKrA",
      authDomain: "eggx-1d93b.firebaseapp.com",
      projectId: "eggx-1d93b",
      storageBucket: "eggx-1d93b.firebasestorage.app",
      messagingSenderId: "450211738555",
      appId: "1:450211738555:web:ac70ef483d66ebdd870a9e",
      measurementId: "G-FWGBQ4YHJR"
};

 
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
const channel = new BroadcastChannel('asn-channel');


messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
   channel.postMessage(payload);

});
