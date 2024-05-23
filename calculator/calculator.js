let out=document.getElementById("output");

function display(num) {
    
    output.value = output.value+ num;
    // output.value +=num;

    // x = 10 

    // x += 10

    // x =x+20
}
function calculate() {
    try{
    output.value = eval(output.value);
        
    }
    catch(error){
         alert("Invalid")
    }
}
function clear(){
    output.value = "";
    
}
function del() {
    output.value = output.value.slice(0,-2);
}






