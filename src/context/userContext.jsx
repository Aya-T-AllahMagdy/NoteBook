import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
    const [user,setUser] = useState("");
    function signUp(auth ,email , password){
        return createUserWithEmailAndPassword(auth,email , password);
    }
    function login(auth ,email , password){
        return signInWithEmailAndPassword(auth,email , password);
    }
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[]);
    return <userAuthContext.Provider value={{ user,signUp }}>{children}</userAuthContext.Provider>
    
}
export function useUserAuth(){
    return useContext(userAuthContext)
}