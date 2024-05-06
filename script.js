let diskCount = 3;
let speed = 1000; // default speed (slow)
let disks = [];

function startGame() {
    resetGame();
    createDisks();
    moveTower(diskCount, 1, 3, 2);
}

function resetGame() {
    const container = document.querySelector('.tower-container');
    container.innerHTML = '<div class="pillar" id="pillar1"></div><div class="pillar" id="pillar2"></div><div class="pillar" id="pillar3"></div>';
    disks = [];
}

function createDisks() {
    const pillar1 = document.getElementById('pillar1');
    for (let i = 0; i < diskCount; i++) {
        const disk = document.createElement('div');
        disk.className = 'disk';
        disk.style.width = `${50 + i * 20}px`;
        disk.style.bottom = `${i * 25}px`;
        pillar1.appendChild(disk);
        disks.push(disk);
    }
}

function moveDisk(disk, source, destination) {
    const sourcePillar = document.getElementById(`pillar${source}`);
    const destPillar = document.getElementById(`pillar${destination}`);
    const topDisk = destPillar.querySelector('.disk');

    const sourceRect = sourcePillar.getBoundingClientRect();
    const destRect = destPillar.getBoundingClientRect();

    const offsetX = destRect.left - sourceRect.left;
    const offsetY = destRect.top - sourceRect.top;

    disk.style.transition = `top ${speed / 1000}s ease-in-out`;
    disk.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    setTimeout(() => {
        destPillar.prepend(disk);
        disk.style.transition = 'none';
        disk.style.transform = 'none';
        disk.style.top = '0';
    }, speed);
}

function moveTower(height, source, destination, auxiliary) {
    if (height > 0) {
        moveTower(height - 1, source, auxiliary, destination);
        moveDisk(disks[height - 1], source, destination);
        moveTower(height - 1, auxiliary, destination, source);
    }
}

function pauseGame() {
    // Implement pause logic (clear any running timeouts)
    clearTimeout();
}

function resumeGame() {
    // Implement resume logic (restart any paused timeouts)
    startGame();
}

function changeDiskCount() {
    diskCount = parseInt(document.getElementById('diskCount').value);
    startGame();
}

function changeSpeed() {
    speed = parseInt(document.getElementById('speed').value);
}
