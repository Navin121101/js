let nums=new Set("adasdascdvgsasa")
nums.add(3)
nums.add("navin")

// console.log(nums)

// Printing element using for
// for of loop

// for(let n of nums){
//     console.log(n)
// }

// for each
nums.forEach((n) =>{
    console.log(n)
})

// checking whether the value is present or not

console.log(nums.has(3))
