import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { mockCategories } from "../../../../data/categories.js";
import { mockProducts } from "../../../../data/produсts.js";

const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fakeBaseQuery,
  tagTypes: ["Categories"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      queryFn: async () => {
        await new Promise((resolve) => setTimeout(resolve, 300));
        const productsMap = new Map(mockProducts.map((p) => [p.id, p]));

        const categories = mockCategories.map((category) => ({
          name: category.name,
          products: category.products
            .map((id) => productsMap.get(id))
            .map(
              ({ id, name, price, basePrice, discount, gallery, rating }) => ({
                id,
                name,
                price,
                basePrice,
                discount,
                gallery,
                rating,
              }),
            ),
        }));
        return { data: categories };
      },
      providesTags: ["Categories"],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
export default categoriesApi;
