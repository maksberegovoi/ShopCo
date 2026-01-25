import { describe, it, expect } from "vitest";
import { buildSearchIndex, searchProducts } from "./searchProducts";
import { indexedProducts } from "../../../data/produсts.js";

const products = [
  {
    id: 1,
    name: "Black T-Shirt",
    description: "Classic cotton t-shirt",
    brand: "hm",
    type: "T-shirts",
    style: "Casual",
    gender: "male",
    colors: [{ name: "black" }, { name: "white" }],
    sizes: [{ name: "Small" }, { name: "Large" }],
    details: [
      {
        info: [{ key: "material", value: "100% Cotton" }],
      },
    ],
    price: 100,
  },
  {
    id: 2,
    name: "White Hoodie",
    description: "Warm hoodie for winter",
    brand: "nike",
    type: "Hoodies",
    style: "Sport",
    gender: "female",
    colors: [{ name: "white" }],
    sizes: [{ name: "Medium" }],
    details: [
      {
        info: [{ key: "material", value: "Polyester" }],
      },
    ],
    price: 200,
  },
];

describe("buildSearchIndex", () => {
  it("adds __search field", () => {
    const indexed = buildSearchIndex(products);
    expect(indexed[0]).toHaveProperty("__search");
    expect(typeof indexed[0].__search).toBe("string");
  });

  it("does not remove original fields", () => {
    const indexed = buildSearchIndex(products);
    expect(indexed[0].name).toBe("Black T-Shirt");
    expect(indexed[0].price).toBe(100);
  });

  it("normalizes search text", () => {
    const indexed = buildSearchIndex(products);
    expect(indexed[0].__search).toContain("black t shirt");
    expect(indexed[0].__search).toContain("cotton");
  });
});

describe("searchProducts", () => {
  const indexed = buildSearchIndex(products);

  it("returns all products for empty query", () => {
    const result = searchProducts(indexed, "");
    expect(result.length).toBe(2);
  });

  it("finds by name", () => {
    const result = searchProducts(indexed, "black");
    expect(result.map((p) => p.id)).toEqual([1]);
  });

  it("finds by description", () => {
    const result = searchProducts(indexed, "cotton");
    expect(result.map((p) => p.id)).toEqual([1]);
  });

  it("finds by nested fields (colors)", () => {
    const result = searchProducts(indexed, "white");
    expect(result.map((p) => p.id)).toEqual([2, 1]);
  });

  it("supports multi-word search", () => {
    const result = searchProducts(indexed, "black cotton");
    expect(result.map((p) => p.id)).toEqual([1]);
  });

  it("returns empty array if nothing matches", () => {
    const result = searchProducts(indexed, "leather");
    expect(result).toEqual([]);
  });

  it("prioritizes name matches in sorting", () => {
    const result = searchProducts(indexed, "white");
    expect(result[0].name).toBe("White Hoodie");
  });
});
