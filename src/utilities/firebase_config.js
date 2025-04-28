import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBIRDz62mXtKZtGo9A7Yg9gR7wzN5uCh3Y",
  authDomain: "portfolio-74d78.firebaseapp.com",
  databaseURL: "https://portfolio-74d78-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-74d78",
  storageBucket: "portfolio-74d78.appspot.com",
  messagingSenderId: "136270280893",
  appId: "1:136270280893:web:0b89ce12cee7a4778c5fd4",
  measurementId: "G-2X1G21JJ0P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const str = getStorage(app);


export { db, str };