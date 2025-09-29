import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query";
import { mockProducts } from "../../../../data/produсts.js";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Product", "Review"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      queryFn: async (filters) => {
        await new Promise((resolve) => setTimeout(resolve, 500));

        let filtered = mockProducts;
        if (filters?.type) {
          filtered = filtered.filter((p) => p.type === filters.type);
        }

        return { data: filtered };
      },
      providesTags: ["Product"],
    }),

    getProduct: builder.query({
      queryFn: async (id) => {
        await new Promise((resolve) => setTimeout(resolve, 300));
        const product = mockProducts.find((p) => p.id === parseInt(id));
        return { data: product };
      },
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),

    getProductReviews: builder.query({
      queryFn: async (id) => {
        await new Promise((resolve) => setTimeout(resolve, 200));
        const reviews = mockReviews[id] || [];
        return { data: reviews };
      },
      providesTags: (result, error, id) => [{ type: "Review", id }],
    }),

    getCategories: builder.query({
      queryFn: async () => {
        return { data: mockCategories };
      },
    }),

    createProduct: builder.mutation({
      queryFn: async (newProduct) => {
        await new Promise((resolve) => setTimeout(resolve, 400));
        const product = { ...newProduct, id: Date.now() };
        mockProducts.push(product);
        return { data: product };
      },
      invalidatesTags: ["Product"],
    }),
  }),
});
