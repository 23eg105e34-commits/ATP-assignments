const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];
//Merge cart with courses
const mergedCart = cart.map(item => {
  const course = courses.find(c => c.id === item.courseId);
  return { ...item, ...course };
});
//Calculate total cart amount
const totalCartAmount = mergedCart.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);
//Increase quantity immutably
let updatedCart = [];
for (let i = 0; i < cart.length; i++) {
  if (cart[i].courseId === 101) {
    updatedCart.push({
      courseId: cart[i].courseId,
      qty: cart[i].qty + 1
    });
  } else {
    updatedCart.push(cart[i]);
  }
}
console.log(updatedCart);
//Remove a course from cart
const removeFromCart = (courseId) =>
  cart.filter(item => item.courseId !== courseId);
//Check if all cart items are paid courses
const allPaidCourses = mergedCart.every(item => item.price > 0);
