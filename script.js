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
    const $select = document.querySelector('#city');

    !function runClock() {
        // const dateStr = new Date();       //.toISOString().substring(0, 19);        new Date(data.datetime.substring(0, 19));
        // updateClock(dateStr); 

        
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

    /*!async function populateCitiesSelect() {        
        const res = await fetch('http://worldtimeapi.org/api/timezone'); 
        const cities = await res.json();
        
        cities.forEach(city => {
            const option = createEl('option', city);
            $select.append(option); 
        });
    }(); 

    function createEl(el, val) {
        const elem = document.createElement(el);
        elem.textContent = val;
        elem.setAttribute('value', val); 
        return elem; 
    }

    let timeout; 
    $select.addEventListener('change', e => {
        const el = e.currentTarget;
        const city = el.value; 
        // el.x = ( el.x || 0 ) + 1000; 
        // console.log(el.x) 
        console.log('Timeout:', timeout) 
        clearTimeout(timeout); 
        timeout = getTime(city, el);
    });

    async function getTime(city, el) {
        const res = await fetch(`http://worldtimeapi.org/api/timezone/${city}`); 
        const data = await res.json();
        const dateStr = new Date(data.datetime.substring(0, 19));
        return updateClock(dateStr, el); 
    };*/

    function updateClock(dateStr, el) {

        const {hrs, hrsStr, min, minStr, secs, secStr} = formatDatestring(dateStr, el);  

        day.textContent = dateStr.toDateString();

        hrsTens.textContent = hrsStr[0]; 
        hrsOnes.textContent = hrsStr[1];  
        minTens.textContent = minStr[0]; 
        minOnes.textContent = minStr[1];  
        secTens.textContent = secStr[0]; 
        secOnes.textContent = secStr[1]; 

        agHours.style.transform = `rotate(${(hrs*30) + ((min*6)/12)}deg)`;  
        agMinutes.style.transform = `rotate(${min * 6}deg)`;  
        agSeconds.style.transform = `rotate(${secs * 6}deg)`; 

        return setTimeout(updateClock, 1000, dateStr, el); 
    }

    function formatDatestring(dateStr, el) { 
        el.x = (el.x || 0) + 1000;  

        // console.log('dateStr:', dateStr); 

        let time = new Date(dateStr).getTime();
        time = new Date(time + el.x); 

        const hrs = time.getHours(),
            min = time.getMinutes(),
            secs = time.getSeconds(),
            hrsStr = hrs < 10 ? `0${hrs}` : hrs.toString(),
            minStr = min < 10 ? `0${min}` : min.toString(),
            secStr = secs < 10 ? `0${secs}` : secs.toString(); 

        return {hrs, hrsStr, min, minStr, secs, secStr}; 

        // const time = dateStr, //new Date(dateStr),     
        //     hrs = time.getHours(),
        //     min = time.getMinutes(),
        //     secs = time.getSeconds(),
        //     hrsStr = hrs < 10 ? `0${hrs}` : hrs.toString(),
        //     minStr = min < 10 ? `0${min}` : min.toString(),
        //     secStr = secs < 10 ? `0${secs}` : secs.toString(); 

        // return {hrs, hrsStr, min, minStr, secs, secStr};  
    } 
});   