// src/components/Vitrine.tsx
import { Link } from 'react-router-dom'
import { Amiibo } from '../../types/Amiibos'
import { VitrineSec, AmiiboItem, AmiiboList } from './style'

type Props = {
  amiibos: Amiibo[]
}

const Vitrine = ({ amiibos }: Props) => {
  return (
    <div className="container">
      <h2>Destaques</h2>
      <VitrineSec>
        <AmiiboList>
          {amiibos.map((amiibo) => (
            <AmiiboItem key={amiibo.tail}>
              <Link to={`/amiibos/${amiibo.tail}`}>
                <img src={amiibo.image} alt={amiibo.name} />
                <h3>{amiibo.name}</h3>
                <p>Série: {amiibo.amiiboSeries}</p>
              </Link>
            </AmiiboItem>
          ))}
        </AmiiboList>
      </VitrineSec>
    </div>
  )
}

export default Vitrine
