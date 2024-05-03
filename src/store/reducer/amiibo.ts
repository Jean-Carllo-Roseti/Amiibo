import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Definindo o tipo para os dados do Amiibo
export type AmiiboType = {
  image: string
  name: string
  amiiboSeries: string
}

// Estado inicial com o tipo específico para o array de amiibos
export interface AmiiboState {
  loading: boolean
  amiibos: AmiiboType[]
  page: number
  error: string | null
  filters: {
    series: string
    type: string
    name: string
  }
}

const initialState: AmiiboState = {
  loading: false,
  amiibos: [],
  page: 0,
  error: null,
  filters: {
    series: '',
    type: '',
    name: ''
  }
}

const AmiiboSlice = createSlice({
  name: 'amiibo',
  initialState,
  reducers: {
    amiibosSearched(state, action: PayloadAction<AmiiboType[]>) {
      state.amiibos = action.payload
      state.loading = false
    },
    searchAmiibos(state, action: PayloadAction<string>) {
      state.filters.name = action.payload
    }
  }
})

export const { amiibosSearched, searchAmiibos } = AmiiboSlice.actions
export default AmiiboSlice.reducer
