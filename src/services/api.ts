import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Amiibo } from '../types/Amiibos'

const AmiiboApi = createApi({
  reducerPath: 'AmiiboApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://amiiboapi.com/api/'
  }),
  endpoints: (builder) => ({
    getAmiibos: builder.query<Amiibo[], void>({
      query: () => '/amiibo'
    }),
    getAmiiboBySeries: builder.query<Amiibo[], string>({
      query: (series) => `/amiibo/?amiiboSeries=${series}`
    })
  })
})

export const { useGetAmiibosQuery, useGetAmiiboBySeriesQuery } = AmiiboApi

export default AmiiboApi
