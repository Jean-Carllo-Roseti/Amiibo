import { Carousel } from 'react-bootstrap'
import Mario from '../../assets/image/super-mario-bros-movie.webp'
import Metroid from '../../assets/image/Metroid.avif'
import Zelda from '../../assets/image/ZeldaT.avif'
import Animal from '../../assets/image/Animal Crossing.avif'
import FireEmblem from '../../assets/image/fireEmblem.avif'
import Kirby from '../../assets/image/kirbyfighters2.jpg'
import Splatton from '../../assets/image/Splatoon.avif'
import SuperSmash from '../../assets/image/Super Smash Bros.avif'
import Yoshy from '../../assets/image/Yoshy.jpg'
import Pokemon from '../../assets/image/pokemon.jpg'

import { ImageCar } from './styel'

const Carrossel = () => {
  return (
    <Carousel interval={3000} fade>
      <Carousel.Item>
        <ImageCar
          className="limite d-block w-100 "
          src={SuperSmash}
          alt="Super Smash Bros"
        />
      </Carousel.Item>
      <Carousel.Item>
        <ImageCar
          className="limite d-block w-100  "
          src={Mario}
          alt="Super Mario"
        />
      </Carousel.Item>
      <Carousel.Item>
        <ImageCar
          className="limite d-block w-100 "
          src={Metroid}
          alt="Metroid"
        />
      </Carousel.Item>
      <Carousel.Item>
        <ImageCar className="limite d-block w-100 " src={Yoshy} alt="Yoshi" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageCar className="limite d-block w-100 " src={Kirby} alt="Kirby" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageCar
          className="limite d-block w-100 "
          src={Pokemon}
          alt="Pokemon"
        />
      </Carousel.Item>
      <Carousel.Item>
        <ImageCar
          className="limite d-block w-100 "
          src={Zelda}
          alt="The Legend of Zelda"
        />
      </Carousel.Item>
      <Carousel.Item>
        <ImageCar
          className="limite d-block w-100 "
          src={FireEmblem}
          alt="Fire Emblem"
        />
      </Carousel.Item>
      <Carousel.Item>
        <ImageCar
          className="limite d-block w-100 "
          src={Splatton}
          alt="Splatoon"
        />
      </Carousel.Item>
      <Carousel.Item>
        <ImageCar
          className="limite d-block w-100 "
          src={Animal}
          alt="Animal Crossing"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Carrossel
