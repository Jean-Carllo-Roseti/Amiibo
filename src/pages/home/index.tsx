// src/pages/Home.tsx
import Carrossel from '../../components/carrossel'
import Destaque from '../../components/destaques'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Vitrine from '../../components/vitrine'

const Home = () => {
  return (
    <>
      <Header />
      <Carrossel />
      <Destaque />
      <Vitrine />
      <Footer />
    </>
  )
}

export default Home
