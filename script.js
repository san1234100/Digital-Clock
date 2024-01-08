let ampm=document.getElementById('ampm')
function DisplayTime(){
    let Datetime=new Date();
    let hr=Datetime.getHours();
    let mins=Datetime.getMinutes();
    let sec=Datetime.getSeconds();
    if(hr>12){
        hr=hr-12;
        ampm.innerHTML='PM'
    }
    document.getElementById('hours').innerHTML=padzero(hr);
    document.getElementById('mins').innerHTML=padzero(mins);
    document.getElementById('seconds').innerHTML=padzero(sec);
}
function padzero(num){
    
    return num<10?'0'+num:num
    
}
setInterval(DisplayTime,500)