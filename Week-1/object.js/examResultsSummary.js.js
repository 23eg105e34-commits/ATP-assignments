const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
//Calculate total marks
let total = 0;
for (let subject in marks) {
  if (typeof marks[subject] === "number") {
    total += marks[subject];
  }
}
console.log("Total Marks:", total);
//Calculate average marks
const average = total / Object.keys(marks).length;
console.log("Average Marks:", average);
//Find the highest scoring subject
let highestSubject = "";
let highestMarks = 0;
for (let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks = marks[subject];
    highestSubject = subject;
  }
}
console.log("Highest Scoring Subject:", highestSubject, "=", highestMarks);
//Add a new subject computer: 90
marks.computer = 90;
console.log("Updated Marks:", marks);
