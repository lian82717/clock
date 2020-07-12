import 'reset-css';
import '../scss/index.scss';

(function setClock() {
  var time = new Date();
  
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  
  var clock = {
    hours: document.querySelector('.hour'),
    minutes: document.querySelector('.minute'),
    seconds: document.querySelector('.second')
  };
  
  var deg = {
    hours: 30 * hours + .5 * minutes,
    minutes: 6 * minutes + .1 * seconds,
    seconds: 6 * seconds
  }
  
  clock.hours.style.transform = 'translate(-50%, -100%) rotate(' + deg.hours + 'deg)';
  clock.minutes.style.transform = 'translate(-50%, -100%) rotate(' + deg.minutes + 'deg)';
  clock.seconds.style.transform = 'translate(-50%, -100%) rotate(' + deg.seconds + 'deg)';
  
  var runClock = function(){
    deg.hours += 360/43200;
    deg.minutes += 360/3600;
    deg.seconds += 360/60;
    
    clock.hours.style.transform = 'translate(-50%, -100%) rotate(' + deg.hours + 'deg)';
    clock.minutes.style.transform = 'translate(-50%, -100%) rotate(' + deg.minutes + 'deg)';
    clock.seconds.style.transform = 'translate(-50%, -100%) rotate(' + deg.seconds + 'deg)';
  };
  
  setInterval(runClock,1000);
  
  
})();