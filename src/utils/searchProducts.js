export const searchProducts = (products, searchQuery) => {
  const query = searchQuery.toLowerCase().trim().split(/\s+/);

  const extractStrings = (value) => {
    if (typeof value === "string") {
      return [value.toLowerCase()];
    }
    if (Array.isArray(value)) {
      return value.flatMap((item) => extractStrings(item));
    }
    if (typeof value === "object" && value !== null) {
      return Object.values(value).flatMap((val) => extractStrings(val));
    }
    return [];
  };

  const filtered = products.filter((product) => {
    const excludeFields = [
      "gallery",
      "reviews",
      "id",
      "quantity",
      "basePrice",
      "price",
      "discount",
      "rating",
    ];

    const searchableProduct = Object.keys(product)
      .filter((key) => !excludeFields.includes(key))
      .reduce((obj, key) => {
        obj[key] = product[key];
        return obj;
      }, {});

    const productFields = extractStrings(searchableProduct);

    const searchableText = productFields.join(" ");

    return query.every((word) => searchableText.includes(word));
  });

  const sortedBySignificance = filtered.sort((a, b) => {
    const aNameMatch = query.every((word) =>
      a.name.toLowerCase().includes(word),
    );
    const bNameMatch = query.every((word) =>
      b.name.toLowerCase().includes(word),
    );

    if (aNameMatch && !bNameMatch) return -1;
    if (!aNameMatch && bNameMatch) return 1;
  });

  return sortedBySignificance;
};
