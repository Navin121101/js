let count=10;
// In while loop if i initialize count=10 the loop will not run
// While loop first check for condition and then it executes
while (count<=5)
{
    console.log("Hi",count);
    count++;
}
// Do while will execute it and checks for condition
// do
// {
//     console.log("Hi",count);
//     count++;
// }while(count<=5)

let num=12345
let num2=0
while(num>0)
{
    let last=num%10;
    // parseInt works like (//) in python 
    num2=num2*10+last
    num=parseInt(num/10)

}
console.log(num2)