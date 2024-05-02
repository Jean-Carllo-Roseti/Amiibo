import { Link } from 'react-router-dom'
import SeriesCard from '../seriesCard'

const seriesObj = {
  '0x000': 'Super Mario',
  '0x010': 'The Legend of Zelda',
  '0x35c': 'Pokémon',
  '0x018': 'Animal Crossing',
  '0x210': 'Fire Emblem',
  '0x348': 'Yu-Gi-Oh!',
  '0x350': 'Monster Hunter',
  '0x080': 'Splatoon',
  '0x05c': 'Metroid'
}

const SeriesList = () => {
  return (
    <>
      <h3 className="text-center m-5">Series</h3>
      <div className="container">
        {Object.entries(seriesObj).map(([key, name]) => (
          <Link to={`/game-series/${encodeURIComponent(key)}`} key={key}>
            <SeriesCard name={name} />
          </Link>
        ))}
      </div>
    </>
  )
}

export default SeriesList
