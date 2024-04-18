// src/pages/Home.tsx
import { useGetAmiibosQuery } from '../../services/api'
import Destaque from '../../components/destaques'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Vitrine from '../../components/vitrine'
import { ApiAmiiboResponse } from '../../types/Amiibos'

const Home = () => {
  const { data, isLoading, error } = useGetAmiibosQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading amiibos</div>
  if (!data) return <div>No data available</div>

  // Assumindo que 'data' é do tipo ApiAmiiboResponse e contém a propriedade 'amiibo'
  const amiibos = (data as unknown as ApiAmiiboResponse).amiibo

  return (
    <>
      <Header />
      <Destaque />
      <Vitrine amiibos={amiibos} />
      <Footer />
    </>
  )
}

export default Home
