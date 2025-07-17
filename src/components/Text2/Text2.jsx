import { useEffect, useState } from "react"

const Text2=()=>{
  

    const[text,setText]=useState("")

 const manejarTexto=(e)=>{
    setText(e.target.value)

 }

 useEffect(()=>{
    console.log("componente montado")

    return()=>{
        console.log("componente desmontado")
    }
 },)


 return(
    <div>
    <input type="text"  onChange={manejarTexto}/>
    <p>{text}</p>

    </div>
 )


}

export default Text2