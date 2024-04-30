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
      transformResponse: (response: ApiAmiiboResponse) => response.amiibo // Garante que a transformação está correta
    }),
    getAmiibosByGames: builder.query({
      query: (gameSeriesKey) =>
        `amiibo/?gameseries=${encodeURIComponent(gameSeriesKey)}`,
      transformResponse: (response: ApiAmiiboResponse) => response.amiibo // Garante que a transformação está correta
    }),
    getAmiibosByTyoe: builder.query({
      query: (typesKey) => `amiibo/?gameseries=${encodeURIComponent(typesKey)}`,
      transformResponse: (response: ApiAmiiboResponse) => response.amiibo // Garante que a transformação está correta
    })
  })
})

export const {
  useGetAmiibosByGamesQuery,
  useGetAmiiboBySeriesQuery,
  useGetAmiiboByHeadAndTailQuery,
  useGetAmiibosQuery
} = AmiiboApi

export default AmiiboApi
