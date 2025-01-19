let increment=document.getElementById('incrementButton');
let decrement=document.getElementById('decrementButton');
let output=document.getElementById('counter');
let reset=document.getElementById('resetButton');
let a=0;
increment.addEventListener('click',()=>{
    
     a=a+1;
output.innerHTML=a;
})

decrement.addEventListener('click',()=>{
    a=a-1;
    output.innerHTML=a;
    if(a<=0){
        a=0;
        output.innerHTML=a;
    }
})
reset.addEventListener('click',()=>{
    a=0;
    output.innerHTML=a;
})