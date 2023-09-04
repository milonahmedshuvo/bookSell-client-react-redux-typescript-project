import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5000"}),
    tagTypes: ['postData'],
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => "/allBooks",
            providesTags: ["postData"]
        }),
        allbookproductroute: builder.query({
            query: () => "/allbookproduct",
            providesTags: ["postData"]
        }),
        getPublicationYear: builder.query({
            query: () => "/getPublicationyear"
        }),
        getGente : builder.query({
            query: () => "/getGenre"
        }),
        newbookpost: builder.mutation({
            query: ({data}) => ({
                url: "/addnewbook",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["postData"]
        }),
        getOneBook: builder.query({
            query: (id) => `/getOneProdcut/${id}`,
            providesTags:["postData"]
        }),
        updateComments: builder.mutation({
            query: ({id, data}) => ({
                url: `/updateComments/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ['postData']
        }),
        bookDelete: builder.mutation({
            query: (id) => ({
                url: `${id}`,
                method:"DELETE"
            })            
        }),
        bookupdate: builder.mutation({
            query: ({id, data}) => ({
                url: `/bookupdate/${id}`,
                method:"PATCH",
                body: data
            }),
            invalidatesTags: ['postData']
        })
    })
})






export const { useGetAllBooksQuery, useGetPublicationYearQuery, useGetGenteQuery, useNewbookpostMutation, useGetOneBookQuery, useUpdateCommentsMutation, useAllbookproductrouteQuery, useBookDeleteMutation, useBookupdateMutation } = api