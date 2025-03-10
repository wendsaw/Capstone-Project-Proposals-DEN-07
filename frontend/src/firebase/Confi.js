import firebase from 'firebase/app'

import 'firebase/firestore'

import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyBrKiwktY7UW_3XYDSi_L3aNfENbx0GVj0",
    authDomain: "mymoney-f9d76.firebaseapp.com",
    projectId: "mymoney-f9d76",
    storageBucket: "mymoney-f9d76.firebasestorage.app",
    messagingSenderId: "397955939276",
    appId: "1:397955939276:web:a3a3790581743292103b69"
  };

  //init firebase

firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore=firebase.firestore()

const projectAut=firebase.auth()

export {projectFirestore, projectAut}