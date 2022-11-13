import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResponse } from "../../TypesResponse";

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({baseUrl: "https://api.json-generator.com/templates/ZM1r0eic3XEy/data"}),
  endpoints: (builder) => ({
    getJSONbyToken: builder.query<IResponse[], string>({
      query: (token: string) => `?access_token=${token}`
    })
  })
})

export const { useGetJSONbyTokenQuery } = jobsApi;
