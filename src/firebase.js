// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFuRRyLjcyYuKQeR8IpomtPa1zmNEjtPQ",
  authDomain: "post-image-48fcd.firebaseapp.com",
  projectId: "post-image-48fcd",
  storageBucket: "post-image-48fcd.appspot.com",
  messagingSenderId: "645561797919",
  appId: "1:645561797919:web:597e21edd7ac954017b42a",
  measurementId: "G-7MLVE7E205"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
