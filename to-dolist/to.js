const button=document.getElementById('addTaskButton');
const deleta=document.getElementById('delete');
 const data=document.getElementById('taskInput');
  const list=document.getElementById('taskList');



  button.addEventListener("click",function(){
    if(data.value.trim()===''){
alert('empty task')
    }
    else{
   const  listdata=document.createElement('li');
    listdata.innerHTML=data.value.trim();
    list.append(listdata);
    data.value='';
}});


deleta.addEventListener("click",function(){
 list.innerHTML='';
});

