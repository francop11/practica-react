import { useEffect, useState } from "react"
import data from "../data/tareas.json"
import BotonGenerarTarea from "./BotonGenerarTarea"
  

const TareasRandom=()=>{

const [tareas,setTares]=useState([])

const [random,setRandom]=useState(null)

const [mostrar,setMostrar]=useState(false)



 function pedirTareas(){
    return new Promise((resolve,reject)=>{
        resolve(data)
    })
 }
 
 
 useEffect(()=>{
pedirTareas()
 .then((res)=>{
  setTares(res)
 })

 },[])
 


 function tareaALAzar(){
    if(tareas.length>0){
    let indice=  Math.floor(Math.random()*tareas.length)
      let tarea=tareas[indice]
      setRandom(tarea)

    }

 }

function mostrarListaDeTareas()
{
    setMostrar(!mostrar)
}





    return(
        <div>

            <BotonGenerarTarea  tareaALAzar={tareaALAzar} />
            <h1>{random && <p>{random.descripcion}</p> }</h1>
            <button onClick={mostrarListaDeTareas}> {mostrar ? "Ocultar lista" : "Mostrar lista"}</button>
            { mostrar && tareas.length>0 &&
            tareas.map((tarea,index)=>{
                return(
                         <p key={index}>
                            {tarea.descripcion}
                         </p>      )
            })}
        
        </div>
    )
}


export default TareasRandom



//    <h4>{ tareas.length>0 &&

//            tareas.map((tarea)=>{
//             return(
//                 <div>
           
//             <h1>{tarea.id}</h1>
//             <p> {tarea.descripcion}</p>
//            </div>

//             )
//            })

           
        
           

//             } </h4>