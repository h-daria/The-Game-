const enterNamePl1Button = document.getElementById('enter-name-pl1');
const enterNamePl2Button = document.getElementById('enter-name-pl2');

const displayAsideElement = document.querySelector('aside');
const displayBackdropElement = document.getElementById('backdrop');

enterNamePl1Button.addEventListener('click', openPlayerConfigurations);
enterNamePl2Button.addEventListener('click', openPlayerConfigurations);

const cancelButton = document.getElementById('cancel-button');

cancelButton.addEventListener('click', closeOverlays);
displayBackdropElement.addEventListener('click', closeOverlays);