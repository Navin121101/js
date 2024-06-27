const title=document.getElementById('main-heading')
title.style.color='yellow'
console.log(title)


const list=document.querySelectorAll('.list-items')
console.log(list)
for (let i=0;i<list.length;i++){
    list[i].style.color='red';
}