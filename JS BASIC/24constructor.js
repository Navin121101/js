// constructor,for constructor we have to write function name start with caps
function Alien(name,tech){
    this.name=name;
    this.tech=tech;

    this.work=function(){
        console.log("Solving code")
    }
}
// We have to mention new to create a new oblject
let alien1=new Alien("Navin","Python")
let alien2=new Alien("Hulk","JS")

console.log(alien1)
// changing value in alien1
alien1.tech="AI"
console.log(alien1)
alien1.work()