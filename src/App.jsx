import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from "./pages/Home"
import Tupi_antigo from './pages/tupi_antigo'
import Introducao from './pages/tupi_antigo/Introducao'

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/tupi_antigo" element={<Tupi_antigo/>}/>
          <Route path="/tupi_antigo/introducao" element={<Introducao/>}/>

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App