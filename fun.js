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
    console.log(`Hello, ${name}`); //using $ symbol it is 
  }
  greet("lingesh "); 
  

//arrow function
const add = (a,b) => a + b ;
const result = add(2,3)
console.log(result)


//example 
let b = 2
function square(num) {
  let ans = num * num
  return ans
}
let b1=square(b)
console.log(b1)
let b2=square(4)
console.log(b2)


