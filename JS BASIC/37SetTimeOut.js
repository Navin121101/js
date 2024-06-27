
//Settimeout is inbuild function that takes two parameters that is function and time in milli sec 
//  Here after 3000 millisec(3 sec) the function will run and print timeout
// here it wont wait untill the 3 sec to run the code that is next to the function.With in that 3 sec the console block will run
// so here hello print first and the function will be printed
setTimeout(function(){
    console.log('timeout')
},3000)

console.log('hello')