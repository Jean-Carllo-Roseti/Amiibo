import Zelda from '../../assets/image/Zelda.jpg'
import Pokemon from '../../assets/image/pokemon.jpg'
import Mario from '../../assets/image/super-mario-bros-movie.webp'
import AnimalCrossing from '../../assets/image/kirbyfighters2.jpg'
import YuGiOh from '../../assets/image/Yoshy.jpg'
import Splatoon from '../../assets/image/Splatoon.avif'
import Metroid from '../../assets/image/Metroid.avif'
import FireEmblend from '../../assets/image/fireEmblem.avif'
import MonsterHunter from '../../assets/image/Yoshy.jpg'

import { ContentCardSeries } from './style'

const seriesImages: { [key: string]: string } = {
  'Super Mario': Mario,
  'The Legend of Zelda': Zelda,
  Pokémon: Pokemon,
  'Animal Crossing': AnimalCrossing,
  Metroid: Metroid,
  Splatoon: Splatoon,
  'Monster Hunter': MonsterHunter,
  'Yu-Gi-Oh!': YuGiOh,
  'Fire Emblem': FireEmblend
}

type Props = {
  name: string
}

const SeriesCard = ({ name }: Props) => {
  const imageUrl = seriesImages[name]

  return (
    <ContentCardSeries
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <h3>{name}</h3>
    </ContentCardSeries>
  )
}

export default SeriesCard
