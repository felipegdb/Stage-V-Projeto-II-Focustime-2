const treeSound = new Audio("/assets/sounds/Floresta.wav");
const rainSound = new Audio("/assets/sounds/Chuva.wav");
const houseSound = new Audio("/assets/sounds/Cafeteria.wav");
const fireSound = new Audio("/assets/sounds/Lareira.wav");

function pauseAllSounds() {
    treeSound.pause();
    rainSound.pause();
    houseSound.pause();
    fireSound.pause();
}

export function tree() {
    if (treeSound.paused) {
        pauseAllSounds();
        treeSound.play(); 
    } else {
        treeSound.pause();
    }
}

export function rain() {
    if (rainSound.paused) {
        pauseAllSounds(); 
        rainSound.play(); 
    } else {
        rainSound.pause();
    }
}

export function house() {
    if (houseSound.paused) {
        pauseAllSounds(); 
        houseSound.play(); 
    } else {
        houseSound.pause();
    }
}

export function fire() {
    if (fireSound.paused) {
        pauseAllSounds(); 
        fireSound.play(); 
    } else {
        fireSound.pause();
    }
}
