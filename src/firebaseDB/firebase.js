import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// const config = {
//     apiKey: "AIzaSyD-4E9rS99uY6y0RdZwRWuQsqbDwjwwXFY",
//     authDomain: "rendezvous-9f567.firebaseapp.com",
//     databaseURL: "https://rendezvous-9f567.firebaseio.com",
//     projectId: "rendezvous-9f567",
//     storageBucket: "rendezvous-9f567.appspot.com",
//     messagingSenderId: "242676410431",
//     appId: "1:242676410431:web:e4bba8842795887258b08a"
//   };

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };

 

 




//   class Firebase {
//     constructor() {
//       firebase.initializeApp(config);
//       this.auth = firebase.auth();
//       this.db= firebase.firestore();
//     }

//     async login(email, password){
//         try{

//            return await firebase.auth().signInWithEmailAndPassword(email, password);
//         }catch(e){
//             console.log(e);
//         }
//     }


//     async signup(email, password){

//         try{
//          return await firebase.auth().createUserWithEmailAndPassword(email, password);
//             // return firebase.auth().currentUser.updateProfile({
//             //     displayName:name
//             // });
//         }catch(e){
//             console.log(e)
//         }
//     }

    
//     async logout(){
//         return await firebase.auth().signOut();
//     }

//   }
//   export default new Firebase();

/** initialize firebase */
firebase.initializeApp(config)
export default firebase;