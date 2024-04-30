import { useParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { useGetAmiibosByGamesQuery } from '../../services/api'
import { Amiibo } from '../../types/Amiibos' // Certifique-se de que este caminho esteja correto
import { ContainerAmiiboG, AmiiboItem } from '../renderPersonagens/style'

const RenderPersonagens = () => {
  const [page, setPage] = useState(0)
  const itemsPerPage = 20
  const [displayedAmiibos, setDisplayedAmiibos] = useState<Amiibo[]>([])

  const { seriesKey } = useParams()
  const { data: amiibos, isFetching } = useGetAmiibosByGamesQuery(seriesKey)

  // Assume undefined se não houver parâmetros necessários

  // Manage displayed amiibos based on pagination
  useEffect(() => {
    if (amiibos) {
      console.log('total amiibos fetch:', amiibos.length)
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
      setPage((prev) => prev + 1) // Load next "page" of amiibos
    }
  }, [amiibos, displayedAmiibos.length, page]) // Assegure-se de que todas as dependências externas estão listadas aqui

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll]) // handleScroll agora é uma dependência

  return (
    <>
      <h3>testando spersonagem</h3>
      <ContainerAmiiboG>
        {displayedAmiibos.map((amiibo, index) => (
          <AmiiboItem key={index}>
            <p>{amiibo.name}</p>
            <img src={amiibo.image} alt={amiibo.name} />
          </AmiiboItem>
        ))}
        {isFetching && <p>Loading...</p>}
      </ContainerAmiiboG>
    </>
  )
}

export default RenderPersonagens
