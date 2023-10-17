import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const USER_URL = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: (loginData) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        data: loginData,
      }),
    }),
    getAllUsers: build.query({
      query: () => ({
        url: `${USER_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useLoginUserMutation, useGetAllUsersQuery } = userApi;
