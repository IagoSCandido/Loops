/* Write a program to count the total number of digits in a number using a while loop.
For example, the number is 75869, so the output should be 5. 
*/
const test = 75869111

const countTotal = (n) => {
    let number = n.toString().length
    for (let i=0; i<number.length; i++) {
        n++
    }
    console.log(number)
}
countTotal(test)