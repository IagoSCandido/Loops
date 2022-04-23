/*
TO DO
Exercise 5: Display numbers from a list using loop
Write a program to display only those numbers from a list that satisfy the following conditions

The number must be divisible by five
If the number is greater than 150, then skip it and move to the next number
If the number is greater than 500, then stop the loop 
numbers = [12, 75, 150, 180, 145, 525, 50]
*/

const arr = [12, 75, 150, 180, 145, 525, 50];
const arrFunction = (n) => {
    let arEle = n % 5 == 0
    for (i = 0; i < n.length; i++) {
        if (arEle) {
            console.log(arEle)
        }
    }
}
arrFunction(arr)