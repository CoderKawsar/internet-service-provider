import { IMeta, IPackage } from "@/types/common";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PACKAGE_URL = "/packages";
const STREAMING_SERVICE_URL = "/streaming-services";

export const packageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addPackage: build.mutation({
      query: (data) => ({
        url: `${PACKAGE_URL}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.package],
    }),
    getAllPackages: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: `${PACKAGE_URL}`,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IPackage[] | undefined, meta: IMeta) => {
        return {
          packages: response,
          meta,
        };
      },
      providesTags: [tagTypes.package],
    }),
    getSinglePackage: build.query({
      query: (id: string) => ({
        url: `${PACKAGE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.package],
    }),
    addStreamingService: build.mutation({
      query: (data) => ({
        url: `${STREAMING_SERVICE_URL}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.streamingService],
    }),
    getAllStreamingServices: build.query({
      query: () => ({
        url: `${STREAMING_SERVICE_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.streamingService],
    }),
  }),
});

export const {
  useAddPackageMutation,
  useGetAllPackagesQuery,
  useGetSinglePackageQuery,
  useAddStreamingServiceMutation,
  useGetAllStreamingServicesQuery,
} = packageApi;
