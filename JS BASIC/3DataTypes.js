let data=8  
let user="Navin"

//             Data Type(Two Types)

// Primitive                   Object

//1 Number                      
//2 String
//3 Boolean
//4 null
//5 undefined
//6 Symbol

let num1=7.8
let num2=1.5e12
let num3=100_00_00_000
let num4=1234345657678656545434343
let num5=123244566678764543434231231n
// n means big int it shows the full integer value
// We can use _ to know how many zero we used
console.log(typeof num1)
console.log(typeof user)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)
// It shows error because we are addind big int and normal int
// console.log(num5+2)
console.log(num5+3n)

let msg="Navin"
console.log(msg)
let firstname="Navin"
let lastname="Kumar 'P'"
let fullname=firstname+" "+lastname
console.log(fullname)