import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from 'firebase/app'
import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyBevWKvFe4-jEBW0NnwYX_mvZuaLlYT4ig",
  authDomain: "muebleria-dr.firebaseapp.com",
  projectId: "muebleria-dr",
  storageBucket: "muebleria-dr.appspot.com",
  messagingSenderId: "83043528531",
  appId: "1:83043528531:web:e8b6c594cc6bfee565fba6"
};

initializeApp(firebaseConfig);



// Initialize Firebase

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
