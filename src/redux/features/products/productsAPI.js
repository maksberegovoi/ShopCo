import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { mockProducts } from "../../../../data/produсts.js";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Products", "Reviews", "Details"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      queryFn: async ({ page = 1, limit = 9 } = {}) => {
        await new Promise((resolve) => setTimeout(resolve, 200));

        const start = (page - 1) * limit;
        const end = start + limit;

        const products = mockProducts.slice(start, end).map((product) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          basePrice: product.basePrice,
          discount: product.discount,
          rating: product.rating,
          gallery: [product.gallery[0]],
        }));

        return {
          data: {
            items: products,
            total: mockProducts.length,
            page: page,
            limit: limit,
          },
        };
      },
      providesTags: ["Products"],
    }),

    getProductById: builder.query({
      queryFn: async (id) => {
        await new Promise((resolve) => setTimeout(resolve, 200));

        const product = mockProducts.find(
          (product) => product.id === parseInt(id),
        );

        return {
          data: {
            id: product.id,
            name: product.name,
            price: product.price,
            basePrice: product.basePrice,
            discount: product.discount,
            rating: product.rating,
            gallery: product.gallery,
            type: product.type,
            style: product.style,
            sizes: product.sizes,
            colors: product.colors,
          },
        };
      },
      providesTags: ["Products"],
    }),

    getProductReviews: builder.query({
      queryFn: async (id) => {
        await new Promise((resolve) => setTimeout(resolve, 200));

        const product = mockProducts.find(
          (product) => product.id === parseInt(id),
        );

        return { data: product?.reviews || [] };
      },
      providesTags: ["Reviews"],
    }),

    getProductDetails: builder.query({
      queryFn: async (id) => {
        await new Promise((resolve) => setTimeout(resolve, 200));

        const product = mockProducts.find(
          (product) => product.id === parseInt(id),
        );

        return { data: product?.details || [] };
      },
      providesTags: ["Details"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetProductReviewsQuery,
  useGetProductDetailsQuery,
} = productsApi;
