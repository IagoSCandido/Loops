/*
 Exercise 8: Print list in reverse order using a loop
Given:
list1 = [10, 20, 30, 40, 50]
*/

arr = [10, 20, 30, 40, 50, 70, 90]

const reverse = (n) => {
    for (let i=n.length - 1; i >= 0; i--) {
        console.log(i)
        console.log(n[i])
    }
}

reverse(arr)