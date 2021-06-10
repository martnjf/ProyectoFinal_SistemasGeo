// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAdTW5hRmRH6KreqoA54a29ZAo5-xU-raI",
    authDomain: "gadi-autorizacion.firebaseapp.com",
    projectId: "gadi-autorizacion",
    storageBucket: "gadi-autorizacion.appspot.com",
    messagingSenderId: "1010664700879",
    appId: "1:1010664700879:web:ade08c81363ebe492d70ba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();