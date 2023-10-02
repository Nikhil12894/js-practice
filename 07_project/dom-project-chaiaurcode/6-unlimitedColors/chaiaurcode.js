const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };

const body = document.querySelector('body');

const sayDate = function(){
    body.style.backgroundColor = randomColor();
}

const start = document.getElementById('start');


start.addEventListener('click',(e)=>{
    if(!intervalId){
        intervalId = setInterval(sayDate,1000);
    }
});

const stop = document.getElementById('stop');

stop.addEventListener('click',(e)=>{
    if(intervalId){
        clearInterval(intervalId);
        intervalId=null;
    }
});