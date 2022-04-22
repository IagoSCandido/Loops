// Exercise 3: Calculate the sum of all numbers from 1 to a given number
const sumNumbers = (n) => {
    let sum = n
    for (i=0; i<n; i++ ) {
        console.log(i)
        sum += i
        
    }
    console.log(sum)
}

sumNumbers(10);