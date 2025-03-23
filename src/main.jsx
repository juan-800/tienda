import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// Crea la raíz de la aplicación y renderiza los componentes 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* Habilita la navegación en la aplicación */}
    <App /> {/* Renderiza el componente principal de la app */}
    </BrowserRouter>
    
  </StrictMode>,
)
