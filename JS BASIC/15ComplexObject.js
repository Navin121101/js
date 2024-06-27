let alien={
    name:"Navin",
    tech:"JS",
    laptop1:{
        cpu:"I7",
        ram:8,
        brand1:"Asus"
    }
}
// delete is used to delete object or object properties
delete alien.laptop1.ram
console.log(alien)
console.log(alien.laptop1.brand1)
// To find length of brand name
// if i not use ?-property then it shows error if band not present inside the object.If i use ? then it shows undefined if brand not present in object
console.log(alien.laptop?.brand?.length)

// Delete laptop property 
delete alien.laptop1
delete alien.tech

console.log(alien)