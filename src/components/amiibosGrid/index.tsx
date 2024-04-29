import { AmiiboItem } from '../vitrine/style'
import { ContaienrAmiiboG } from './style'

const AmiiboGrid = () => {
  return (
    <>
      <h3 className="text-center m-5">Titulo</h3>
      <ContaienrAmiiboG className="container ">
        <AmiiboItem className="mb-5">
          <h4 className="text-center">nome</h4>
          <img src="https://placeholder.com/300x300" alt="" />
        </AmiiboItem>
      </ContaienrAmiiboG>
    </>
  )
}

export default AmiiboGrid

{
  /* <ContaienrAmiioG >
{amiibos.map((amiibo) => (
  <AmiiboItem className="mb-5" key={amiibo.tail}>
  <h3 className="text-center">{amiibo.name}</h3>
      <img src={amiibo.image} alt={amiibo.name} />
  </AmiiboItem>
))}
</ContaienrAmiioG> */
}
