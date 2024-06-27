let add=function(num1,num2)
{
    if(num1>0 && num2>0){
        return num1+num2;
    }
    else{
        return 0
    }
    
}

let sum=add
let result=sum(2,4)
console.log(result)

// In arrow function if we have onle one statement no need to mention curly bracket and we dont even have to mention return statement and we can write everything in one line
// while we use arrow function(=>) the we no need to write functin(num1,num2) we can just write it as (num1,num2)=>
let ad=(num1,num2) => num1+num2
let res=ad(2,8)
console.log(res)



// Arrow function with 2 statement
let greet=function(user)
{
    console.log("Hello"+user);
    return 1
}
greet("Navin")

// Arrow function
let gret=(use) => {
    console.log("hello"+use)
    return 1
}
gret("Hulk")

