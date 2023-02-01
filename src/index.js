import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

import "./index.module.css";

const firebaseConfig = {
  apiKey: "AIzaSyCTCyazEJ9Y_msrlgZLM3tC4WI-MtdoiOg",
  authDomain: "mandril-cfb1e.firebaseapp.com",
  projectId: "mandril-cfb1e",
  storageBucket: "mandril-cfb1e.appspot.com",
  messagingSenderId: "1095411548633",
  appId: "1:1095411548633:web:f8bd0ee73c46a4333759c8",
  measurementId: "G-CN6B09BF24",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
