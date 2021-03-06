import * as firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import { userContext } from "./user-context";

const provider = new firebase.auth.GoogleAuthProvider();

export const useSession = () => {
  const { user } = useContext(userContext);
  return user;
};

export const loginWithGoogle = async () => {
  try {
    const result = await firebase.auth().signInWithPopup(provider);
  } catch (err) {
    console.error(err);
    throw err;
  }
};


export const loginWithEmail = async (email, password) => {
  try {
    const results = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const createUserWithEmail = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const signOut = () => firebase.auth().signOut();