//function
let i=0
let n=5
function fun() {
    for (i=0; i<=n; i++)
    console.log('welcome')
}
fun()


//function using parameters
function greet(name) {
    console.log(`Hello, ${name}!`); //using $ symbol it is 
  }
  greet("lingesh "); 
  

//arrow function
const add = (a,b) => a + b ;
const result = add(2,3)
console.log(result)



// Function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

let sum = addNumbers(5,7)

console.log("The sum is: " + sum); // Output: The sum is: 12

