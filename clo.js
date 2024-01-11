//----Clock App --- //
let hours = document.getElementById('H');
let min = document.getElementById('M');
let sec = document.getElementById('S');

setInterval(() => {
    let current_time = new Date() ;
    let current_hours = current_time.getHours();


    // convert time 
    current_hours = current_hours % 12 || 12;
    hours.innerHTML = (current_hours < 10 ?"0":"" ) +  current_hours;
    min.innerHTML = (current_time.getMinutes() < 10 ? "0":"") + current_time.getMinutes();
    sec.innerHTML = (current_time.getSeconds() < 10 ? "0":"") + current_time.getSeconds();


}, 1000);
