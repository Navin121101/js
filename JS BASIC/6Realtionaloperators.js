console.log(5>6)
console.log(7 >6)

let x="pen"
let y="pencil"
let res=x>y
// Here it compares the string letter by letter using ascii value and if ascii value 
console.log(res)
x=3
y="3"
// in js type coercion happens we use ==== for equalent operator this is used because if string of num is compared with int num it will not converst the string num to int
// if use == it only checks data but if we use === it checks data and type 
let res1=x===y
console.log(res1)
