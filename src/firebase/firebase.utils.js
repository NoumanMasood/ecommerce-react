import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAx9U-kjb48rX2Nh9ecjx4orETUElVuuRI",
  authDomain: "crown-clothing-92312.firebaseapp.com",
  databaseURL: "https://crown-clothing-92312.firebaseio.com",
  projectId: "crown-clothing-92312",
  storageBucket: "crown-clothing-92312.appspot.com",
  messagingSenderId: "1053556826223",
  appId: "1:1053556826223:web:f3b8930df7d14d75b4ed9a",
  measurementId: "G-H47G2HGDMX"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = userRef.get();

  if(!snapshot.exists){
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
      console.log(userRef);
    }
    catch(error){
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;