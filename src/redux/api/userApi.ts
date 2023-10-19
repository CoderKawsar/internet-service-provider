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
    registerUser: build.mutation({
      query: (userData) => ({
        url: `${USER_URL}`,
        method: "POST",
        data: userData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    getAllUsers: build.query({
      query: () => ({
        url: `${USER_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    getSingleUser: build.query({
      query: (id: string) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
} = userApi;
