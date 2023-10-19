import { ICustomer, IMeta } from "@/types/common";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const CUSTOMER_URL = "/customers";

export const customerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addCustomer: build.mutation({
      query: (customerData) => ({
        url: `${CUSTOMER_URL}`,
        method: "POST",
        data: customerData,
      }),
      invalidatesTags: [tagTypes.customer],
    }),
    getAllCustomers: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${CUSTOMER_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: ICustomer[] | undefined, meta: IMeta) => {
        return {
          packages: response,
          meta,
        };
      },
      providesTags: [tagTypes.customer],
    }),
    getCustomerById: build.query({
      query: (customerId: string) => ({
        url: `${CUSTOMER_URL}/${customerId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.customer],
    }),
    getCustomerByUserId: build.query({
      query: (userId: string) => ({
        url: `${CUSTOMER_URL}/user/${userId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.customer],
    }),
  }),
});

export const {
  useAddCustomerMutation,
  useGetAllCustomersQuery,
  useGetCustomerByIdQuery,
  useGetCustomerByUserIdQuery,
} = customerApi;
