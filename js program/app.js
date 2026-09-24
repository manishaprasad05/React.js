import { calculateTotal, calculatePercentage } from "./student.js";

const marks = [85, 70, 90, 80, 75];

const total = calculateTotal(marks);
const percentage = calculatePercentage(marks);

console.log(`Total Marks: ${total}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);