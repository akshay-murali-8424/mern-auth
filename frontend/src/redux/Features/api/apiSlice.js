import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../../urls';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (loginData) => ({
                url: '/login',
                method: "POST",
                body: loginData
            })
        }),
        userRegister: builder.mutation({
            query: (registerData)=> ({
                url: '/register',
                method: "POST",
                body: registerData
            })
        }),
        adminLogin: builder.mutation({
            query: (loginData)=> ({
                url:'/admin/login',
                method: "POST",
                body: loginData
            })
        })
    })
})

export const { useUserLoginMutation, useUserRegisterMutation,useAdminLoginMutation } = apiSlice;
