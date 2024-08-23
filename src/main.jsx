import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/*import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc } from 'firebase/firestore';*/



/*const firebaseConfig = {
  apiKey: "AIzaSyBevWKvFe4-jEBW0NnwYX_mvZuaLlYT4ig",
  authDomain: "muebleria-dr.firebaseapp.com",
  projectId: "muebleria-dr",
  storageBucket: "muebleria-dr.appspot.com",
  messagingSenderId: "83043528531",
  appId: "1:83043528531:web:e8b6c594cc6bfee565fba6"
};

// Initialize Firebase
initializeApp(firebaseConfig);*/

ReactDOM.createRoot(document.getElementById('root')).render(
  /*const refDoc = doc(db, "Productos", "C0jru7cWczfFYZLuHwhF")

  getDoc(refDoc)
  .then((snapshot.data())) => {
    console.log()
  }*/

  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
