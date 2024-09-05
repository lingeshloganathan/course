//for loop
let i
for (i = 0; i < 5; i++) {
    console.log(i);
  }

  
//while loop
let count = 2
while (count < 3) {
  console.log(count);
  count++;
}



// do while loop
let count1 = 1;

do {
  console.log(count1);
  count1++;
} while (count1 < 0);


//for of loop
const students = ["hello", "world", "code", 1, true];

for (const student of students) {
  console.log(student);
}


//for in loop
const fun={name:"lingesh", age:23}     //fun is obj
for (const fun1 of fun) {       //fun1 is key
  console.log(fun1 +":" /* + fun[fun1] */)  //output: values and key in for of loop
}

const arr=[10,20,30,'lingi']   //arr is obj
for ( const arr1 in arr) {   //arr1 is key
  console.log(arr1)   //output: index values in for in loop 0,1,2,3
}