import { useSpring, animated } from 'react-spring'
import { ContentCardSeries } from './style'

import Zelda from '../../assets/image/Zelda.jpg'
import Pokemon from '../../assets/image/pokemon.jpg'
import Mario from '../../assets/image/super-mario-bros-movie.webp'
import AnimalCrossing from '../../assets/image/kirbyfighters2.jpg'
import YuGiOh from '../../assets/image/Yoshy.jpg'
import Splatoon from '../../assets/image/Splatoon.avif'
import Metroid from '../../assets/image/Metroid.avif'
import FireEmblend from '../../assets/image/fireEmblem.avif'
import MonsterHunter from '../../assets/image/Yoshy.jpg'
import Yarn from '../../assets/image/tipoYarn.jpg'
import Figura from '../../assets/image/tipoFigura.webp'
import Card from '../../assets/image/tipoCards.jpg'

const seriesImages: { [key: string]: string } = {
  'Super Mario': Mario,
  'The Legend of Zelda': Zelda,
  Pokémon: Pokemon,
  'Animal Crossing': AnimalCrossing,
  Metroid: Metroid,
  Splatoon: Splatoon,
  'Monster Hunter': MonsterHunter,
  'Yu-Gi-Oh!': YuGiOh,
  'Fire Emblem': FireEmblend,
  Figure: Figura,
  Card: Card,
  Yarn: Yarn
}

type Props = {
  name?: string
  type?: string
}

const AnimatedSeriesCard = animated(ContentCardSeries) // Aplica animação ao componente estilizado

const SeriesCard = ({ name }: Props) => {
  // Animação de fade-in ao renderizar
  const fadeProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 } // Configura a duração da animação para 1000ms (1 segundo)
  })

  const imageUrl = name ? seriesImages[name] : undefined

  if (!imageUrl) {
    // Aqui você pode retornar um componente de fallback ou null se a imagem ou o nome não estiverem disponíveis
    return <div>Image not available</div>
  }

  return (
    <AnimatedSeriesCard
      style={{
        ...fadeProps,
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <h3 className="ms-5">{name}</h3>
    </AnimatedSeriesCard>
  )
}

export default SeriesCard
