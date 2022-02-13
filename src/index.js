import './assets/css/style.css';
import {menu,video,lim,activeRemove,updateCountdown,MILLISECONDS_OF_A_SECOND} from './assets/js/script.js';

//Function for the event click button
menu.addEventListener('click', function(e){
    activeRemove();
    let id = e.path[1].id;//Get the id of the clicked element
    let optVideo = video[id];//Option video
    let selVideo = document.querySelector('#videoOption');
    selVideo.innerHTML = `<iframe src="https://www.youtube.com/embed/${optVideo}?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>`;
    document.getElementById(id).classList.add('active');
});

//Countdown
updateCountdown();
// Refresh every second
setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
