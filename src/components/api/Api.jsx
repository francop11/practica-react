import { useState, useEffect } from "react";

const Api = () => {
  const [pokemon, setPokemon] = useState(null);
  const[id,setId]=useState(1)

  
  function mostrarApi() {
    fetch("https://pokeapi.co/api/v2/pokemon/"+id)
      .then((resp) => resp.json())
      .then((data) => {
       
        setPokemon(data);
      })
    
  }

  useEffect(() => {
    mostrarApi(); // Se ejecuta automáticamente al montar el componente
  }, [id]);


  function mostrarAnterior(){
    if(id>1){
    setId(id-1)
    }
  }


  function mostrarSiguiente(){
    setId(id+1)

  }
  console.log(id)
  return (
    <div>
      {pokemon && 
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} />
            <br />
            <p>id: {id}</p>
            {id >1 && <button  onClick={mostrarAnterior}>anterior</button>}
            <button onClick={mostrarSiguiente}>Siguiente</button>
        </div> }
    </div>
  );
};

export default Api;
