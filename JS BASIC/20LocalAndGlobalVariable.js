function add(num1,num2,num3=1)
{
    return num1+num2+num3;
}
// if i didn't pass value for num3 then it takes num3 value as 1
// if we pass value for num3 then it takes the value that we passed
let result=add(2,1)
console.log(result)

result=add(2,1,6)
console.log(result)