// src/components/Vitrine.tsx
import { Link } from 'react-router-dom'
import { Amiibo } from '../../types/Amiibos'

type Props = {
  amiibos: Amiibo[]
}

const Vitrine = ({ amiibos }: Props) => {
  return (
    <section className="container">
      <ul>
        <h1>Amiibos</h1>
        {amiibos.map((amiibo) => (
          <li key={amiibo.key}>
            <Link to={`/amiibos/${encodeURIComponent(amiibo.key)}`}>
              <img src={amiibo.image} alt={amiibo.name} />
              <h3>{amiibo.name}</h3>
              <p>Série: {amiibo.amiiboSeries}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Vitrine
