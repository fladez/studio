import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDiEsBJO3u9-u90_UC6BsOmxIXEpIjQu0k",
  authDomain: "fla10-f6f4b.firebaseapp.com",
  projectId: "fla10-f6f4b",
  storageBucket: "fla10-f6f4b.appspot.com",
  messagingSenderId: "599071547068",
  appId: "1:599071547068:web:777570cafbe1a5060ffab9",
  measurementId: "G-JZ9TX4JVE2"
};

let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);
const storage: FirebaseStorage = getStorage(app);

export { app, auth, db, storage };
