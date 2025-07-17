 
import "../ListaDeItems/ListaDeITems.css"
 const ListaDeITems=({item,eliminarTarea})=>{
    return(
    <>
    <ul className="ul">
            {item.map((tarea,id)=>{
               return  <li className="tarea"  key={tarea.id}> {tarea.texto} {" "} <button className="botonEliminar" onClick={()=>eliminarTarea(tarea.id)}>eliminar</button>  </li>
            })}
        </ul>
    </> )
 }


 export default ListaDeITems