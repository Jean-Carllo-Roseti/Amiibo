import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

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

const Carrossel = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        data-interval="3000" // Isso faz com que o carrossel mude automaticamente a cada 3 segundos
      >
        <ol className="carousel-indicators">
          {/* Indicadores para cada item */}
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={SuperSmash}
              className="d-block w-100"
              alt="Super Smash Bros"
            />
          </div>
          <div className="carousel-item">
            <img src={Mario} className="d-block w-100" alt="Super Mario" />
          </div>
          <div className="carousel-item">
            <img src={Metroid} className="d-block w-100" alt="Metroid" />
          </div>
          <div className="carousel-item">
            <img src={Yoshy} className="d-block w-100" alt="Yoshi" />
          </div>
          <div className="carousel-item">
            <img src={Kirby} className="d-block w-100" alt="Kirby" />
          </div>
          <div className="carousel-item">
            <img src={Pokemon} className="d-block w-100" alt="Pokemon" />
          </div>
          <div className="carousel-item">
            <img
              src={Zelda}
              className="d-block w-100"
              alt="The Legend of Zelda"
            />
          </div>
          <div className="carousel-item">
            <img src={FireEmblem} className="d-block w-100" alt="Fire Emblem" />
          </div>
          <div className="carousel-item">
            <img src={Splatton} className="d-block w-100" alt="Splatoon" />
          </div>
          <div className="carousel-item">
            <img src={Animal} className="d-block w-100" alt="Animal Crossing" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  )
}

export default Carrossel
