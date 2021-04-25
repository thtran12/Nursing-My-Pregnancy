import firebase from "firebase";
// import "firebase/firestore";
import "firebase/auth";

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

var firebaseConfig = {
    apiKey: "AIzaSyAKMU6Apbf1kO27hLw256YPL6KuX5arQE8",
    authDomain: "habitus-temp.firebaseapp.com",
    projectId: "habitus-temp",
    storageBucket: "habitus-temp.appspot.com",
    messagingSenderId: "68896889433",
    appId: "1:68896889433:web:3723806b0cf669a9d32f48"
};

export default firebase.initializeApp(firebaseConfig);