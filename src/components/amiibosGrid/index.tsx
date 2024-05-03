import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useGetAmiibosQuery } from '../../services/api'
import { Amiibo } from '../../types/Amiibos'
import { ContaienrAmiiboG, AmiiboItem } from './style'
import { searchAmiibos } from '../../store/reducer/amiibo'

const AmiibosGrid = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  const itemsPerPage = 20
  const [displayedAmiibos, setDisplayedAmiibos] = useState<Amiibo[]>([])
  const [searchInput, setSearchInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const { data: amiibos, isFetching } = useGetAmiibosQuery(undefined)

  useEffect(() => {
    if (amiibos && searchTerm === '') {
      console.log('total amiibos fetch:', amiibos.length)
      setDisplayedAmiibos(amiibos.slice(0, (page + 1) * itemsPerPage))
    } else if (amiibos) {
      const filteredAmiibos = amiibos.filter((amiibo) =>
        amiibo.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setDisplayedAmiibos(filteredAmiibos)
    }
  }, [amiibos, page, searchTerm])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchTerm(searchInput) // Atualiza o estado searchTerm apenas quando o botão de pesquisa é clicado
    dispatch(searchAmiibos(searchInput))
  }

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

  return (
    <div className="container">
      <div className="d-flex justify-content-around mt-5 mb-5 ">
        <h3 className="text-center ">Personagens</h3>
        <form onSubmit={handleSearch}>
          <label className=" me-3 ">Pesquisar</label>
          <input
            className="text-center"
            type="text"
            placeholder="Nome do personagem"
            value={searchInput}
            onChange={handleInputChange}
          />
          <button type="submit">Pesquisar</button>
        </form>
      </div>
      <ContaienrAmiiboG>
        {displayedAmiibos.map((amiibo, index) => (
          <AmiiboItem key={index}>
            <p>{amiibo.name}</p>
            <img src={amiibo.image} alt={amiibo.name} />
          </AmiiboItem>
        ))}
        {isFetching && <p>Loading...</p>}
      </ContaienrAmiiboG>
    </div>
  )
}

export default AmiibosGrid
