let price = 1299;
let courseTag;
// If price is less than 500
if (price < 500) {
    courseTag = "Budget Course";
}
// If price is between 500 and 1000 (inclusive)
else if (price >= 500 && price <= 1000) {
    courseTag = "Standard Course";
}
// If price is greater than 1000
else {
    courseTag = "Premium Course";
}
// Print the course label
console.log(courseTag);
