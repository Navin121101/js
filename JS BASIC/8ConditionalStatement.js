// In js it is our wish to write the semicolon at the end of line
let num1=6;
let num2=14;
let num3=7;

if (num1>num2 && num1>num3)
    console.log("num1 is greater");
// In this condition if and else block should contain only one statement otherwise it will print the second statemnt for everthing.To over come this we use curly bracket {}
// curly bracket is optional if we use only one statement inside the if else bock.if two statement insde if else block then use curly bracket
else if(num2>num1 && num2>num3){
    console.log("num2 is greator");
    console.log("yeea");
}
else{
    console.log("num3 is greater");
}
    
console.log("Bye");