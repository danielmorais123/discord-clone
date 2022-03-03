import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzM6tdCOjxNSOi3EHWdQ5bovwGtdfOiyw",
  authDomain: "discord-clone-6ab61.firebaseapp.com",
  projectId: "discord-clone-6ab61",
  storageBucket: "discord-clone-6ab61.appspot.com",
  messagingSenderId: "367448945188",
  appId: "1:367448945188:web:828dc226312984b3f55eb1",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export default db;

export { auth, provider };
