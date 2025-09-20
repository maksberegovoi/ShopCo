

const productIds = [3,4,5]

const currentProductListIds = [1,2,3,4,5]
const updatedProductListIds = currentProductListIds.filter(id => !productIds.includes(id))

console.log(updatedProductListIds)