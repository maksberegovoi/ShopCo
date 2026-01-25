export const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-")
    .trim();
};

console.log(generateSlug("T-shirt"));
