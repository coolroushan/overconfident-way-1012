import React, { createContext, useState } from 'react'
export const AuthContext=createContext()
const userDeatail=[{email: "roushankumarcool@gmail.com", password: "1234"}]
const AuthContextProvider = (prop) => {
    const [isAuth, setIsAuth]=useState(false)
    
    const login=(email, password)=>{
      const resp=userDeatail.filter((e)=> e.email==email && e.password==password )
      if(resp.length==1){
        setIsAuth(true)
      }else{
        setIsAuth(false)
        alert("Incorrect email & password")
      }
         
    }
    const logout=()=>{
      setIsAuth(false)
    }
  return (
    <AuthContext.Provider value={{isAuth,login,logout}}>
        {prop.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
