function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Or throw an error: throw new Error('Invalid input');
  }
  return numA + numB;
}

let result1 = add(1, 2); // Correct usage
let result2 = addSafe(1, "2"); // Safe usage, handles string input
let result3 = addSafe("1", 2); // Safe usage
let result4 = addSafe("abc",2); // Handles non-numeric string inputs gracefully
console.log(result1, result2,result3,result4); // Output: 3 3 3 0