import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api  = createApi({
    reducerPath: 'splitApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://backend-services-vttu.onrender.com/' }),
    endpoints: () => ({}),
})