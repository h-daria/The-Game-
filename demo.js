let productSearchInputElement = document.getElementById('product-search');
let remainingCharsElement = document.getElementById('remaining-chars');

let maxAllowedChars = productSearchInputElement.maxLength;

function updateRemainingCharacters(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;
    
    let remainingCharacters = maxAllowedChars - enteredTextLength;

    if (remainingCharacters <= 10) {
        // productSearchInputElement.style.backgroundColor = 'rgb(219, 89, 89)';
        productSearchInputElement.classList.add('input-warning');
        remainingCharsElement.classList.add('remaining-chars-warning');
    } else {
        productSearchInputElement.classList.remove('input-warning');
        remainingCharsElement.classList.remove('remaining-chars-warning');
    }

    remainingCharsElement.textContent = remainingCharacters;
}

productSearchInputElement.addEventListener('input', updateRemainingCharacters);
