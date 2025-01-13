import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const consultingApi = createApi({
  reducerPath: 'consultingApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7070/' }),
  endpoints: (builder) => {
      return ({
          getConsulting: builder.query({
              query: () => `consulting`,
          }),
          addConsulting: builder.mutation({
              query: (newConsulting) =>({
                url:"consulting",
                body:newConsulting,
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
              })
          }),
          deleteConsulting:builder.mutation({
            query:(id)=> ({
                url:`consulting/${id}`,
                method:"DELETE"
            })
          })
      })
  },
})
export const { useGetConsultingQuery, useAddConsultingMutation,useDeleteConsultingMutation } = consultingApi