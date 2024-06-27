const todolist=[{
    name:'make dinner',
    duedate:'2022-12-22'
},{
    name:'wash dishes',
    duedate:'2022-2-23'
}];
rendertodolist();
function rendertodolist(){
    let todolisthtml='';

    for(let i=0;i<todolist.length;i++){
        const todoobj=todolist[i];
        // const name=todoobj.name;
        // const duedate=todoobj.duedate;
        // This we can also write using destructring
        const{name,duedate}=todoobj
        const html=`
            <div>${name}</div>
            <div>${duedate}</div>
            <button onclick="
                todolist.splice(${i},1);
                rendertodolist();
                " id="button">Delete
            </button>`;
        todolisthtml+=html
    }
    // console.log(todolisthtml)

    document.querySelector('.js-todo-list').innerHTML=todolisthtml
}


function addtodo(){
    const inputname=document.querySelector('.js-name-input');
    const name=inputname.value;

    const dateinputelement=document.querySelector('.js-due-date-input');
    const duedate=dateinputelement.value;


    todolist.push({
        name:name,
        duedate:duedate
    });
    inputname.value='';

    rendertodolist();
}