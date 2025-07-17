import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PrimerComponente from './components/PrimerComponente/PrimerComponente'
import Counter from './components/Counter/Counter'
import Text from './components/Text/Text'
import ListaDeTareas from './components/ListaDeTareas/ListaDeTareas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListaDeTareas/>


  </StrictMode>,
)
