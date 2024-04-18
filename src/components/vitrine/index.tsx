import { Link } from 'react-router-dom'
import { Amiibo, ApiAmiiboResponse } from '../../types/Amiibos'

type Props = {
  amiibos: ApiAmiiboResponse // Usando o novo tipo que inclui a resposta esperada da API
}

const Vitrine = ({ amiibos }: Props) => {
  // Já que agora esperamos uma estrutura de objeto, não precisamos mais verificar se é um array
  const amiiboList = amiibos.amiibo // Diretamente acessando a lista de amiibos

  return (
    <section className="container">
      <ul>
        <h1>Amiibos</h1>
        {amiiboList.map((amiibo: Amiibo, index: number) => (
          <li key={amiibo.key || index}>
            <Link
              to={`/amiibos/${encodeURIComponent(amiibo.key || index.toString())}`}
            >
              <img src={amiibo.image} alt={amiibo.name} />
              <h3>{amiibo.name}</h3>
              <p>Série: {amiibo.amiiboSeries}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Vitrine

// Parece que o TypeScript está reclamando porque o tipo AmiiboList que você definiu não inclui a propriedade amiibo. Vamos corrigir isso ajustando os tipos e garantindo que o TypeScript entenda a estrutura dos dados que você está esperando receber da API.

// Se a API sempre retorna um objeto que inclui uma lista de amiibos sob a chave amiibo, você pode definir seus tipos da seguinte maneira para refletir essa estrutura:

// typescript

// export type Amiibo = {
//   key: string;
//   name: string;
//   image: string;
//   amiiboSeries: string;
// };

// export type AmiiboApiResponse = {
//   amiibo: Amiibo[];
// };

// type Props = {
//   amiibos: AmiiboApiResponse; // Aqui estamos esperando o objeto com a chave `amiibo`
// };

// const Vitrine = ({ amiibos }: Props) => {
//   // Extrair a lista de amiibos ou fornecer uma lista vazia se não estiver presente
//   const amiiboList = amiibos?.amiibo || [];

//   return (
//     <section className="container">
//       <ul>
//         <h1>Amiibos</h1>
//         {amiiboList.map((amiibo: Amiibo, index: number) => (
//           <li key={amiibo.key || index}>
//             <Link to={`/amiibos/${encodeURIComponent(amiibo.key || index.toString())}`}>
//               <img src={amiibo.image} alt={amiibo.name} />
//               <h3>{amiibo.name}</h3>
//               <p>Série: {amiibo.amiiboSeries}</p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default Vitrine;

// Mudanças Importantes:

//     Definição de Tipos: AmiiboApiResponse agora representa o objeto que inclui a lista de amiibos sob a chave amiibo.
//     Props: O tipo das props do componente Vitrine foi atualizado para esperar um AmiiboApiResponse, que é o formato esperado dos dados.

// Com essas mudanças, você deverá resolver o problema com o TypeScript e garantir que o componente Vitrine possa processar os dados corretamente, esperando um objeto que contém uma lista de amiibos.
