import { useState } from "react"


const Counter=()=>{
  
   const [number,setNumber]=useState(0)
   //siempre dentro del estado esta una variable y una funcion
  //siempre se inicializa el estado en los parentesis
  //los hooks son funciones q nos permiten controlar los componentes
   const sumar=()=>{
   if(number<5){
   setNumber( number+1 )
    }
   } 

   const restar=()=>{
    if(number>0){
        setNumber(number-1)
    }
   }


    return(
        <>
        <p>{number}</p>
        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>
        </>
    )
}


export default Counter