// src/types/Amiibos.ts
export type Amiibo = {
  amiiboSeries: string
  character: string
  gameSeries: string
  head: string
  image: string
  name: string
  release: {
    au: string | null
    eu: string | null
    jp: string | null
    na: string | null
  }
  tail: string
  type: string
}

export type ApiAmiiboResponse = {
  amiibo: Amiibo[]
}
