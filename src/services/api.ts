// src/services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Amiibo } from '../types/Amiibos'

const AmiiboApi = createApi({
  reducerPath: 'AmiiboApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://amiiboapi.com/api/'
  }),
  endpoints: (builder) => ({
    getAmiiboBySeries: builder.query<Amiibo[], string>({
      query: (series) => `amiibo/?amiiboSeries=${encodeURIComponent(series)}`
    })
  })
})

export const { useGetAmiiboBySeriesQuery } = AmiiboApi

export default AmiiboApi
