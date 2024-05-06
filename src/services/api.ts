// src/services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Amiibo, ApiAmiiboResponse } from '../types/Amiibos'

const AmiiboApi = createApi({
  reducerPath: 'AmiiboApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://amiiboapi.com/api/'
  }),
  endpoints: (builder) => ({
    getAmiiboBySeries: builder.query<Amiibo[], string>({
      query: (series) => `amiibo/?amiiboSeries=${encodeURIComponent(series)}`
    }),
    getAmiiboByHeadAndTail: builder.query<
      ApiAmiiboResponse,
      { head: string; tail: string }
    >({
      query: ({ head, tail }) => `amiibo/?head=${head}&tail=${tail}`
    }),
    getAmiibos: builder.query({
      query: () => `amiibo/`,
      transformResponse: (response: ApiAmiiboResponse) => response.amiibo
    }),
    getAmiibosByGames: builder.query({
      query: (gameSeriesKey) =>
        `amiibo/?gameseries=${encodeURIComponent(gameSeriesKey)}`,
      transformResponse: (response: ApiAmiiboResponse) => response.amiibo
    }),
    getAmiibosByType: builder.query({
      query: (typesKey) => `amiibo/?type=${encodeURIComponent(typesKey)}`,
      transformResponse: (response: ApiAmiiboResponse) => response.amiibo // Isso assume que a API retorna um objeto com uma propriedade 'amiibo' contendo o array dos dados
    })
  })
})

export const {
  useGetAmiibosByTypeQuery,
  useGetAmiibosByGamesQuery,
  useGetAmiiboBySeriesQuery,
  useGetAmiiboByHeadAndTailQuery,
  useGetAmiibosQuery
} = AmiiboApi

export default AmiiboApi
