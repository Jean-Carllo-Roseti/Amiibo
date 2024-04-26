import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Series from './pages/series'
import Tipos from './pages/tipos'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gameseries" element={<Series />} />
      <Route path="type" element={<Tipos />} />
    </Routes>
  )
}

export default Rotas
