// # primitive
// 7 types: String , Number, Boolean, null, undefined, Symbol, BigInt

const bigNumber = 2345434543345443334454n;

// # Reference (Non primitive)
//Array, Objects, Functions

const heros = ["s","A","Y"];
let obj= {name: "xyz",age: 32};

const myFun = function(){
    console.log("hello world");
}


// console.log(typeof myFun)


// https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++Memory Allocation in Js+++++++++++++++++++++++

// stack (Primitive) i.e call by value, Heap (Non_primitive) i.e call by reference


let str1 = "abcd";

let str2 = str1;

str2= "xyz";

// console.log(str1);
// console.log(str2);


let obj1={name:"nk", email:"nk@test.com"};
let obj2= obj1;
obj2.name="test";

console.log(obj1.name);
console.log(obj2.name);

