// Exercise 2: Print the following pattern
const leftTriangle = (n) => {

    let string = ''; 
    for (i=1; i <=n; i++) { 
        for (j=1; j<=i; j++) {
            string += j + " ";
        }
        string += '\n';        
    }
    console.log(string)
}

 leftTriangle(7)