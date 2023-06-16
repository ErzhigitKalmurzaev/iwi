import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { inctance } from '../utils/axios';

export const api = createApi({
    reducerPath: 'iwi',
    baseQuery: fetchBaseQuery({ 
      baseUrl: 'https://api.kinopoisk.dev/v1/',
      prepareHeaders: (headers) => {
          headers.set('Content-Type', 'application/json');
          headers.set('X-API-KEY', 'PHV75ZD-51ZM0G2-GV0ZTT0-QMV6581');
          return headers;
      }
    }),
    endpoints: builder => ({
      getContent: builder.query({
        query: (params) => {
          let url = `movie?page=1&limit=24`;

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
          return `movie?page=1&limit=24&${params}`;
        }
      })
    })
  });

  export const { useGetContentQuery, useGetContentByGenreQuery } = api; 