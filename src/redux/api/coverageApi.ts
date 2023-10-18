import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const COVERAGE_DISTRICT_URL = "/coverage-districts";
const COVERAGE_UPAZILLA_OR_THANA_URL = "/coverage-upazilla-or-thanas";
const COVERAGE_AREA_URL = "/coverage-areas";

export const coverageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addCoverageDistrict: build.mutation({
      query: (district) => ({
        url: `${COVERAGE_DISTRICT_URL}`,
        method: "POST",
        data: district,
      }),
      invalidatesTags: [tagTypes.coverageDistrict],
    }),
    getAllCoverageDistricts: build.query({
      query: () => ({
        url: `${COVERAGE_DISTRICT_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.coverageDistrict],
    }),
    addCoverageUpazillaOrThana: build.mutation({
      query: (upazillaOrThana) => ({
        url: `${COVERAGE_UPAZILLA_OR_THANA_URL}`,
        method: "POST",
        data: upazillaOrThana,
      }),
      invalidatesTags: [tagTypes.coverageUpazillaOrThana],
    }),
    getAllCoverageUpazillaOrThanas: build.query({
      query: () => ({
        url: `${COVERAGE_UPAZILLA_OR_THANA_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.coverageUpazillaOrThana],
    }),
    getUpazillaOrThanasOfADistrictId: build.query({
      query: (districtId) => ({
        url: `${COVERAGE_UPAZILLA_OR_THANA_URL}/district/${districtId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.coverageUpazillaOrThana],
    }),
    addCoverageArea: build.mutation({
      query: (coverageArea) => ({
        url: `${COVERAGE_AREA_URL}`,
        method: "POST",
        data: coverageArea,
      }),
      invalidatesTags: [tagTypes.coverageArea],
    }),
    getAllCoverageAreas: build.query({
      query: () => ({
        url: `${COVERAGE_AREA_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.coverageUpazillaOrThana],
    }),
    getCoverageAreasOfUpazillaOrThanaId: build.query({
      query: (upazillaOrThanaId) => ({
        url: `${COVERAGE_AREA_URL}/upazilla-or-thana/${upazillaOrThanaId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.coverageArea],
    }),
  }),
});

export const {
  useAddCoverageDistrictMutation,
  useGetAllCoverageDistrictsQuery,
  useAddCoverageUpazillaOrThanaMutation,
  useGetAllCoverageUpazillaOrThanasQuery,
  useGetUpazillaOrThanasOfADistrictIdQuery,
  useAddCoverageAreaMutation,
  useGetAllCoverageAreasQuery,
  useGetCoverageAreasOfUpazillaOrThanaIdQuery,
} = coverageApi;
