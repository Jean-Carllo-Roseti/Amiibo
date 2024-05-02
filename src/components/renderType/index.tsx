import { useParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { useGetAmiibosByTypeQuery } from '../../services/api'
import { Amiibo } from '../../types/Amiibos'
import { ContainerAmiiboG, AmiiboItem } from '../renderAmiiboSeries/style'
import Header from '../header'
import Footer from '../footer'

const RenderType = () => {
  const [page, setPage] = useState(0)
  const itemsPerPage = 20
  const [displayedAmiibos, setDisplayedAmiibos] = useState<Amiibo[]>([])
  const { typeKey } = useParams() // Obtém o parâmetro de URL "typeKey"

  const { data: amiibos, isFetching } = useGetAmiibosByTypeQuery(typeKey)

  useEffect(() => {
    if (amiibos) {
      setDisplayedAmiibos(amiibos.slice(0, (page + 1) * itemsPerPage))
    }
  }, [amiibos, page])

  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement
    if (
      scrollHeight - scrollTop <= clientHeight + 20 &&
      amiibos &&
      displayedAmiibos.length < amiibos.length
    ) {
      setPage((prev) => prev + 1)
    }
  }, [amiibos, displayedAmiibos.length, page])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Atualiza dinamicamente o título com base no tipo de amiibos selecionados
  useEffect(() => {
    document.title = `${typeKey}` // Define o título da página
  }, [typeKey])

  return (
    <>
      <Header />
      <h3 className="text-center m-5"> {typeKey}</h3> {/* Título dinâmico */}
      <ContainerAmiiboG className="container">
        {displayedAmiibos.map((amiibo, index) => (
          <AmiiboItem key={index}>
            <p>{amiibo.name}</p>
            <img src={amiibo.image} alt={amiibo.name} />
          </AmiiboItem>
        ))}
        {isFetching && <p>Loading...</p>}
      </ContainerAmiiboG>
      <Footer />
    </>
  )
}

export default RenderType
