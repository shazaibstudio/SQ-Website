export function initControls(spaceship){
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');

    startBtn.addEventListener('click', () => {
        if(spaceship) spaceship.userData.move = true;
    });

    stopBtn.addEventListener('click', () => {
        if(spaceship) spaceship.userData.move = false;
    });

    // Optional: forward arrow key
    window.addEventListener('keydown', (e) => {
        if(e.key === 'ArrowUp') {
            if(spaceship) spaceship.userData.move = true;
        }
    });
    window.addEventListener('keyup', (e) => {
        if(e.key === 'ArrowUp') {
            if(spaceship) spaceship.userData.move = false;
        }
    });
}
