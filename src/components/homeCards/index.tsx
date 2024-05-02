import { useState } from 'react'
import { AmiiboItem } from '../vitrine/style'
import {
  CardBody,
  ImageEspaco,
  Botao,
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
      <CardBody>
        <AmiiboItem>
          <h3>{name}</h3>
          <img src={image} alt={`Foto do personagem ${name}`} />
          <div>
            <Botao onClick={() => setModalOpen(true)}>Saiba Mais</Botao>
          </div>
        </AmiiboItem>
      </CardBody>
      <Modal className={modalOpen ? 'visible' : ''}>
        <OverlayContainer>
          <ConteudoOver>
            <ImageEspaco>
              <img src={image} alt={`Foto do personagem ${name}`} />
            </ImageEspaco>
            <OutraCoisa>
              <h2 className="text-center">{name}</h2>
              {amiiboSeries && <p>Amiibo Series: {amiiboSeries}</p>}
              {gameSeries && <p>Game Series: {gameSeries}</p>}
              {release && (
                <ul>
                  <li>au: {release.au}</li>
                  <li>eu: {release.eu}</li>
                  <li>jp: {release.jp}</li>
                  <li>na: {release.na}</li>
                </ul>
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
