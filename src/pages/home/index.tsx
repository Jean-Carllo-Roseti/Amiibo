import { useGetAmiibosQuery } from '../../services/api'

import Destaque from '../../components/destaques'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Vitrine from '../../components/vitrine'

const Home = () => {
  const { data: amibos, isLoading } = useGetAmiibosQuery()

  if (isLoading) return <div>Loading...</div>
  if (!amibos) return <div>No data avaiable</div>

  return (
    <>
      <Header />
      <Destaque />
      <Vitrine amiibos={amibos} />
      <Footer />
    </>
  )
}

export default Home
