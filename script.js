//your JS code here. If required.
function updateTime() {
    const timerElement = document.getElementById('timer');
    const now = new Date();
    
    const options = { month: 'numeric', day: 'numeric',year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = now.toLocaleString(undefined, options);
    
    timerElement.textContent = formattedTime;
}

setInterval(updateTime, 1000);

updateTime();