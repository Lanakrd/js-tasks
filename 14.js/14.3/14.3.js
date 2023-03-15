function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const hourElement = document.querySelector('.hour');
    const minuteElement = document.querySelector('.minute');
    const secondElement = document.querySelector('.second');
    
    hourElement.textContent = formatTime(hours);
    minuteElement.textContent = formatTime(minutes);
    secondElement.textContent = formatTime(seconds);
  }
  
  function formatTime(time) {
    return time < 10 ? '0' + time : time;
  }
  
  setInterval(updateClock, 1000);