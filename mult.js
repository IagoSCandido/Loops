//Exercise 4: Write a program to print multiplication table of a given number till 10
const mult = (n) => {
    let num = n
    for (i=1; i<=10; i++) {
        num = n*i
        console.log(num)
    }
    return num
}
mult(2)