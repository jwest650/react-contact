import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCb_SSbIAhVuW2VuM3xZIq2TRMLA2kDvic",

    authDomain: "contact-a4833.firebaseapp.com",

    projectId: "contact-a4833",

    storageBucket: "contact-a4833.appspot.com",

    messagingSenderId: "359512592247",

    appId: "1:359512592247:web:7afd413567478c5efddb72",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
