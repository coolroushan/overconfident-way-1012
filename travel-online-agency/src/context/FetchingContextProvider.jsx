import React,{ createContext, useState } from 'react'
export const FetchingContext=createContext()

const FetchingContextProvider = (prop) => {
  const [filter, setFilter]= useState("alloffers")
  const [color, setColor]=useState("black")
const flight=(e)=>{
 
console.log(e.target.value)
setFilter("flightsoffers")
setColor('#008cff')
}
const hotelsoffers=(e)=>{
  console.log(e.target.value)
  setFilter("hotelsoffers")
  setColor('#008cff')
  }
  const Holidaysffers=(e)=>{
    console.log(e.target.value)
    setFilter("Holidaysffers")
    setColor('#008cff')
    }
    const clear=(e)=>{
      console.log(e.target.value)
      setFilter("alloffers")
      setColor('#008cff')
      }
  
  return (
    <FetchingContext.Provider value={{filter, flight, hotelsoffers, Holidaysffers,clear,color}}>
      {prop.children}
    </FetchingContext.Provider>
  )
}

export default FetchingContextProvider
