// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  doc,
  setDoc
} from "firebase/firestore";
import { 
  GoogleAuthProvider,
  getAuth, 
  sendPasswordResetEmail, 
  signOut, 
  signInWithPopup 
} from 'firebase/auth'

const googleProvider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyDTMfyJn-HSdMCGtCjVFwLsDM1mWmoBseY",
  authDomain: "hubnestdev.firebaseapp.com",
  projectId: "hubnestdev",
  storageBucket: "hubnestdev.appspot.com",
  messagingSenderId: "326246416896",
  appId: "1:326246416896:web:a176bf21824e3e43d74ee5"
}; 

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    console.log(user)
    if (docs.docs.length === 0) {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayname: user.displayName,
        firstname: user.displayName.split(' ')[0],
        lastname: user.displayName.split(' ')[1],
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  sendPasswordReset,
  logout,
  signInWithGoogle
};

// Initialize Firebase 
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
