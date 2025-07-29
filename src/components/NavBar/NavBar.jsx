import { Link, Links } from "react-router-dom"

const NavBar=()=>{
    return(
        <nav>
            <Link to="/" ><h1>Nav Bar</h1></Link>
            <ul>
                <li><Link to="/">inicio</Link></li>
                <li><Link to="/ListaDeTareas">lista de tareas</Link></li>
                <li><Link to="/WaterChanel" >water chanel</Link></li>
            </ul>
        </nav>
    )
}


export default NavBar