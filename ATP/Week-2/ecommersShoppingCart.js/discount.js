const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};
// Validate whether a coupon can be applied
function validateCoupon(couponCode, cartTotal, cartItems) {
  //Check if coupon exists
  const coupon = coupons[couponCode];
  if (!coupon) return { valid: false, message: "Invalid coupon code" };
  // Check minimum cart value condition
  if (cartTotal < coupon.minAmount) {
    return { valid: false, message: "Cart total does not meet minimum amount" };
  }
  //Check category condition (if coupon is category-specific)
  if (coupon.category) {
    const hasCategory = cartItems.some(item => item.category === coupon.category);
    if (!hasCategory) {
      return { valid: false, message: `Coupon valid only for ${coupon.category}` };
    }
  }
  // If all conditions pass, coupon is valid
  return { valid: true, message: "Coupon applied successfully" };
}
// Calculate discount amount based on coupon type
function calculateDiscount(couponCode, cartTotal) {
  const coupon = coupons[couponCode];
  if (!coupon) return 0;
  // Percentage-based discount (e.g., 10% off)
  if (coupon.type === 'percentage') {
    return (cartTotal * coupon.value) / 100;
  }
  return coupon.value;
}

//Apply coupon and return final billing details
function applyDiscount(cartTotal, couponCode, cartItems) {
  const validation = validateCoupon(couponCode, cartTotal, cartItems);
  if (!validation.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message
    };
  }
  const discount = calculateDiscount(couponCode, cartTotal);
  const finalTotal = cartTotal - discount;
  return {
    originalTotal: cartTotal,
    discount,
    finalTotal,
    message: "Discount applied successfully"
  };
}
export {
  validateCoupon,
  calculateDiscount,
  applyDiscount
};
