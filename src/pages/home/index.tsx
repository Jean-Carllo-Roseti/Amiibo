// src/pages/Home.tsx
import Carrossel from '../../components/carrossel'
import Destaque from '../../components/destaques'
import Footer from '../../components/footer'
import Header from '../../components/header'
import SeriesPage from '../../components/series'
import Vitrine from '../../components/vitrine'

const Home = () => {
  return (
    <>
      <Header />
      <Carrossel />
      <Destaque />
      <Vitrine />
      <Footer />
      <SeriesPage />
    </>
  )
}

export default Home
