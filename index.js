let paragrathElement = document.querySelector('p');

function changeParagrathText () {
    paragrathElement.textContent = 'Clicked';
}

paragrathElement.addEventListener('click', changeParagrathText)

let inputElement = document.querySelector('input');

function retrieveUserInput () {
    let enteredText = inputElement.value;
    console.log(enteredText);
}

inputElement.addEventListener('input', retrieveUserInput);