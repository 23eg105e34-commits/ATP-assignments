const courses = ["javascript", "react", "node", "mongodb", "express"];
// 1. courses with name length > 5
const longCourses = courses.filter(course => course.length > 5);
console.log("Filtered (length > 5):", longCourses);
// 2. convert course names to UPPERCASE
const upperCourses = courses.map(course => course.toUpperCase());
console.log("Uppercase:", upperCourses);
// 3. generate a single string
const courseString = upperCourses.reduce(
    (result, course) => result + " | " + course
);
console.log("Reduced String:", courseString);
// 4.find the course "react"
const foundCourse = courses.find(course => course === "react");
console.log("Found Course:", foundCourse);
// 5. index of "node"
const nodeIndex = courses.findIndex(course => course === "node");
console.log("Index of 'node':", nodeIndex);
