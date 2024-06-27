let nums=[]
nums[0]=1
nums[99]=9
console.log(nums.length)

// for of loop directly fetches the values but for in fetches the key and with the help of key we need to fetch value
// So for of loop will be better for array
for(let n of nums){
    console.log(n)
}

for(let i in nums){
    console.log(nums[i])
}