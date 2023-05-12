import { api } from '@/logic';

export const sourceApi = api.injectEndpoints({
    endpoints: (builder) => (
        {
            getServices: builder.query({
                query: (token) => ({
                    url: '/api/data',
                    method: 'get', 
                    headers: { 
                        'Content-Type': 'text/plain'
                      },
                })
            }),
        }
    )
})

export const { useLazyGetServicesQuery } = sourceApi;