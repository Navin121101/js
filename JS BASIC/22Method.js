// Here we are using function inside the object
// Both method and function are same
let laptop={
    cpu:"I9",
    ram:"8",
    brand:"Asus",
    greet:function(user){
        console.log("Hello " + user)
    }
}
laptop.greet("Navin")