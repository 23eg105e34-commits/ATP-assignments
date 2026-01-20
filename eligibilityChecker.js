let hasPaid = true;
let hasCompletedBasics = false;

//Variable to store the result message
let enrollMessage;
// If both conditions (payment done AND basics completed) are true
if (hasPaid && hasCompletedBasics) {
//Show "Enroll Now"
    enrollMessage = "Enroll Now";
} 
else {
//Otherwise show "Complete Requirements"
    enrollMessage = "Complete Requirements";
}
//Print the final message
console.log(enrollMessage);
