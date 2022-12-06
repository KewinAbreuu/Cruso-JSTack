import firebase from  'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

/* CODES COMPANYS
  123= loginsGeral
  352847= Life
*/ 

// company firebase config object
const companysConfig = {
  // KSA PARIPUEIRA
    123: {
    apiKey: "AIzaSyAdQt76h2CiOGaJ2J-K9f0RJO6fvAng77o",
    authDomain: "recpass-7743d.firebaseapp.com",
    projectId: "recpass-7743d",
    storageBucket: "recpass-7743d.appspot.com",
    messagingSenderId: "847218960331",
    appId: "1:847218960331:web:f70d5126861af0344cb84e"
  }
}

const config = companysConfig[123];
  
if(!firebase.apps.length){
  firebase.initializeApp(config);
}

export default firebase;