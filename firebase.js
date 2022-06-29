 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import {getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCW7OdaIxzDjVj8WadOJ-8I0y9jRCZwgqg",
    authDomain: "fir-js-crud-8d4ff.firebaseapp.com",
    projectId: "fir-js-crud-8d4ff",
    storageBucket: "fir-js-crud-8d4ff.appspot.com",
    messagingSenderId: "42485767184",
    appId: "1:42485767184:web:e86da08ee6b36fe6de7e95"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  export const obtenerProductos = () => getDocs(collection(db,"carrito"));



 