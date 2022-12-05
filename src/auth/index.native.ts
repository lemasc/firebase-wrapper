import firebaseAuth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { createFactory } from "../_internal";

type AuthModule = ReturnType<typeof firebaseAuth>;
export const getAuth = firebaseAuth;

const {
  fetchSignInMethodsForEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithCredential,
  signOut,
  onIdTokenChanged,
} = createFactory<AuthModule>([
  "fetchSignInMethodsForEmail",
  "createUserWithEmailAndPassword",
  "signInWithEmailAndPassword",
  "signInWithCredential",
  "signOut",
  "onIdTokenChanged",
]);

const GoogleAuthProvider = firebaseAuth.GoogleAuthProvider;

export {
  fetchSignInMethodsForEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithCredential,
  signOut,
  GoogleAuthProvider,
  onIdTokenChanged,
};

export type User = FirebaseAuthTypes.User;
