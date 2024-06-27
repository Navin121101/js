let laptop1=
{
    cpu:"I7",
    ram:8,
    brand:"HP",

    getconfig:function()
    {
        console.log(laptop1.cpu)
    }
}
laptop1.getconfig()


// (This)-keyword represent the current object.instead of laptop2 we are writing this
let laptop2=
{
    cpu:"I9",
    ram:8,
    brand:"HP",

    compare:function(other){
        if(this.cpu > other.cpu){
            console.log(this)
        }
        else{
            console.log(other)
        }
    },

    getconfig:function()
    {
        console.log(this.cpu)
    }
}
laptop2.getconfig()

// Here we cannot compare laptop1 with laptop2 since we have not created comapre function in laptop1
laptop2.compare(laptop1)


// function getfastlaptop(laptop1,laptop2){
//     if(laptop1.cpu>laptop2.cpu){
//         console.log(laptop1)
//     }
//     else{
//         console.log(laptop2)
//     }
// }
// getfastlaptop(laptop1,laptop2)
