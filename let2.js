//in this example hoisting not apply
//first example
 let a;
 console.log(a);
 a= 9;
 //second exaample
 var m;
 console.log(m);
 m = 0;

 //hoisting
   console.log(b);
   let b = 9;
 
 console.log(n);
  var n = 8;
sum();
 function sum()
 {
   console.log("hello");
 }
 add();
 let add = function()
 {
   console.log("addition");
 }
fun1()
var fun1 =()=>{
  console.log(" arrow function");
}
let arr = [1,2,3,4,5];
for(let i in arr)
{
  console.log(i);
}
for(let i of arr)
{
  console.log(i);
}
let newA = arr.forEach((a,b,c)=>{
  return a;
})
console.log(newA);
let newArr = arr.map((a,b,c)=>{
  return a*5;
})
console.log(newArr)
let filterdata = arr.filter((a,b,c)=>{
  return a>2;
})
console.log(filterdata)
