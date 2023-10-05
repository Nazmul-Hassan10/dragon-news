// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBD6Iuf3iZ9ddjLrD5hU8wrJJVIWh3FVko",
    authDomain: "dragon-news-auth-32353.firebaseapp.com",
    projectId: "dragon-news-auth-32353",
    storageBucket: "dragon-news-auth-32353.appspot.com",
    messagingSenderId: "928306919621",
    appId: "1:928306919621:web:c36be27ecff2ee142198ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth