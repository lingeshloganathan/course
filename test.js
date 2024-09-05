const fun={name:"lingesh", age:23}     //fun is obj
for (const fun1 in ["q","e"]) {       //fun1 is key
  console.log(fun1 +":" /* + fun[fun1] */)  //output: values and key in for of loop
}