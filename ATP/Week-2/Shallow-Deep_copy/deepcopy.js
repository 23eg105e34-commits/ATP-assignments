const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};
//  Deep copy using structuredClone
const orderCopy = structuredClone(order);
// Modify copied object
orderCopy.customer.address.city = "Bengaluru";
orderCopy.items[0].price = 65000;
console.log("Original Order:", order);
console.log("Copied Order:", orderCopy);
