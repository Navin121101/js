let nums=[12,13,14,15,16,18,19,10]

// Here the filter function will checks if the condition inside the function satisfy or not.If satisfied it allows the value.if not satisfied it does not allow the value
// Here we are checking the n is even or not

// console.log(nums.filter((n) => n%2===0))

// here we are filtering the even num from the nums and passing the even num to for-each function
nums.filter((n) => n%2===0)
    // .map((n)=> n*2)
    .forEach((n) => {
        console.log(n)
    })

console.log()




let sums=[2,3,4,5,6,7]
// Here reduce will return as one value which is addition of even num in array.Since it return the value we are declaring the value to res
let res=sums.filter((n) => n%2===0)
    .map((n) => n*2)
    .reduce((a,b) => a+b)

console.log(res)