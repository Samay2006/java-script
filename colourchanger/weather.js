
let a=document.querySelectorAll(".button")
let b=document.querySelector("body")
// b.style.backgroundColor='red';
// a.style.backgroundColor="red" 

a.forEach(element => {
    element.addEventListener("click",function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==="read"){
b.style.backgroundColor='red';
        }
       else if(e.target.id==="blue"){
            b.style.backgroundColor='blue';
        }
        else if(e.target.id==="green"){  
            b.style.backgroundColor='green';
        }
            else if(e.target.id==="yellow"){
                b.style.backgroundColor='yellow';
            }
    })

});


