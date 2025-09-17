const display = document.getElementById('result');
function addValue(val){
    display.value += val;
}
function AC(){
    display.value = '';
}
function calculate(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = 'Error';
    }
}
function DL(){

display.value = display.value.slice(0,-1)
}