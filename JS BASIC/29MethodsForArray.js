let nums=[42,34,89,54,23,67]
// Array has the method called for each
// For each is the method which will give you one by one value
// This for-each will take one value and pass that value to a function that we created inside the for-each function

// n is the value that is passed by for-each function to arrow function that we created.for-each will take input as nums and pass the values of nums one by one
nums.forEach((n) => {
    console.log(n*2)
})

nums.forEach((n,i,nums) => {
    console.log(n,i,nums)
})
// In for each the first value should be passed is value,then index,then array.This is the order of passing
// In for each while we are using array for-each function will accect three parameters like value,index and array itself


// Loop through array using for each
// here it will take the first value and save it in a parameter res in function which is inside the foreach function and print the value.Then it goes on
let arr=['make dinner',
'wash dish',
'eat orange']
arr.forEach((res) =>{
    console.log(res)
})

// it shows both index and value
let arr1=['make dinner',
'wash dish',
'eat orange']
arr1.forEach((res,index) =>{
    console.log(res,index)
})


// here return will work as continue statement
let arr2=['make dinner',
'wash dish',
'eat orange']
arr2.forEach(function(res,index){
    if (res=='wash dish'){
        return
    }
    console.log(res)
    console.log(index)
})