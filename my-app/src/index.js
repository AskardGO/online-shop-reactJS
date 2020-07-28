import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBRNZNUpRjsay5QHTohUq0jjiLpuVqG7Rw",
    authDomain: "qwshop-244e8.firebaseapp.com",
    databaseURL: "https://qwshop-244e8.firebaseio.com",
    projectId: "qwshop-244e8",
    storageBucket: "qwshop-244e8.appspot.com",
    messagingSenderId: "971075123142",
    appId: "1:971075123142:web:f4316344f6fcdf4c4c24c7",
    measurementId: "G-12077CNDLY"
}

firebase.initializeApp(firebaseConfig)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
