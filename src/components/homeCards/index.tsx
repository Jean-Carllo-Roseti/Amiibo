import { useState } from 'react'
import { AmiiboItem } from '../vitrine/style'
import {
  CardBody,
  AmiibosInform,
  ImageEspaco,
  Modal,
  ConteudoOver,
  OverlayContainer,
  OutraCoisa
} from './style'

type Props = {
  name: string
  image: string
  amiiboSeries?: string
  gameSeries?: string
  release?: {
    au: string | null
    eu: string | null
    jp: string | null
    na: string | null
  }
}

const Cards = ({ name, image, amiiboSeries, gameSeries, release }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <CardBody onClick={() => setModalOpen(true)}>
        <AmiiboItem>
          <h3>{name}</h3>
          <img src={image} alt={`Foto do personagem ${name}`} />
        </AmiiboItem>
      </CardBody>
      <Modal className={modalOpen ? 'visible' : ''}>
        <OverlayContainer>
          <ConteudoOver>
            <button
              onClick={() => setModalOpen(false)}
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
            <ImageEspaco>
              <img src={image} alt={`Foto do personagem ${name}`} />
            </ImageEspaco>
            <OutraCoisa>
              <h2 className="text-center ">{name}</h2>
              {amiiboSeries && <p>Amiibo Series: {amiiboSeries}</p>}
              {gameSeries && <p>Game Series: {gameSeries}</p>}
              {release && (
                <AmiibosInform>
                  <p className="ajuste">Datas de Lançamentos</p>
                  <li>
                    <p>
                      Austrália
                      <br /> {release.au}
                    </p>
                  </li>
                  <li>
                    <p>
                      EUA
                      <br /> {release.eu}
                    </p>
                  </li>
                  <li>
                    <p>
                      Japão
                      <br /> {release.jp}
                    </p>
                  </li>
                  <li>
                    <p>
                      América do Norte
                      <br /> {release.na}
                    </p>
                  </li>
                </AmiibosInform>
              )}
            </OutraCoisa>
          </ConteudoOver>
        </OverlayContainer>
        <div className="overlay" onClick={() => setModalOpen(false)}></div>
      </Modal>
    </>
  )
}

export default Cards
