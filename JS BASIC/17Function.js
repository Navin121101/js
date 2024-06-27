function greet()
{
    console.log("Hello");
}
greet();

// When we create a function like this then advantages are easier to read and hoisting
// hoisting means we can call the function even before creating like given below
greeting();
function greeting(){
    console.log("Hello")
};


function greeting(){
    console.log("Hello")
};
greeting();

// In js function are values so we can store function inside a variable
// here while creating function inside variable hoisting does not work
// Here we are storing function in an variable
const function1=function greeti(){
    console.log('Hello2')
};

// If we a creating a function inside a varible it is not necessary to give an name for an function
const func=function(){
    console.log('hello3');
}

console.log(function1);
console.log(typeof function1);

// Since function is created inside a variable we can call function by calling variable name
function1();
func();