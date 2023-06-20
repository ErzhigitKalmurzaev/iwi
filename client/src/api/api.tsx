import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { inctance } from '../utils/axios';

export const api = createApi({
    reducerPath: 'iwi',
    baseQuery: fetchBaseQuery({ 
      baseUrl: 'https://api.kinopoisk.dev/',
      prepareHeaders: (headers) => {
          headers.set('Content-Type', 'application/json');
          headers.set('X-API-KEY', 'PHV75ZD-51ZM0G2-GV0ZTT0-QMV6581');
          return headers;
      }
    }),
    endpoints: builder => ({
      getContent: builder.query({
        query: (params) => {
          let url = `v1/movie?page=1&limit=24`;

          if (typeof params === 'object') {
            Object.keys(params).forEach((key) => {
              url += `&${key}=${params[key]}`;
            });
          }
          
          return { url };
        }
      }),
      getContentByGenre: builder.query({
        query: (params) => {
          return `v1.3/movie?page=1&limit=24&${params}`;
        }
      }),
      getContentByName: builder.query({
        query: (params) => {
          return `v1.2/movie/search?page=1&limit=10&query=${params}`
        }
      })
    })
  });

  export const { useGetContentQuery, useGetContentByGenreQuery, useGetContentByNameQuery } = api; 