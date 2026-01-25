import { getProductById, checkStock } from './product.js';
let cartItems = [];
export function addToCart(productId, quantity) {
  const product = getProductById(productId);
  // If product does not exist
  if (!product) {
    return "Product not found";
  }
  // Check stock availability
  if (!checkStock(productId, quantity)) {
    return "Insufficient stock";
  }
  // Check if product already in cart
  const existingItem = cartItems.find(function (item) {
    return item.productId === productId;
  });

  if (existingItem) {
 // Update quantity if already in cart
    existingItem.quantity += quantity;
    return "Product quantity updated in cart";
  } else {
// Add new item to cart
    cartItems.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity
    });
    return "Product added to cart";
  }
}
//remove a product from cart
export function removeFromCart(productId) {
  cartItems = cartItems.filter(function (item) {
    return item.productId !== productId;
  });
  return "Product removed from cart";
}
//update quantity of products
export function updateQuantity(productId, newQuantity) {
  const product = getProductById(productId);
  if (!product) {
    return "Product not found";
  }
  if (!checkStock(productId, newQuantity)) {
    return "Insufficient stock";
  }
  const item = cartItems.find(function (item) {
    return item.productId === productId;
  });
  if (!item) {
    return "Product not in cart";
  }
  item.quantity = newQuantity;
  return "Cart quantity updated";
}
//return all items
export function getCartItems() {
  return cartItems;
}
//calculate total price of all items
export function getCartTotal() {
  return cartItems.reduce(function (total, item) {
    return total + item.price * item.quantity;
  }, 0);
}
//empty cart
export function clearCart() {
  cartItems = [];
  return "Cart cleared";
}
export {
  addToCart,
  removeFromCart,
  updateQuantity,
  getCartItems,
  getCartTotal,
  clearCart
};