let isLoggedIn = true;
let isProfileComplete = false;
let message;
// if the user is NOT logged in
if (!isLoggedIn) {
    message = "Please login";
}
// If user IS logged in but profile is NOT complete
else if (isLoggedIn && !isProfileComplete) {
    message = "Complete your profile";
}
// If user IS logged in and profile IS complete
else if (isLoggedIn && isProfileComplete) {
    message = "Welcome back!";
}
// Print the message
console.log(message);
