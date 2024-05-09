import { useSpring, animated } from 'react-spring'
import { ContentCardSeries } from './style'

import Zelda from '../../assets/image/Zelda.jpg'
import ShovelKing from '../../assets/image/NovaShovel.png'
import Mario from '../../assets/image/marioNova.png'
import Kirby from '../../assets/image/kirbyfighters2.jpg'
import Splatoon from '../../assets/image/Splatoon.avif'
import Metroid from '../../assets/image/Metroid.avif'
import FireEmblend from '../../assets/image/fire4.png'
import MonsterHunter from '../../assets/image/tentarMonster.jpg'
import Animal from '../../assets/image/animal3.png'
import Yarn from '../../assets/image/tipoYarn.jpg'
import Figura from '../../assets/image/tipoFigura.webp'
import Card from '../../assets/image/tipoCards.jpg'

const seriesImages: { [key: string]: string } = {
  'Super Mario': Mario,
  'The Legend of Zelda': Zelda,
  'Shovel Knight': ShovelKing,
  'Animal Crossing': Animal,
  Metroid: Metroid,
  Splatoon: Splatoon,
  'Fire Emblem': FireEmblend,
  'Monster Hunter': MonsterHunter,
  Kirby: Kirby,
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
