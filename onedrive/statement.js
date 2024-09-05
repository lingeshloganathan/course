//if statement
const n=5 
if(n==5) {
    console.log('true')
}


//if..else statement
if(n==8) {
    console.log('is equal')
} else {
    console.log('is not equal')
}


//if..elif..else statement
const a=10, b=20, c=30
if( a>b && a>c) {
    console.log(a + ' is big')
}
else if( b>a && b>c) {
    console.log(b + ' is big')
}
else {
    console.log(c + ' is big')
}


//switch statement
const d=1
switch(d) {
    case 1:
        console.log("one")
        break       // without break the next will print
    case 2:
        console.log("two")
        break
    case 3:
        console.log("three")
        break
    default:
        console,log("enter only three no's")
}