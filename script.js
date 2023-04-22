let hour=document.getElementById("hours");
let minute=document.getElementById("minutes");
let second=document.getElementById("seconds");
let ampm=document.getElementById("am-pm");


function clock(){

    let h=new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let ap="AM";
    if(h<10){
        h='0'+h;
    }
    if(m<10){
        m='0'+m;
    }
    if(s<10){
        s='0'+s;
    }
    hour.innerText=h;
    minute.innerText=m;
    second.innerText=s;
    if(h>12){
        ap='PM';

    }
    ampm.innerText=ap;

     setTimeout(() => {
        clock();
    },1000);
}
clock()