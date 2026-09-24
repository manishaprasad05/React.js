// Calculate total marks
export function calculateTotal(marks) {
    return marks.reduce((total, mark) => total + mark, 0);
}

// Calculate percentage
export function calculatePercentage(marks) {
    const total = calculateTotal(marks);
    const maximumMarks = marks.length * 100;

    return (total / maximumMarks) * 100;
}