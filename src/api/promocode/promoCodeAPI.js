import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { mockPromoCodes } from "../../../data/promocodes.js";

export const promoCodeApi = createApi({
  reducerPath: "promoCodeApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Promocode"],
  endpoints: (builder) => ({
    checkPromoCode: builder.query({
      queryFn: async ({ code } = {}) => {
        await new Promise((resolve) => setTimeout(resolve, 300));

        const response = mockPromoCodes.filter(
          (promoCode) => promoCode.code === code,
        );

        if (response.length === 0) {
          return { error: { status: 404, data: "Promo code not found" } };
        }

        return { data: response[0] };
      },
      providesTags: ["Promocode"],
    }),
  }),
});

export const { useCheckPromoCodeQuery, useLazyCheckPromoCodeQuery } =
  promoCodeApi;
