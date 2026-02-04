const marks = [78, 92, 35, 88, 40, 67];
//  marks greater than or equal to 40 (pass marks)
const passedMarks = marks.filter(mark => mark >= 40);
console.log("Passed Marks:", passedMarks);
//  add 5 grace marks to each student
const graceMarks = marks.map(mark => mark + 5);
console.log("Marks after Grace:", graceMarks);
//find the highest mark
const highestMark = marks.reduce((max, mark) => {
    return mark > max ? mark : max;
});
console.log("Highest Mark:", highestMark);
//first mark below 40 (failed student)
const firstFailed = marks.find(mark => mark < 40);
console.log("First Failed Mark:", firstFailed);
// index of mark 92
const indexOf92 = marks.findIndex(mark => mark === 92);
console.log("Index of 92:", indexOf92);
