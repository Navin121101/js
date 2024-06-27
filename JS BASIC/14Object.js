let input='name'
let alien={
    name:"Navin",
    tech:"js",
}
console.log(alien)
console.log(alien.name)
console.log(alien['tech'])
// since we created a variable input we cannot use dot function we have to use square bracket because if we use alien.input it will check wether input is present in alien or not.since input is not inside alien it shows undefined as output
console.log(alien[input])