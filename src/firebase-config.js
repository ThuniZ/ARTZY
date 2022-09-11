
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDADvlLhOibfEVyk7TRSl-LuWfxDv4KIio",
  authDomain: "artzy-f21d3.firebaseapp.com",
  projectId: "artzy-f21d3",
  storageBucket: "artzy-f21d3.appspot.com",
  messagingSenderId: "216536498272",
  appId: "1:216536498272:web:59e0d2bafefca015d24305",
  measurementId: "G-LEBF2M1R1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();