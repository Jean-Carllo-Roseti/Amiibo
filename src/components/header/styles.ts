import styled from 'styled-components'
import { cores } from '../../styles'

export const HContent = styled.header`
  background-color: ${cores.vermelhoHeader};
  padding-top: 20px;
  padding-bottom: 14px;

  .mario:hover {
    transform: translateY(
      -10px
    ); /* Adicionando a transformação no hover da classe mario */
  }
`

export const HList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  align-items: center;
  margin-bottom: 0;

  @media (max-width: 768px) {
    justify-content: space-between;
    margin: 0 100px;
  }

  @media (max-width: 576px) {
    margin: 0;
  }

  img {
    width: 84px;
  }

  li {
    background-color: ${cores.vermelhoButtonH};
    border-radius: 8px;
    padding: 0 12px;
    transition: transform 0.5s ease;

    :hover {
      transform: translateY(-3px);
    }

    @media (max-width: 768px) {
      border-bottom: 4px solid #fff;
    }
  }

  .link {
    color: #c1c1c1;
    text-decoration: none;
    transition: transform 0.5s ease;
    display: inline-block;

    @media (max-width: 768px) {
      color: #fff;
    }
  }

  .link:hover {
    color: #fff;
  }
`

export const Hamburguer = styled.div`
  width: 32px;
  margin-bottom: 8px;
  cursor: pointer;
  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: #fff;
    margin-bottom: 4px;

    @media (min-width: 768px) {
      display: none;
    }
  }
`
export const Hitem = styled.li`
  @media (max-width: 768px) {
    display: none;
  }
`
export const HamLink = styled.div`
  display: none;

  &.is-open {
    display: block;
  }
`
export const TotalHamburguer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`
