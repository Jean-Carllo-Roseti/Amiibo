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
