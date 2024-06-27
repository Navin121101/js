let map=new Map()

map.set("Navin","Python")
map.set("Thor","JS")

console.log(map.keys())
console.log(map.has("Navin"))
console.log(map.get("Thor"))

for(let [k,v] of map){
    console.log(k,v)
}