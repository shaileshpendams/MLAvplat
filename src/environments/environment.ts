// import { getStorage, ref, uploadString, uploadBytesResumable, getDownloadURL } from "firebase/storage";
export const environment = {
  production: false,
  apiUrl: 'http://127.0.0.1:5000/api', // Development API URL
  firebaseConfig: {
    apiKey: "AIzaSyCreF5Rt6qyHjZIadVvI_VCy8-BSmqXqpE",
    authDomain: "analyzesentiment-41c85.firebaseapp.com",
    databaseURL: "https://analyzesentiment-41c85-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "analyzesentiment-41c85",
    storageBucket: "analyzesentiment-41c85.appspot.com",
    messagingSenderId: "552071512419",
    appId: "1:552071512419:web:f4e3c43cdac5bd26155356",
    measurementId: "G-1Z6DHF0TQR"

  }
};

// Initialize Firebase
// const app = initializeApp(environment.firebaseConfig);
// // const auth = getAuth(app);
// const storage = getStorage(app);
