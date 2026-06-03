import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import V1 from './pages/v1/App.jsx'
import V2 from './pages/v2/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<V2 />}/>
        <Route path='/v1' element={<V1 />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
