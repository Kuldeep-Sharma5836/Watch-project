function clock(){
    let monthnames=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let daysnames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let today=new Date();
    document.getElementById('date').innerHTML = (daysnames[today.getDay()] + " " + today.getDate() + " " + monthnames[today.getMonth()] + " " + today.getFullYear())
    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();
    let day = h<11?'AM':'PM ';
    h = h>12? h-12: h;
    document.getElementById('ty').innerHTML=day;
    document.getElementById('hour').innerHTML=h;
    document.getElementById('min').innerHTML=m;
    document.getElementById('sec').innerHTML=s;
}
let int=setInterval(clock,400);