import { initializeApp } from "firebase/app";
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDE40Qw0NHi1xZx5aXkFUIJ1QsvPoaPzpk",
  authDomain: "slack-reacreation.firebaseapp.com",
  projectId: "slack-reacreation",
  storageBucket: "slack-reacreation.appspot.com",
  messagingSenderId: "715202799300",
  appId: "1:715202799300:web:0d5a1ffb1d8ad306e6cb91",
  measurementId: "G-TGKPYM41Z4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const signIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user, token);
  } catch (error) {
    console.log(error);
  }
};

const ws = new WebSocket("ws://localhost:5000");

ws.addEventListener("open", () => {
  console.log("We are connected!");
});

ws.onmessage = (e) => {
  console.log(e.data);
};

export { signIn, ws };
