const products = [
  { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
  { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
  { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
  { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];
//find and return product by id
function getProductById(id) {
  return products.find(function (product) {
    return product.id === id;
  }) || null;
}
//return all products
function getAllProducts() {
  return products;
}
//filter products by catogery
function getProductsByCategory(category) {
  return products.filter(function (product) {
    return product.category === category;
  });
}
//search products by name
function searchProducts(query) {
  return products.filter(function (product) {
    return product.name.toLowerCase().includes(query.toLowerCase());
  });
}
//chech if product has enough stock
function checkStock(productId, quantity) {
  const product = getProductById(productId);
  if (!product) {
    return false;
  }
  return product.stock >= quantity;
}
//reduce stock after purchasing
function reduceStock(productId, quantity) {
  return products.map(function (product) {
    if (product.id === productId) {
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        stock: product.stock - quantity,
        category: product.category
      };
    }
    return product;
  });
}
export {
  getProductById,
  getAllProducts,
  getProductsByCategory,
  searchProducts,
  checkStock,
  reduceStock
};