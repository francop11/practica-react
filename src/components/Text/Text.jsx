import { useState } from "react"
import Text2 from "../Text2/Text2"

const Text=()=>{
    const [mostrar,setMostrar]=useState(false)
    
    const manejar=()=>{
    setMostrar(!mostrar)


    }


    return(

    


        <div>

          
           <button onClick={manejar}>{mostrar===true ? "ocultar":"mostrar"}</button>
             { mostrar==true &&  <Text2/>  }

        </div>
    )
}


export default Text