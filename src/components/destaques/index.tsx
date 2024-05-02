// src/components/Destaque.tsx
import { useState } from 'react'
import Cards from '../homeCards'
import { DestaqueContent } from './style'
import { useGetAmiiboByHeadAndTailQuery } from '../../services/api'

type AmiiboInfo = {
  head: string
  tail: string
  name: string
  amiiboSeries?: string
  gameSeries?: string
  release?: {
    au: string | null
    eu: string | null
    jp: string | null
    na: string | null
  }
}

const amiiboList: AmiiboInfo[] = [
  { head: '08000100', tail: '003e0402', name: 'Inkling Girl' },
  { head: '08000200', tail: '003f0402', name: 'Inkling Boy' },
  { head: '08050200', tail: '041b0402', name: 'Octoling' },
  { head: '01830000', tail: '02420502', name: 'Tom Nook' },
  { head: '01810000', tail: '024b0502', name: 'Isabelle' },
  { head: '08060100', tail: '041c0402', name: 'Smallfry' },
  { head: '07420000', tail: '001f0002', name: 'Palutena' },
  { head: '3f000000', tail: '042e0002', name: 'Sora' },
  { head: '07820000', tail: '002f0002', name: 'Duck Hunt' },
  { head: '01000000', tail: '03530902', name: 'Link' },
  { head: '01010000', tail: '03560902', name: 'Zelda' },
  { head: '00000000', tail: '00340102', name: 'Mario' },
  { head: '00010000', tail: '00350102', name: 'Luigi' },
  { head: '00030000', tail: '00020002', name: 'Yoshi' }
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

  const [selectedAmiiboIndex, setSelectedAmiiboIndex] = useState<number | null>(
    null
  )

  const handleLearnMoreClick = (index: number) => {
    setSelectedAmiiboIndex(index)
  }

  const amiibos = [
    useGetAmiiboByHeadAndTailQuery({
      head: selectedAmiibos[0]?.head,
      tail: selectedAmiibos[0]?.tail
    }),
    useGetAmiiboByHeadAndTailQuery({
      head: selectedAmiibos[1]?.head,
      tail: selectedAmiibos[1]?.tail
    }),
    useGetAmiiboByHeadAndTailQuery({
      head: selectedAmiibos[2]?.head,
      tail: selectedAmiibos[2]?.tail
    })
  ]

  return (
    <>
      <h2 className="m-5 text-center">Destaques</h2>
      <DestaqueContent className="container">
        {amiibos.map((amiibo, index) => {
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
              amiiboSeries={amiibo.data?.amiibo[0]?.amiiboSeries}
              gameSeries={amiibo.data?.amiibo[0]?.gameSeries}
              release={{
                au: amiibo.data?.amiibo[0]?.release?.au ?? null,
                eu: amiibo.data?.amiibo[0]?.release?.eu ?? null,
                jp: amiibo.data?.amiibo[0]?.release?.jp ?? null,
                na: amiibo.data?.amiibo[0]?.release?.na ?? null
              }}
            />
          )
        })}
      </DestaqueContent>
    </>
  )
}

export default Destaque
