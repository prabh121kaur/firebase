// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import Firebase SDK
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  push,
  serverTimestamp,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-9weFxMbo5IEXQCQ94HjvEPLeoFS-qQA",
    authDomain: "humber-demo-3f8ff.firebaseapp.com",
    projectId: "humber-demo-3f8ff",
    storageBucket: "humber-demo-3f8ff.firebasestorage.app",
    messagingSenderId: "236634930196",
    appId: "1:236634930196:web:df750a85fd65916fdf7b01",
    measurementId: "G-TEWHB0CX3R"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


// Initialize Database
const database = getDatabase();
const messages = ref(database, "/messages");

const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  const name = document.getElementById("name");
  const message = document.getElementById("message");

  const newMessage = push(messages);

  set(newMessage, {
    name: name.value,
    message: message.value,
    created_at: serverTimestamp(),
  });

  name.value = "";
  message.value = "";
});
               