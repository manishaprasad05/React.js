import 
{
    calculateTotal,
    calculatePercentage
} from "./student.js";

const marks = [80, 75, 90, 85, 70];

const total = calculateTotal(marks);

const percentage = calculatePercentage
(
    total,
    marks.length
);

console.log(`Total Marks: ${total}`);
console.log(`Percentage: ${percentage}%`);