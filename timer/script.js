let deadline = '2021-10-20';

function getTimeRemaining (end) {
    let t = Date.parse(end) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / 1000 / 3600) % 24),
        days = Math.floor((t / 1000 / 3600 / 24)) ;

    return {
        'total' : t,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds,
        'days' : days
    };
}

function setClock (id, end) {
    let timer = document.getElementById(id),
        numberDays = document.querySelector('.number-days'),
        numberHours = document.querySelector('.number-hours'),
        numberMinutes = document.querySelector('.number-minutes'),
        numberSeconds = document.querySelector('.number-seconds'),
        timeInterval = setInterval(updateClock, 1000);
        

    function updateClock () {
        
        let t = getTimeRemaining(end);

        function addZero (num) {
            if (num <= 9) { 
                return '0' + num;
            } else {
                return num
            }
        };

        numberDays.textContent = t.days;
        numberHours.textContent = addZero(t.hours);
        numberMinutes.textContent = addZero(t.minutes);
        numberSeconds.textContent = addZero(t.seconds);

        if (t.total <= 0) {

            clearInterval(timeInterval);
            numberDays.textContent = '0'
            numberHours.textContent = '00';
            numberMinutes.textContent = '00';
            numberSeconds.textContent = '00';
        }
    }

}

setClock('timer', deadline);


