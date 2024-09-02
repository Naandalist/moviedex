import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;
const page = 1;

console.log("tmdbApiKey: ", tmdbApiKey);

// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints: (builder) => ({
    // * Get Movies
    getGenres: builder.query({
      query: () => (`/genre/movie/list?language=en&api_key=${tmdbApiKey}`)
    }),
    //* Get Movies By Type
    getMovies: builder.query({
      query: () => (`/movie/popular?language=en-US&page=${page}&api_key=${tmdbApiKey}`),
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
