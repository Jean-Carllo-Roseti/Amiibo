import { Link } from 'react-router-dom'
import SeriesCard from '../seriesCard'
import { TypeContent } from './styles'

const seriesObj = {
  Figure: 'Figure',
  Card: 'Card',
  Yarn: 'Yarn'
}

const TypeList = () => {
  return (
    <>
      <h3 className="text-center m-5">Tipos</h3>
      <TypeContent className="container">
        {Object.entries(seriesObj).map(([type]) => (
          <Link
            className="link"
            to={`/type/${encodeURIComponent(type)}`}
            key={type}
          >
            <SeriesCard name={type} />
          </Link>
        ))}
      </TypeContent>
    </>
  )
}

export default TypeList
