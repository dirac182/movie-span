import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const moviesApi = createApi({
    reducerPath: "movies",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5002",
        credentials: 'include',
    }),
    endpoints(builder) {
        return {
            searchMovie: builder.mutation({
                query: (searchTerm) => {
                    return {
                        url: "/search",
                        method: "GET",
                        params: {
                            searchTerm: searchTerm,
                        }
                    }
                }
            }),
            idSearch: builder.mutation({
                query: (movieId) => {
                    return {
                        url: "/searchMovieId",
                        method: "GET",
                        params: {
                            movieId,
                        }
                    }
                }
            }),
        }
    }
});

export const { useSearchMovieMutation, useIdSearchMutation } = moviesApi;
export { moviesApi };