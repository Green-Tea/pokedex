import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyByGP79yxM_gQyLfpRIXNlSF9Eeha0rvk8",
    authDomain: "pokedex-48169.firebaseapp.com",
    projectId: "pokedex-48169",
    storageBucket: "pokedex-48169.appspot.com",
    messagingSenderId: "153231255993",
    appId: "1:153231255993:web:133fde630805d1d30b2e68"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}