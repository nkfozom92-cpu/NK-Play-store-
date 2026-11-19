
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNO7yIoxB7tTf5KFRrfNt44cPVsygpZyM",
  authDomain: "play-store-58e90.firebaseapp.com",
  databaseURL: "https://play-store-58e90-default-rtdb.firebaseio.com",
  projectId: "play-store-58e90",
  storageBucket: "play-store-58e90.firebasestorage.app",
  messagingSenderId: "1051502362466",
  appId: "1:1051502362466:web:c6e36d80157f94062c763b",
  measurementId: "G-2GTLR3VR5L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
