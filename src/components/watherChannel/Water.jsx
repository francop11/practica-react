import { useEffect, useState } from "react"

const Water =()=>{
   
    let apiKey="97044cc03b1545d4b3b143307252407"
    
 const [clima,setClima]=useState(null)
 const [text,setText]=useState("")
 const [buscar,setBuscar]=useState("tucuman")

 function mostrarApi(){
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${buscar}`
 )
    .then((resp)=>resp.json())
    .then((data)=>{
        
            setClima(data)
        
    }) }



     useEffect(()=>{
        mostrarApi()

    },[buscar])


    function buscarCiudad(){
        if(text !=""){
            setBuscar(text)
        }else{
            console.log("debe escribir una ciudad")
        }

    }

    function manejarTexto(e){
        setText(e.target.value)

    }



    return(
        <div> 
            <h1>{clima && 
            clima.location.name}</h1>
                  
 <p>{clima &&  clima.current.temp_c} °C</p>
 <p>{ clima && clima.current.condition.text}</p>
 <img src={  clima && `https:${  clima.current.condition.icon}`} />
 

 <input  onChange={manejarTexto} type="text" />
 <button  onClick={buscarCiudad}>buscar ciudad</button>
     
        </div>
    )
}
export default Water








