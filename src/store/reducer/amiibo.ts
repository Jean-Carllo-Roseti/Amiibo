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
}

const initialState: AmiiboState = {
  loading: false,
  amiibos: [],
  page: 0,
  error: null
}

const AmiiboSlice = createSlice({
  name: 'amiibo',
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true
    },
    amiibosLoaded(state, action: PayloadAction<AmiiboType[]>) {
      state.amiibos = [...state.amiibos, ...action.payload]
      state.loading = false
    },
    incrementPage(state) {
      state.page += 1
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload
      state.loading = false
    }
  }
})

export const { startLoading, amiibosLoaded, incrementPage, setError } =
  AmiiboSlice.actions
export default AmiiboSlice.reducer
