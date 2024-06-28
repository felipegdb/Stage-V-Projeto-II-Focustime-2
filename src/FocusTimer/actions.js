import state from './state.js';
import * as timer from './timer.js';
import { minutes } from './elements.js';

export function toggleRunning() {
    const playIcon = document.getElementById('play'); 
    const isRunning = document.documentElement.classList.toggle('running');

    state.isRunning = isRunning;

    if (isRunning) {
        playIcon.classList.remove('ph-play-circle');
        playIcon.classList.add('ph-pause-circle');
        playIcon.style.color = 'blue'; 
        timer.countdown();
    } else {
        playIcon.classList.remove('ph-pause-circle');
        playIcon.classList.add('ph-play-circle');
        playIcon.style.color = '';
    }
}

export function reset() {
    const playIcon = document.getElementById('play');
    
    state.isRunning = false;

    document.documentElement.classList.remove('running');

    playIcon.classList.remove('ph-pause-circle');
    playIcon.classList.add('ph-play-circle');
    playIcon.style.color = '';

    timer.updateDisplay(0,0);
}

export function plus() {
    let currentMinutes = Number(minutes.textContent);
    let newMinutes = currentMinutes + 5;

    if (newMinutes > 60) {
        newMinutes = 60;
    }

    state.minutes = newMinutes;

    timer.updateDisplay(newMinutes, state.seconds);
}


export function moins() {
    let currentMinutes = Number(minutes.textContent);
    let currentSeconds = Number(seconds.textContent);

    let newMinutes = currentMinutes - 5;
    
    if (newMinutes <= 0) {
        newMinutes = 0;
        currentSeconds = 0;
    }

    state.minutes = newMinutes;
    state.seconds = currentSeconds;

    timer.updateDisplay(newMinutes, currentSeconds);
}
