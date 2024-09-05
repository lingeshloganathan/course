//simple console.log
console.log('Hello this is a main.js')

//variable
let name="lkjhgf"
const age=24
age=90
console.log(name)
console.log(age)

/*const person={
    fname:"lingi",
    lname:"lingesh",
    age:null,
    place:undefined
}

console.log(person)
*/


/*const oddnumbers =[1,3,5,7,9]
console.log(oddnumbers[3])

let a=20
a='lingi'
a=true
console.log(a)
*/

/*
const age1=false
console.log(!age1)
*/

/*
const isnum=10%2 ==0 ?'even':'odd'
console.log(isnum)

console.log(true+'3')
console.log('4'-'3')
console.log(true*'3')
console.log('12'/'3')
console.log('ling'-'esh')
console.log('2' - null)
*/


/*
// numeric string used with + gives string type
let result;

// convert number to string
result = "3" + 2; 
console.log(result, "-", typeof(result));

result = "3" + true; 
console.log(result, "-", typeof(result));

result = 2 + 2; 
console.log(result, "-", typeof(result));


console.log(Number(true))
console.log(parseFloat('3.14'))
console.log((300).toString())
console.log(Boolean(0))
*/

/*
const var1=null
const var2=undefined
console.log(var1 == var2)
console.log(var1 === var2)
*/

/*
const n=0
if(n > 0) {
    console.log(n + " is positive")
} else if(n==0) {
    console.log(n + " is sero")
} else {
    console.log(n + " is negative")
}

let a=6
let b=3
const num=4
switch(num) {
    case 1:
        console.log(a+b)
        break
    case 2:
        console.log(a-b)
        break
    default:
        console.log('only add and sub')
}

let i,j
for(i=1;i<=5;i++) {
    console.log(i)
}
*/

/*
let i=1
while(i<=5) {
    console.log(i)
    i++
}
*/

/*
let i=6
do {
    console.log(i)
    i++
} while (i<=5)

const num1=[1,2,3,4,5]
for(const num of num1) {
    console.log(num)
}
*/

//functions
/*
function one(uname) {
    console.log('good mrng '+ uname)
}
function one1(uname) {
    console.log('good evng '+ uname)
}
one('lingi')
one1('mark')
*/

/*function add1(a,b) {
    return a+b
}
const sum = add1(25,25)
console.log(sum)
*/



//block scope
function name1() {
    const myname='lingesh'
    console.log(myname)
}
name1()



//function scope
function name2() {
    const myname ='salah'
    console.log(myname)
}
name2()



//global scope
const num1=1000
function name3() {
    const myname='diaz'
    console.log(myname)
}
name3()
console.log(num1)

let a='hi'
let b='hi'
console.log(a==b)
/* if( a == b) {
    console.log('true')
} else {
    console.log('false')
} */


function calculateSum(a, b) {
    let result = a + b;
    console.log('Result:', result); // Set a breakpoint here
    return result;
}

calculateSum(5, 10);

let a1=90
a1=78
console.log(a1)

const b1=23



//