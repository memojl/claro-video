/**
 * Javascript
 * Project: Claro-video / Claro-Sports
 * Date: 2022-02-10
 */

//MENU---------------------------------------------------------------------------------------->
let menu = document.querySelector('[data-menu]'); // Selector of the menu
let video = {
    1:'zpOULjyy-n8',
    2:'MeMiezwvprg',
    3:'Z5MoBm99w1Q',
    4:'GUTt0qKUDyU'
};
let lim = Object.keys(video).length;//Limit

//Function that removes the active class
function activeRemove(){
    for (let i=1; i<=lim; i++) {
        document.getElementById(i).classList.remove('active');
    }
}

//COUNTER DOWN------------------------------------------------------------------------------------>

//===
// VARIABLES
//===
const DATE_TARGET = new Date('03/13/2022 0:00 AM');
// DOM for render
const SPAN_DAYS = document.querySelector('span#days');
const SPAN_HOURS = document.querySelector('span#hours');
const SPAN_MINUTES = document.querySelector('span#minutes');
const SPAN_SECONDS = document.querySelector('span#seconds');
// Milliseconds for the calculations
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;

//===
// FUNCTIONS
//===

/**
 * Method that updates the countdown and the sample
 */
function updateCountdown() {
    // Calcs
    const NOW = new Date()
    const DURATION = DATE_TARGET - NOW;
    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    let REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    if(REMAINING_HOURS<10){
        REMAINING_HOURS = "0"+REMAINING_HOURS;
    }
    let REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    if(REMAINING_MINUTES<10){
        REMAINING_MINUTES = "0"+REMAINING_MINUTES;   
    }
    let REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
    if(REMAINING_SECONDS<10){
        REMAINING_SECONDS = "0"+REMAINING_SECONDS;
    }
    // Thanks Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)

    // Render
    SPAN_DAYS.textContent = REMAINING_DAYS;
    SPAN_HOURS.textContent = REMAINING_HOURS;
    SPAN_MINUTES.textContent = REMAINING_MINUTES;
    SPAN_SECONDS.textContent = REMAINING_SECONDS;
}

export { menu,video,lim,activeRemove,updateCountdown,MILLISECONDS_OF_A_SECOND };

//END---------------------------------------------------------------------------------------->
