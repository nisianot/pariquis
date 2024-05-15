function checkBoolean(strAndNum2: (string | number)[]): boolean {
  // Assuming strAndNum2[0] can be a string or number, we'll check if it's a boolean
  return typeof strAndNum2[0] === 'boolean';
}

// Usage
const result: boolean = checkBoolean([true, 'string', 42]);
console.log(result); // Output: true
