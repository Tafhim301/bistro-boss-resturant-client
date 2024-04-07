import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name,photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }





    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            if(currentUser){
              const userInfo = {email: currentUser.email};
              axiosPublic.post('/jwt',userInfo)
              .then(res =>{
               if( res.data.token){
                localStorage.setItem('access-token',res.data.token)
               }
              })

            }
            else{
               localStorage.removeItem('access-token')
            }
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }

    }, [])
    const authInfo = {
        user,
        loading,
        signIn,
        createUser,
        logOut,
        updateUserProfile,
        googleSignIn


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }

        </AuthContext.Provider >
    );
};

export default AuthProvider;