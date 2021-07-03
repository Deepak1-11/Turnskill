import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDfnhXYaHKIpaVizvs0VNGqK45n8C8K-6w",
  authDomain: "turnskill-a4e36.firebaseapp.com",
  projectId: "turnskill-a4e36",
  storageBucket: "turnskill-a4e36.appspot.com",
  messagingSenderId: "702119766018",
  appId: "1:702119766018:web:1788da2fa4225be8e29f1b",
  measurementId: "G-9G75HLC92F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

export{auth,storage};
export default db;