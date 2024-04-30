import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Series from './pages/series'
import Tipos from './pages/tipos'
import Personagens from './pages/personagens'
import RenderAmiiboSeries from './components/renderAmiiboSeries'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gameseries" element={<Series />} />
      <Route path="type" element={<Tipos />} />
      <Route path="/page" element={<Personagens />} />
      <Route path="/game-series/:seriesKey" element={<RenderAmiiboSeries />} />
    </Routes>
  )
}

export default Rotas
