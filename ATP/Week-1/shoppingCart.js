const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//products which are in stock
const inStockItems = cart.filter(item => item.inStock);
console.log(inStockItems);
//create a new array {name, totalPrice}
const result = inStockItems.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
console.log(result);
//grand total cart value
const result2 = inStockItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
console.log(result2);
// find Mouse details
const result3 = cart.find(item => item.name === "Mouse");
console.log(result3);
//find index of Keyboard
const result4 = cart.findIndex(item => item.name === "Keyboard");
console.log(result4);
