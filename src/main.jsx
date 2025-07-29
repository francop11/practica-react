import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PrimerComponente from './components/PrimerComponente/PrimerComponente'
import Counter from './components/Counter/Counter'
import Text from './components/Text/Text'
import ListaDeTareas from './components/ListaDeTareas/ListaDeTareas'
import TareasRandom from './components/TareasRandom/TareasRandom'
import Api from './components/api/Api'
import Water from './components/watherChannel/Water'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter,Route,Routes} from  "react-router-dom"
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    {/* <ListaDeTareas/>
      <TareasRandom/>
       <Api/> */}
        {/* <Water/> */}
         <NavBar/>
          <Routes>
            <Route path='/' element={<PrimerComponente/>}></Route>
            <Route path="ListaDeTareas" element={<ListaDeTareas/>}></Route>
            <Route path="WaterChanel" element={<Water/>}></Route>
          </Routes>


          </BrowserRouter>


  </StrictMode>,
)
