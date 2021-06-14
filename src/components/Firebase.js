import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAZWiDhDhijyVpCswY_LLFv65XOJ4xMnqI",
    authDomain: "turnskill-f2683.firebaseapp.com",
    projectId: "turnskill-f2683",
    storageBucket: "turnskill-f2683.appspot.com",
    messagingSenderId: "158636468597",
    appId: "1:158636468597:web:48aa14f1151085e22dcb3c",
    measurementId: "G-XH2CZR7ZJL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

export{auth,storage};
export default db;