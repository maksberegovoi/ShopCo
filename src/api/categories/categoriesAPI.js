import { api } from '../api.jsx'

export const homePageApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getHomeSections: builder.query({
            query: () => ({
                url: '/home/categories',
                method: 'GET'
            }),
            transformResponse: (response) => response.data
        })
    })
})

export const { useGetHomeSectionsQuery } = homePageApi
