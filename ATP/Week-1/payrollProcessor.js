const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
//employees from IT department
const itEmployees = employees.filter(emp => emp.department === "IT");
console.log("IT Department Employees:", itEmployees);
//add netSalary (salary + 10% bonus)
const employeesWithNetSalary = employees.map(emp => {
  let bonus = emp.salary * 0.10;
  return {
    ...emp,
    netSalary: emp.salary + bonus
  };
});
console.log("Employees with Net Salary:", employeesWithNetSalary);
//calculate total salary payout (original salary)
const totalSalaryPayout = employees.reduce(
  (total, emp) => total + emp.salary,
  0
);
console.log("Total Salary Payout:", totalSalaryPayout);
//employee with salary 30000
const employee30000 = employees.find(emp => emp.salary === 30000);
console.log("Employee with Salary 30000:", employee30000);
//index of employee "Neha"
const nehaIndex = employees.findIndex(emp => emp.name === "Neha");
console.log("Index of Neha:", nehaIndex);
