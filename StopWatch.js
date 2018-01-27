var timer = 0;

var interval;
var running;


var min = document.getElementById('min');
var sec = document.getElementById('sec');
var ms = document.getElementById('ms');

document.getElementById('start').addEventListener('click', start);
document.getElementById('pause').addEventListener('click', pause);

document.getElementById('resume').addEventListener('click', resume);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('clear').addEventListener('click', clear);

document.onload = function() {
  init();
};

function init() {
  min.innerText = 0;
  sec.innerText = 0;
  ms.innerText= 0;
  timer = 0;
  running = false;
}
function update() {

  ms.innerText= timer % 100;
  sec.innerText= Math.floor(timer / 100 % 60);
  min.innerText= Math.floor(timer / 6000);
}

function start() {
  if(!running){
    running = true;
    interval = setInterval(() => {
      timer += 1;
      update();
    }, 10);
  }
}

function stop() {
  clearInterval(interval);

  
}

function clear() {
  clearInterval(interval);
  init();
  document.getElementById('log').innerText = '';
}

function pause() {
  running = false;
  clearInterval(interval);
  let li = document.createElement('li');
  li.innerText = document.getElementById('time').innerText;
  document.getElementById('log').appendChild(li);
  

}

function resume() {
  if (!running) {
    start();
  }
}
