import { configureStore } from '@reduxjs/toolkit'

import AmiiboApi from '../services/api'

import AmiiboReducer from '../store/reducer/amiibo'

export const store = configureStore({
  reducer: {
    amiibo: AmiiboReducer,
    [AmiiboApi.reducerPath]: AmiiboApi.reducer
  },
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware().concat(AmiiboApi.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
