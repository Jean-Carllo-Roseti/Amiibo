import styled from 'styled-components'
import { AmiiboItem } from '../vitrine/style'

export const CardBody = styled.div`
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    box-shadow: 0 0 16px rgba(144, 238, 0, 1);
    transition: border-color 2.5s ease;
  }

  ${AmiiboItem} {
    width: 304px;
    margin: 0;

    @media (max-width: 768px) {
      margin: 0 auto;
      margin-bottom: 16px;
    }
  }

  img {
    width: 283px;
    height: 390px;
    border-radius: 16px;

    @media (max-width: 768px) {
      width: 70%;
      height: 80%;
      border-radius: 16px;
    }
  }

  h3,
  div {
    text-align: center;
    padding: 8px 0;
  }

  div {
    a {
      text-decoration: none;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  display: none;
  justify-content: center;
  align-items: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
    content: '';
  }
`
export const ConteudoOver = styled.div`
  background-color: white;
  margin-top: 92px;
  width: 944px;
  padding: 38px;
  display: flex;
  z-index: 4;
  border-radius: 16px;

  img {
    margin-right: 42px;
    height: 570px;
    width: 400px;

    @media (max-width: 768px) {
      width: 180px;
      height: 388px;
      margin: 0 auto;
      margin-right: 12px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 70%;
    margin: auto;
    padding: 16px;
    margin-top: 100px;
  }
`

export const OverlayContainer = styled.div`
  z-index: 5;
`
export const ImageEspaco = styled.div``

export const OutraCoisa = styled.ul`
  border-radius: 8px;
  padding: 16px 80px;
  width: 600px;
  background-color: #f1f1f1f1;

  @media (max-width: 768px) {
    width: 60%;

    h4 {
      padding-left: 6px;
    }

    h4,
    h5 {
      font-size: 12px;
    }
  }
`
export const showOverlay = styled.div``

export const AmiibosInform = styled.ul`
  padding-left: 16px;
`
