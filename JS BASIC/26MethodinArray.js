let data=[2,3,4,5,6]

// Here the output of this will be 6.Here 6 is length of an array after pushing the element
data.push(7)
console.log(data)

// Pop will print the element that is poped.Pop will remove element from the end
data.pop()
console.log(data)

// Shift removes the element that is in the front of an array and print that element
data.shift()
console.log(data)

// Unshit add the element in the front of an array.here unshift will print the length af arr after unshift function
data.unshift(9)
console.log(data)

// console.log(data)

//splice method for array
let dat=[1,2,3,4,5]
dat.splice(2)
console.log(dat)
// here if we give only 1 argument for splice thent it removes the elements form that index to end

// If we give second argument Then second argument acts as how many index we need to take it out from array
let da=[6,7,8,9,10]
da.splice(1,3)
// here it takes from index 1 to 3
console.log(da)