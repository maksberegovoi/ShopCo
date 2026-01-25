export const searchProducts = (indexedProducts, searchQuery) => {
  const query = normalize(searchQuery).split(" ");
  if (!query.length) return indexedProducts;

  return indexedProducts
    .filter((p) => query.every((word) => p.__search.includes(word)))
    .sort((a, b) => {
      const aName = query.every((w) => normalize(a.name).includes(w));
      const bName = query.every((w) => normalize(b.name).includes(w));

      if (aName && !bName) return -1;
      if (!aName && bName) return 1;
      return 0;
    });
};

const normalize = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

const SEARCH_FIELDS = [
  "name",
  "description",
  "brand",
  "type",
  "style",
  "gender",
];

export const buildSearchIndex = (products) => {
  return products.map((product) => {
    const parts = [];

    for (const field of SEARCH_FIELDS) {
      if (typeof product[field] === "string") {
        parts.push(product[field]);
      }
    }

    if (Array.isArray(product.colors)) {
      for (const c of product.colors) {
        if (c.name) parts.push(c.name);
      }
    }

    if (Array.isArray(product.sizes)) {
      for (const s of product.sizes) {
        if (s.name) parts.push(s.name);
      }
    }

    if (Array.isArray(product.details)) {
      for (const block of product.details) {
        if (Array.isArray(block.info)) {
          for (const item of block.info) {
            if (item.value) parts.push(item.value);
          }
        }
      }
    }

    return {
      ...product,
      __search: normalize(parts.join(" ")),
    };
  });
};
