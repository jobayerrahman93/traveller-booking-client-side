import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../pages/Firebase/firebase.init';


initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading,setIsLoading]=useState(true);

    // console.log(user);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // google sign in
    const googleSignIn = () => {

        setIsLoading(true);

      return  signInWithPopup(auth, googleProvider)
            

    }



    // observer
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, []);

    // signOut

    const logOut = () => {
    setIsLoading(true);
        signOut(auth).then(() => {
          setUser({});
        }).finally(() => {
            setIsLoading(false)
        })
    }


    return {
        setUser,
        googleSignIn,
        user,
        logOut,
        isLoading,
        setIsLoading
        
    }
};

export default useFirebase;