
// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import Firebase SDK
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  onValue,
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


// Load messages on data event
onValue(messages, (snapshot) => {
  // Create a reference
  const ul = document.getElementById("messages");
  ul.replaceChildren();

  // Loop through messeages and add them to the ul
  snapshot.forEach((childSnapshot) => {
    // Fetch the data from the snapshot
    const childData = childSnapshot.val();

    // Create a text node with message and name
    const text = document.createTextNode(
      childData.message + " ~ " + childData.name
    );

    // Create a li element
    const li = document.createElement("li");

    // Append li 
    li.appendChild(text);
    ul.appendChild(li);
  });
});