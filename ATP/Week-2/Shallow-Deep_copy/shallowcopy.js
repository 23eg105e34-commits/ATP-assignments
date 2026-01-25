const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
  }
};
// Create a shallow copy
const copyOfUser = { ...user };
// Change name in copied object
copyOfUser.name = "Raj";
// Change preferences.theme in copied object
copyOfUser.preferences.theme = "bright";
//  Log both objects
console.log("user:", user);
console.log("copyOfUser:", copyOfUser);
