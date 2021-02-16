const button = document.getElementById('button');
button.addEventListener('click', () => {
    console.log('Estamos animando.')
    button.classList.add('animar');

    setTimeout(() => {
        document.body.removeChild(button);
        document.body.appendChild(button);
    }, 1000);
});

button.addEventListener('animationstart' , () => {
    console.log('La animacion ha empezado.');
});

button.addEventListener('animationend' , () => {
    console.log('La animacion ha terminado.');
});