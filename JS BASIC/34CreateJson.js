const product={
    name:'Shirt',
    // here we are using single quotes('') for delivery-time because inbetween delivery and time hiphen(-) is used and in javascript hiphen is considered as subrat symbool and so if we not use ('') it throws error
    'Delivery-time':'1 day',
    // this is also the way
    // ['Delivery-time']:'1 day'
    rating:{
        stars:4.5,
        count:87
    },
    fun:function functi(){
        console.log("Function inside object")
    }
}
console.log(JSON.stringify(product))
let jsonstr=JSON.stringify(product)
// If we create js into json file it does not have the function which is in the product object.Because json file does not support function.to create json file we use JSON.stringfy()

// To convert json to js object we need to use JSON>parse()
console.log(JSON.parse(jsonstr))