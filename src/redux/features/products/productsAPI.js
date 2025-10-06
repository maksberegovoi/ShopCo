import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { mockProducts } from "../../../../data/produсts.js";
import { filterProducts } from "../../../utils/filterProducts.js";
import { searchProducts } from "../../../utils/searchProducts.js";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Products", "Reviews", "Details"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      queryFn: async ({ page = 1, limit = 9, filters = {} } = {}) => {
        await new Promise((resolve) => setTimeout(resolve, 200));

        const filteredProducts = filterProducts(filters, mockProducts);

        const start = (page - 1) * limit;
        const end = start + limit;
        const paginatedProducts = filteredProducts
          .slice(start, end)
          .map((product) => ({
            id: product.id,
            name: product.name,
            price: product.price,
            basePrice: product.basePrice,
            discount: product.discount,
            rating: product.rating,
            gallery: [product.gallery[0]],

            brand: product.brand,
            colors: product.colors,
            sizes: product.sizes,
          }));
        return {
          data: {
            items: paginatedProducts,
            total: filteredProducts.length,
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
      queryFn: async ({ page = 1, limit = 6, id } = {}) => {
        await new Promise((resolve) => setTimeout(resolve, 200));

        const start = (page - 1) * limit;
        const end = start + limit;

        const product = mockProducts.find(
          (product) => product.id === parseInt(id),
        );

        const allReviews = product?.reviews || [];
        const items = allReviews.slice(start, end);
        const hasMore = end < allReviews.length;

        return {
          data: {
            items,
            hasMore,
            page,
            limit,
            total: allReviews.length,
          },
        };
      },
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        return `${endpointName}-${queryArgs.id}`;
      },
      merge: (currentCache, newData) => {
        if (newData.page === 1) {
          return newData;
        }

        return {
          ...newData,
          items: [...currentCache.items, ...newData.items],
        };
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg?.page !== previousArg?.page;
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
    searchProducts: builder.query({
      queryFn: async (searchQuery) => {
        await new Promise((resolve) => setTimeout(resolve, 300));

        if (!searchQuery || searchQuery.trim().length < 2) {
          return { data: { items: [] } };
        }

        const result = searchProducts(mockProducts, searchQuery);

        const products = result.map((product) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          basePrice: product.basePrice,
          discount: product.discount,
          rating: product.rating,
          gallery: product.gallery,
          colors: product.colors,
        }));

        return {
          data: {
            items: products,
          },
        };
      },
      providesTags: ["Products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetProductReviewsQuery,
  useGetProductDetailsQuery,
  useSearchProductsQuery,
} = productsApi;
