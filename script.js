let input= document.getElementById('input_box');
let buttons= document.querySelectorAll('button');
// console.log(button);
let string= "";

Array.from(buttons).forEach((Calc) =>{
Calc.addEventListener("click" , (e) =>{
    if(e.target.innerText == "="){
        string = eval(string)
        input.value = string;
    }
    else if(e.target.innerText == "AC"){
        string = "";
        input.value = string;
    }
    else{
        string= string + e.target.innerText;
        input.value = string;
    }
})

})
 
 