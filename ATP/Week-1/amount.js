let totalAmount = 0;
// 1. Add ₹500
totalAmount += 500;
console.log(totalAmount); // 500
// 2. Add ₹1200
totalAmount += 1200;
console.log(totalAmount); // 1700
// 3. Apply ₹200 discount
totalAmount -= 200;
console.log(totalAmount); // 1500
// 4. Add 18% GST
let gst = totalAmount * 0.18;
console.log(gst); // 270
totalAmount += gst; 
// 5. Print final bill amount
console.log("Final Bill Amount: ₹" + totalAmount.toFixed(2));
