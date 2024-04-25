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
    })
  })
})

export const { useGetAmiiboBySeriesQuery, useGetAmiiboByHeadAndTailQuery } =
  AmiiboApi

export default AmiiboApi
