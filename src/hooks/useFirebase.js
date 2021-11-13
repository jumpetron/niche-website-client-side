import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";



//initialize firebase app
initializeFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const [admin, setAdmin] = useState(false)


    const auth = getAuth();


    const registerUser = (email, password, name, history) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError("");
          const newUser = { email, displayName: name };
          setUser(newUser);
          // save user to the database
          saveUser(email, name, "POST");
          // send name to firebase after creation
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {})
            .catch((error) => {});
          history.replace("/");
        })
        .catch((error) => {
          setAuthError(error.message);
          console.log(error);
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

    useEffect(()=>{
        fetch(
          `https://enigmatic-anchorage-98613.herokuapp.com/users/${user.email}`
        ).then((res) => res.json().then((data) => setAdmin(data.admin)));
    }, [user.email])

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

      const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("https://enigmatic-anchorage-98613.herokuapp.com/users", {
          method: method,
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        }).then();
      };

    return {
        user,
        admin,
        registerUser,
        loginUser,
        logOut,
        isLoading,
        authError,
    }

}

export default useFirebase;