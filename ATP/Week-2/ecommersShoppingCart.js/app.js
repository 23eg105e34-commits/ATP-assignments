import { 
  getAllProducts, 
  searchProducts, 
  getProductsByCategory 
} from './product.js';
import { 
  addToCart, 
  getCartItems, 
  getCartTotal, 
  updateQuantity,
  removeFromCart 
} from './cart.js';
import { processPayment } from './payment.js';
console.log('=== E-Commerce Store ===\n');
//Browse all products
console.log('All Products:');
console.log(getAllProducts());
console.log('\nElectronics Products:');
console.log(getProductsByCategory('electronics'));
//Search products by keyword
console.log('\nSearching for "phone":');
console.log(searchProducts('phone'));
//Add items to cart
console.log('\n=== Adding to Cart ===');
console.log(addToCart(1, 2));  // Add 2 Laptops
console.log(addToCart(3, 3));  // Add 3 Headphones
console.log(addToCart(1, 1));  // Add 1 more Laptop (updates quantity)
//View cart items and total price
console.log('\n=== Current Cart ===');
console.log(getCartItems());
console.log('Cart Total:', getCartTotal());
//Update product quantity in cart
console.log('\n=== Updating Quantities ===');
console.log(updateQuantity(1, 2));  // Change laptop quantity to 2
//Remove an item from cart
console.log('\n=== Removing Item ===');
console.log(removeFromCart(3));  // Remove headphones
//View updated cart
console.log('\n=== Updated Cart ===');
console.log(getCartItems());
console.log('Cart Total:', getCartTotal());
//Checkout and payment with coupon
console.log('\n=== Checkout ===');
const order = processPayment('upi', 'WELCOME10'); // payment method + coupon code
console.log(order);
