import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PrimerComponente from './components/PrimerComponente/PrimerComponente'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponente />
  </StrictMode>,
)
