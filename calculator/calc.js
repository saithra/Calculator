let cal=document.getElementById("output")

function display(num) {
    output.value += num;
}
function clr() {
    output.value = "";
}
function del() {
    output.value = output.value.slice(0,-2);
}
function calculate() {
   try{
    output.value = eval(output.value)
   }
   catch(error){
    alert("Invalid")
   }
}