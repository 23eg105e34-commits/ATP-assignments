const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];
//Get only active users
const activeUsers = users.filter(u => u.active);
//Extract names of active users
const activeUserNames = users.filter(u => u.active).map(u => u.name);
//Check if any admin exists
const adminExists = users.some(u => u.role === "admin");
//Find user by id
const findUserById = (id) => users.find(u => u.id === id);
//Deactivate a user immutably
const deactivateUser = (id) =>
  users.map(u => u.id === id ? { ...u, active: false } : u);
