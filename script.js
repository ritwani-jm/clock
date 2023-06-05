document.addEventListener('DOMContentLoaded', () => {
    const clock = document.querySelector('.clock'),
        day = clock.querySelector('.day'),
        hrsTens = clock.querySelector('.hour-tens'),
        hrsOnes = clock.querySelector('.hour-ones'),
        minTens = clock.querySelector('.minute-tens'),
        minOnes = clock.querySelector('.minute-ones'),
        secTens = clock.querySelector('.second-tens'),
        secOnes = clock.querySelector('.second-ones'),
        agClock = document.querySelector('.analogue-clock'),
        agHours = agClock.querySelector('.hours'),
        agMinutes = agClock.querySelector('.minutes'),
        agSeconds = agClock.querySelector('.seconds');

    !function runClock() {
        const today = new Date(),     
            hrs = today.getHours(),
            min = today.getMinutes(),
            secs = today.getSeconds(); 

        day.textContent = today.toDateString();
        
        let hrsStr = hrs < 10 ? `0${hrs}` : hrs.toString(),
            minStr = min < 10 ? `0${min}` : min.toString(),
            secStr = secs < 10 ? `0${secs}` : secs.toString(); 

        hrsTens.textContent = hrsStr[0]; 
        hrsOnes.textContent = hrsStr[1];  
        minTens.textContent = minStr[0]; 
        minOnes.textContent = minStr[1];  
        secTens.textContent = secStr[0]; 
        secOnes.textContent = secStr[1];  

        agHours.style.transform = `rotate(${(hrs*30) + ((min*6)/12)}deg)`;  
        agMinutes.style.transform = `rotate(${min * 6}deg)`;  
        agSeconds.style.transform = `rotate(${secs * 6}deg)`;  

        setTimeout(()=>runClock(),1000); 
    }();

    if(new Date().getHours() < 6 || new Date().getHours() >= 18) {
        document.body.classList.add('dark-theme');
    }
});  