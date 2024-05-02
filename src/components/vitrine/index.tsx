// src/components/Vitrine.tsx
import { Link } from 'react-router-dom'
import { ApiAmiiboResponse } from '../../types/Amiibos'
import {
  VitrineSec,
  AmiiboItem,
  AmiiboList,
  VitrineGeral,
  RightButton,
  LeftButton
} from './style'
import { useEffect, useRef, useState } from 'react'
import { useGetAmiiboBySeriesQuery } from '../../services/api'
import { shuffleArray } from '../../uteis'

const Vitrine = () => {
  const seriesOptions = [
    'Legend Of Zelda',
    'Animal Crossing',
    'Mario Sports Superstars',
    'Splatoon',
    'Shovel Knight'
  ]

  const scrollContainer = useRef<HTMLDivElement>(null)

  // Função para rolar para a esquerda
  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -200, behavior: 'smooth' })
    }
  }

  // Função para rolar para a direita
  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  const [selectedSeries, setSelectedSeries] = useState('')

  useEffect(() => {
    const randomSeries =
      seriesOptions[Math.floor(Math.random() * seriesOptions.length)]
    setSelectedSeries(randomSeries)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { data, isLoading, error } = useGetAmiiboBySeriesQuery(selectedSeries)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading amiibos</div>
  if (!data) return <div>No data available</div>

  const amiibos = shuffleArray(
    (data as unknown as ApiAmiiboResponse).amiibo
  ).slice(0, 15)

  return (
    <>
      <h2 className="text-center mt-5 mb-5">Confira Mais</h2>
      <VitrineGeral className="container">
        <LeftButton className="left-button" onClick={scrollLeft}>
          {'<'}
        </LeftButton>
        <VitrineSec ref={scrollContainer}>
          <AmiiboList>
            {amiibos.map((amiibo) => (
              <AmiiboItem key={amiibo.tail}>
                <Link
                  to={`/game-series/${encodeURIComponent(amiibo.amiiboSeries)}`}
                  key={amiibo.amiiboSeries}
                >
                  <h3 className="text-center">{amiibo.name}</h3>
                  <img src={amiibo.image} alt={amiibo.name} />
                </Link>
              </AmiiboItem>
            ))}
          </AmiiboList>
        </VitrineSec>
        <RightButton className="right-button" onClick={scrollRight}>
          {'>'}
        </RightButton>
      </VitrineGeral>
    </>
  )
}

export default Vitrine
