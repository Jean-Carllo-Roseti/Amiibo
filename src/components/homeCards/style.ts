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
      margin: 0 auto;
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
  width: 742px;
  height: 480px;
  padding: 16px;
  display: flex;
  z-index: 4;
  border-radius: 16px;

  @media (max-width: 768px) {
    width: 100%;
    height: 448px;
    margin: auto;
    padding: 16px;
    margin-top: 116px;
    position: relative;

    button {
      position: absolute;
      top: 6px;
      left: 6px;
    }
  }

  @media (max-width: 576px) {
    display: flex;
  }

  img {
    margin-right: 18px;
    height: 428px;
    width: 328px;

    @media (max-width: 356px) {
      display: none;
    }

    @media (max-width: 768px) {
      width: 180px;
      height: 388px;
      margin: 0 auto;
      margin-right: 12px;
    }
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
    width: 200px;
    padding: 16px 20px;
    margin-bottom: 0;

    p {
      font-size: 18px;
      margin-bottom: 4px;
    }
  }
`
export const showOverlay = styled.div``

export const AmiibosInform = styled.ul`
  padding-left: 16px;

  @media (max-width: 768px) {
    li {
      p {
        font-size: 14px;
        margin-bottom: 8px;
      }
    }
  }
`
