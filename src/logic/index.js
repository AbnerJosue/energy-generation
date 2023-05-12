import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api  = createApi({
    reducerPath: 'splitApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: () => ({}),
})