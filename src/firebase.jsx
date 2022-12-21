import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBIE8bhbC7ULZI_QBz9OOFimSXMIAzw8H8",
  authDomain: "virtuallearn-user-ae45a.firebaseapp.com",
  projectId: "virtuallearn-user-ae45a",
  storageBucket: "virtuallearn-user-ae45a.appspot.com",
  messagingSenderId: "881700342599",
  appId: "1:881700342599:web:94851287b2be9d0fc65a62",
};


export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
