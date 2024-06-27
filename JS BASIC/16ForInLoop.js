let alien={
    name:"Navin",
    tech:"JS",
    laptop:{
        cpu:"I7",
        ram:8,
        brand:"Asus"
    }
}
for(let key in alien)
{
    console.log(key,alien[key]);
}
for(let key in alien.laptop)
{
    console.log(key,alien.laptop[key]);
}