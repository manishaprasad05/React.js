// Calculate total marks
export function calculateTotal(marks) 
{
    return marks.reduce((total, mark) => total + mark, 0);
}

// Calculate percentage
export function calculatePercentage(total, subjects) 
{
    return total / subjects;
}