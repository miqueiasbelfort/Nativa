import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from "./pages/Home"
import Tupi_antigo from './pages/tupi_antigo'

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/tupi_antigo" element={<Tupi_antigo/>}/>

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
