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
      query: () => ({
        url: `${CUSTOMER_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.customer],
    }),
  }),
});

export const { useAddCustomerMutation, useGetAllCustomersQuery } = customerApi;
