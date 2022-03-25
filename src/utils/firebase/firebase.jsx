
import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
import {
    getFirestore,
    doc, getDoc, setDoc
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBwKNQbK-AStAq-H8mC_rQOHxKEl64VKBY",
    authDomain: "crown-store-react-a7cbf.firebaseapp.com",
    projectId: "crown-store-react-a7cbf",
    storageBucket: "crown-store-react-a7cbf.appspot.com",
    messagingSenderId: "70539913266",
    appId: "1:70539913266:web:bbc511a483c35af780b42b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
    prompt: 'select_account',
  });
  
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  
  export const db = getFirestore();
  
  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
  
    return userDocRef;
  };