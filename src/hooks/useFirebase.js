import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";



//initialize firebase app
initializeFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");


    const auth = getAuth();


    const registerUser = (email, password, location, history) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
          setAuthError("");
        })
        .catch((error) => {
          setAuthError(error.message);
          // ..
        })
        .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination)
            setAuthError('');
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));
    }


    //observe user
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            setUser(user)
            
          } else {
            setUser({})
          }

          setIsLoading(false);
        });
        return () => unsubscribe;
    },[])

    const logOut = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
          })
          .catch((error) => {
            //...
          })
          .finally(() => setIsLoading(false));
    }
    return {
        user,
        registerUser,
        loginUser,
        logOut,
        isLoading,
        authError,
    }

}

export default useFirebase;