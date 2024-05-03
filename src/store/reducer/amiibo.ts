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
    //   startLoading(state) {
    //     state.loading = true
    //     state.error = null
    //   },
    //   amiibosLoaded(state, action: PayloadAction<AmiiboType[]>) {
    //     state.amiibos = action.payload
    //     state.loading = false
    //   },
    //   amiibosLoadFailure(state, action: PayloadAction<string>) {
    //     state.error = action.payload
    //     state.loading = false
    //   },
    //   setPage(state, action: PayloadAction<number>) {
    //     state.page = action.payload
    //   },
    //   incrementPage(state) {
    //     state.page += 1
    //   },
    //   setFilter(
    //     state,
    //     action: PayloadAction<{
    //       field: keyof AmiiboState['filters']
    //       value: string
    //     }>
    //   ) {
    //     state.filters[action.payload.field] = action.payload.value
    //   }
  }
})

export const {
  amiibosSearched,
  searchAmiibos
  // startLoading,
  // amiibosLoaded,
  // amiibosLoadFailure,
  // setPage,
  // incrementPage,
  // setFilter
} = AmiiboSlice.actions
export default AmiiboSlice.reducer
