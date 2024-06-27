// Since we are using getElements we will be getting array so we have to use indexing to change their styles
var li_array=document.getElementsByTagName("li");
for (let i=0;i<li_array.length;i++){
    li_array[i].style.color='red';
}

s=document.getElementsByTagName("li")[2];
s.style.color='blue'


// to select the anchor tag present inside li
d=document.querySelector("li a").innerHTML;
console.log(d);

// Using text content
f=document.querySelector("div h2").innerHTML;
console.log(f)

a=document.querySelector("div h2").textContent;
console.log(a)

// Using js adding anchor tag
document.querySelector(".youtube").innerHTML="<a href='https://www.youtube.com/' target='_blank'>Youtube</a>"

// changing face book href using js
document.querySelector("li a").setAttribute("href","https://www.facebook.com/")

