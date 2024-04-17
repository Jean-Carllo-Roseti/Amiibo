import { Link } from 'react-router-dom'
import { AmiiboList } from '../../types/Amiibos'

type Props = {
  amiibos: AmiiboList
}

const Vitrine = ({ amiibos }: Props) => {
  return (
    <section>
      <ul>
        {amiibos?.map((amiibo) => (
          <li key={amiibo.image}>
            <Link to={`/amiibos/${encodeURIComponent(amiibo.image)}`}>
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

{
  /* <ul>
  {amiibos.map((amiibo: AmiiboList) => (
    <li key={amiibo.image}>
      <Link to={`/amiibos/${amiibo.id}`}>
        <img src={amiibo.image} alt={amiibo.name} />
      </Link>
    </li>
  ))}
</ul> */
}
