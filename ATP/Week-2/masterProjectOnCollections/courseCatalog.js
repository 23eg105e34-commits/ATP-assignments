
const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];
//Get published courses
const publishedCourses = courses.filter(c => c.published);
//Sort courses by price (high → low)
const sortedCourses = [...courses].sort((a, b) => b.price - a.price);
//Extract { title, price }
const courseTitles = courses.map(({ title, price }) => ({ title, price }));
//Total value of published courses
const totalPublishedValue = courses
  .filter(c => c.published)
  .reduce((sum, c) => sum + c.price, 0);
//Add new course immutably
const newCourse = { id: 104, title: "Python", price: 1599, published: true };
const updatedCourses = [...courses, newCourse];
