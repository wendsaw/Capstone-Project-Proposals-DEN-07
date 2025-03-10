import firebase from 'firebase/app'

import 'firebase/firestore'

import 'firebase/auth'



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
  //init firebase

firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore=firebase.firestore()

const projectAut=firebase.auth()

export {projectFirestore, projectAut}