

const BotonGenerarTarea=({tareaALAzar})=>{
    return(
        <div>
            <button  onClick={tareaALAzar}> generar tarea al azar</button>

        </div>
    )
}

export default BotonGenerarTarea


//esto muestra la lista completa

// const BotonGenerarTarea=({tareas})=>{
//     return(
//         <div>
//             <h1>{tareas.length >0 &&
//             tareas.map((tarea,index)=>{
//                 return(
//                     <p key={index}>{tarea.descripcion}</p>
//                 )
//             })}</h1>
            


//         </div>
//     )
// }

// export default BotonGenerarTarea