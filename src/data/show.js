let div = document.getElementById('semangat');
let display = 0;
// eslint-disable-next-line no-unused-vars
function show(){
    if(display==1){
        div.style.display='block';
        display=0;
    }else{
        div.style.display='none';
        display=1; 
    }
}