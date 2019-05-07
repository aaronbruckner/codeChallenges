/*
Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
evenDigitsOnly(n) = true;
For n = 642386, the output should be
evenDigitsOnly(n) = false.
Input/Output

[execution time limit] 5 seconds (ts)

[input] integer n

Guaranteed constraints:
1 ≤ n ≤ 109.

[output] boolean

true if all digits of n are even, false otherwise.
*/
function evenDigitsOnly(n: number): boolean {
    const numberString: string = n.toString();
    
    for (let i = 0; i < numberString.length; i++) {
        const digit: number = parseInt(numberString.charAt(i));
        
        if (digit % 2 !== 0) {
            // Odd digit found
            return false;
        }
    }
    return true;
}

