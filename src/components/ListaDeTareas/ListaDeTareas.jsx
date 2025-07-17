
import "../ListaDeTareas/ListaDeTareas.css"
import { useState } from "react"
import ListaDeITems from "../ListaDeItems/ListaDeItems"
const ListaDeTareas=()=>{


    const[text,setText]=useState("")//manejar el texto

  const[item,setItem]=useState([])//recibir la tarea




   function manejar(e){
    setText(e.target.value)

   }

   function agregar(){
    if(text !=""  ) {
          
        
     let nuevaTarea={ id: Date.now(), texto: text }
     
     setItem([...item,nuevaTarea])
 
  

        

        
    }else(console.log("no se puede agregar una tarea vacia"))
  setText("")
}




function eliminar(id){
   let nuevoArray= item.filter((tarea)=> tarea.id != id)
     setItem(nuevoArray)   
}

return(
    <div className="tareas">
        <div className="formulario">
        <input className="input"  type="text" onChange={manejar}   value={text} />
        <button className="botonAgregar" onClick={agregar}>agregar</button>
        <ListaDeITems  item={item}  eliminarTarea={eliminar}/>
        </div>
    </div>
)
}


export default ListaDeTareas