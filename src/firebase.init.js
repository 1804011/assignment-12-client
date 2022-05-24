// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA_IIh5Eb00DXTeEzf3mmEEIx_yBXjTaXs",
	authDomain: "assignment12-2a191.firebaseapp.com",
	projectId: "assignment12-2a191",
	storageBucket: "assignment12-2a191.appspot.com",
	messagingSenderId: "181002263039",
	appId: "1:181002263039:web:efaad882b6fd02d2072fca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
