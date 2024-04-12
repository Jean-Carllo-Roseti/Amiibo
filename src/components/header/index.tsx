import { HContent, HList, HItem } from './styles'

const Header = () => {
  return (
    <HContent>
      <div className="container">
        <h1>Biblioteca Amiibo</h1>
        <HList>
          <HItem>home</HItem>
          <HItem>serie</HItem>
          <HItem>personagem</HItem>
          <HItem>tipo</HItem>
        </HList>
      </div>
    </HContent>
  )
}

export default Header
