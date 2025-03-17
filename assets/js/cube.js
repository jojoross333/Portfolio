// LE CUBE ______________________________________________________

let isMouseDown = false;
let startX, startY, rotationX = 0, rotationY = 0;
const cube = document.querySelector('.cube');
const cubeContainer = document.querySelector('.cube-container');

// Vérifie la taille de l'écran et applique le comportement
if (window.innerWidth > 768) { // Si l'écran est plus grand que 768px (pas en responsive)
    // Lorsque la souris entre dans le cube, on arrête l'animation
    cubeContainer.addEventListener('mouseenter', () => {
        cube.style.animation = 'none'; // Désactive l'animation
    });

    // Lorsque la souris quitte le cube, on relance l'animation
    cubeContainer.addEventListener('mouseleave', () => {
        cube.style.animation = 'rotateCube 10s infinite linear'; // Réactive l'animation
    });

    // Commence à manipuler le cube avec la souris
    cube.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.clientX;
        startY = e.clientY;
    });

    // Déplace le cube avec la souris
    cube.addEventListener('mousemove', (e) => {
        if (isMouseDown) {
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            rotationX += deltaY * 0.5;
            rotationY -= deltaX * 0.5;
            cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
            startX = e.clientX;
            startY = e.clientY;
        }
    });

    // Arrête la manipulation du cube lorsque la souris est relâchée
    cube.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    // Permet à l'utilisateur de manipuler le cube sur mobile
    cube.addEventListener('touchstart', (e) => {
        isMouseDown = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        cube.style.animation = 'none'; // Désactive l'animation
    });

    cube.addEventListener('touchmove', (e) => {
        if (isMouseDown) {
            const deltaX = e.touches[0].clientX - startX;
            const deltaY = e.touches[0].clientY - startY;
            rotationX += deltaY * 0.5;
            rotationY -= deltaX * 0.5;
            cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }
    });

    cube.addEventListener('touchend', () => {
        isMouseDown = false;
        cube.style.animation = 'rotateCube 10s infinite linear'; // Réactive l'animation
    });
}