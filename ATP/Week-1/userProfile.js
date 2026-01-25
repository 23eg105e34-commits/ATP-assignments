const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
// Read and print user's name and email
console.log("Name:", user.name);
console.log("Email:", user.email);
// Add a new property lastLogin
user.lastLogin = "2026-01-01";
//Update role from "student" to "admin"
user.role = "admin";
//Delete the isActive property
delete user.isActive;
// List all remaining fields using Object.keys()
console.log("Remaining fields:", Object.keys(user));
