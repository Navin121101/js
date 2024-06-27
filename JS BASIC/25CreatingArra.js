// This are the statement that creates an empty array
let values=new Array();
let val=[1,2,3,"4"];
let valu=["Navin","Hulk","Thor"]
let value=[1,"Navin",{tech:"JS"},function(){console.log("Array")}]

console.log(values)
console.log(val[0])
console.log(valu)
valu[3]="Spiderman"
valu.push("Ironman")
console.log(valu)
// console.log(value[3]())
value[3]()
