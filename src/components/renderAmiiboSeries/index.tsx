import { useParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { useGetAmiibosByGamesQuery } from '../../services/api'
import { Amiibo } from '../../types/Amiibos'
import { ContainerAmiiboG, AmiiboItem } from './style'
import Header from '../header'
import Footer from '../footer'

const seriesNames: { [key: string]: string } = {
  '0x000': 'Super Mario',
  '0x010': 'The Lengend of Zelda',
  '0x018': 'Animal Crossing',
  '0x35c': 'Shovel Knight',
  '0x210': 'Fire Emblem',
  '0x350': 'Monster Hunter',
  '0x080': 'Splatoon',
  '0x1f0': 'Kirby',
  '0x05c': 'Metroid'
}

const RenderAmiiboSeries = () => {
  const [page, setPage] = useState(0)
  const itemsPerPage = 20
  const [displayedAmiibos, setDisplayedAmiibos] = useState<Amiibo[]>([])
  const { seriesKey } = useParams<{ seriesKey: string }>()

  // Assume undefined se não houver parâmetros necessários
  const { data: amiibos, isFetching } = useGetAmiibosByGamesQuery(seriesKey)

  // Função para obter o nome da série de jogos
  const getSeriesName = (key: string) => {
    if (key in seriesNames) {
      return seriesNames[key]
    } else {
      return key // Retorna a própria chave se não for encontrada no objeto seriesNames
    }
  }

  // organiza o display de  amiibos baseada na paginação
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
      setPage((prev) => prev + 1) // carrega a próxima  "page" de amiibos
    }
  }, [amiibos, displayedAmiibos.length, page]) // Assegure-se de que todas as dependências externas estão listadas aqui

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll]) // handleScroll agora é uma dependência

  useEffect(() => {
    if (seriesKey) {
      document.title = `Amiibos do tipo ${getSeriesName(seriesKey)}`
    }
  }, [seriesKey])

  return (
    <>
      <Header />
      <h3 className="text-center m-5">
        {seriesKey ? getSeriesName(seriesKey) : ''}
      </h3>
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

export default RenderAmiiboSeries
