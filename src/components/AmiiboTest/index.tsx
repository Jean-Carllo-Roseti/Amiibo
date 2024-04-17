import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface Amiibo {
  amiiboSeries: string
  name: string
  image: string
  tail: string
}

const AmiiboTest = () => {
  const [amiibos, setAmiibos] = useState<Amiibo[]>([]) // Use a interface aqui

  useEffect(() => {
    const fetchAmiibos = async () => {
      try {
        const response = await axios.get('https://amiiboapi.com/api/amiibo/')
        setAmiibos(response.data.amiibo)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    fetchAmiibos()
  }, [])

  return (
    <div>
      <h1>Amiibos</h1>
      <ul>
        {amiibos.map((amiibo) => (
          <li key={amiibo.tail}>
            <img src={amiibo.image} alt={amiibo.name} />
            <div>
              <h2>{amiibo.name}</h2>
              <p>Série: {amiibo.amiiboSeries}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AmiiboTest
