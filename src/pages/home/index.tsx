// src/pages/Home.tsx
import React, { useState, useEffect } from 'react'
import { useGetAmiiboBySeriesQuery } from '../../services/api'
import Destaque from '../../components/destaques'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Vitrine from '../../components/vitrine'
import { shuffleArray } from '../../uteis'
import { ApiAmiiboResponse } from '../../types/Amiibos'
import Carrossel from '../../components/carrossel'

const seriesOptions = [
  'Legend Of Zelda',
  'Super Smash Bros.',
  'Animal Crossing',
  'Mario Sports Superstars',
  'Splatoon',
  "Yoshi's Woolly World"
]

const Home = () => {
  const [selectedSeries, setSelectedSeries] = useState('')

  useEffect(() => {
    const randomSeries =
      seriesOptions[Math.floor(Math.random() * seriesOptions.length)]
    setSelectedSeries(randomSeries)
  }, [])

  const { data, isLoading, error } = useGetAmiiboBySeriesQuery(selectedSeries)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading amiibos</div>
  if (!data) return <div>No data available</div>

  const shuffledAmiibos = shuffleArray(
    (data as unknown as ApiAmiiboResponse).amiibo
  ).slice(0, 15) // Limita a 15 amiibos após embaralhar

  return (
    <>
      <Header />
      <Carrossel />
      <Destaque />
      <Vitrine amiibos={shuffledAmiibos} />
      <Footer />
    </>
  )
}

export default Home
