import { api } from '@/logic';

export const sourceApi = api.injectEndpoints({
    endpoints: (builder) => (
        {
            getServices: builder.query({
                query: (id) => (console.log(id),{
                    url: '/api/data',
                    method: 'post',
                    data: `${id}`,
                    headers: { 
                        'Content-Type': 'text/plain'
                      },
                })
            }),
        }
    )
})

export const { useLazyGetServicesQuery } = sourceApi;