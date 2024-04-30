// src/uteis/index.ts
import { Amiibo } from '../types/Amiibos' // Ajuste o caminho se necessário

export function shuffleArray(array: Amiibo[]): Amiibo[] {
  const newArray = array.slice() // Faz uma cópia do array original
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]] // Troca os elementos
  }
  return newArray
}

// Função para copiar a resposta da API para um novo array
// export function copyAmiiboData(amiibos: Amiibo[] | undefined): Amiibo[] {
//   // Verifica se amiibos é um array válido
//   if (Array.isArray(amiibos)) {
//     // Faz uma cópia do array 'amiibos' para garantir que estamos trabalhando com uma nova instância do array
//     return [...amiibos]
//   }
//   // Retorna um array vazio se não houver dados válidos
//   return []
// }
