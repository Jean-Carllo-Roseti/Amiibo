// src/components/Destaque.tsx
import React, { useEffect, useState } from 'react'
import Cards from '../homeCards'
import { DestaqueContent, Subtitulo } from './style'
import { useGetAmiiboByHeadAndTailQuery } from '../../services/api'

type AmiiboInfo = {
  head: string
  tail: string
  name: string
}

const amiiboList: AmiiboInfo[] = [
  { head: '08000100', tail: '003e0402', name: 'Inkling Girl' },
  { head: '08000200', tail: '003f0402', name: 'Inkling Boy' },
  { head: '08050200', tail: '041b0402', name: 'Octoling' }
  // Continue to add the rest of your amiibos here
]

const selectRandomAmiibos = (): AmiiboInfo[] => {
  const selectedIndices = new Set<number>()
  while (selectedIndices.size < 3) {
    const index = Math.floor(Math.random() * amiiboList.length)
    selectedIndices.add(index)
  }
  return Array.from(selectedIndices).map((index) => amiiboList[index])
}

const Destaque = () => {
  const [selectedAmiibos, setSelectedAmiibos] =
    useState<AmiiboInfo[]>(selectRandomAmiibos)

  // Hooks to fetch data for each amiibo
  const amiibo1 = useGetAmiiboByHeadAndTailQuery({
    head: selectedAmiibos[0]?.head,
    tail: selectedAmiibos[0]?.tail
  })
  const amiibo2 = useGetAmiiboByHeadAndTailQuery({
    head: selectedAmiibos[1]?.head,
    tail: selectedAmiibos[1]?.tail
  })
  const amiibo3 = useGetAmiiboByHeadAndTailQuery({
    head: selectedAmiibos[2]?.head,
    tail: selectedAmiibos[2]?.tail
  })

  return (
    <>
      <Subtitulo>Destaques</Subtitulo>
      <DestaqueContent className="container">
        {[amiibo1, amiibo2, amiibo3].map((amiibo, index) => {
          if (amiibo.isLoading) return <p key={index}>Loading...</p>
          if (amiibo.error) return <p key={index}>Error loading data</p>
          return (
            <Cards
              key={selectedAmiibos[index].name}
              name={selectedAmiibos[index].name}
              image={
                amiibo.data?.amiibo[0]?.image ||
                'https://placeholder.com/288x330'
              }
            />
          )
        })}
      </DestaqueContent>
    </>
  )
}

export default Destaque
