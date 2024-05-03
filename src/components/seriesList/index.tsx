import { Link } from 'react-router-dom'
import SeriesCard from '../seriesCard'
import { SeriesContent } from './style'

const seriesObj = {
  '0x000': 'Super Mario',
  '0x010': 'The Legend of Zelda',
  '0x35c': 'Shovel Knight',
  '0x018': 'Animal Crossing',
  '0x210': 'Fire Emblem',
  '0x05c': 'Metroid',
  '0x1f0': 'Kirby',
  '0x350': 'Monster Hunter',
  '0x080': 'Splatoon'
}

const SeriesList = () => {
  return (
    <>
      <h3 className="text-center m-5">Series</h3>
      <SeriesContent className="container">
        {Object.entries(seriesObj).map(([key, name]) => (
          <Link
            className="link "
            to={`/game-series/${encodeURIComponent(key)}`}
            key={key}
          >
            <SeriesCard name={name} />
          </Link>
        ))}
      </SeriesContent>
    </>
  )
}

export default SeriesList
