import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const Config = {
    apiKey: "AIzaSyD_307nKTxWuu2LBLz0pJ_UofIOpzstNjU",
    authDomain: "fancy-store-db.firebaseapp.com",
    databaseURL: "https://fancy-store-db.firebaseio.com",
    projectId: "fancy-store-db",
    storageBucket: "fancy-store-db.appspot.com",
    messagingSenderId: "736328420829",
    appId: "1:736328420829:web:f8f953ee9a39bad0a3fa34"
  };

  firebase.initializeApp(Config);

  export const createUserProfileDocument = async(userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();
    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date()
    try{
      await userRef.set({
        displayName,
         email,
         createdAt,
         ...additionalData

      })
    }catch(error){
      console.log("error storing the user",error.message)
    }
  }
  return userRef;
}


  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:'select_account'
  });

  export const SignInWithGoogle=()=>auth.signInWithPopup(provider)

  export default firebase;