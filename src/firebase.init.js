
import { initializeApp } from "firebase/app";
import{getAuth}from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCdHICguPKWpv7VhG0qF1nBJOGTHTC5S14",
  authDomain: "genius-car-services-adcc2.firebaseapp.com",
  projectId: "genius-car-services-adcc2",
  storageBucket: "genius-car-services-adcc2.appspot.com",
  messagingSenderId: "837156385722",
  appId: "1:837156385722:web:1f8413b8e941fd8dc4a383",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
