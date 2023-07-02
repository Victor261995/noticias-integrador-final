import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification ,deleteUser,signInWithEmailAndPassword,reauthenticateWithCredential,onAuthStateChanged} from 'firebase/auth';

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
export { getAuth,createUserWithEmailAndPassword, sendEmailVerification ,deleteUser,signInWithEmailAndPassword,reauthenticateWithCredential,onAuthStateChanged};