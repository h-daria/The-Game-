const calculateSumButton = document.querySelector('#calculator button');

function calculateSum() {
    const userInputNumber = document.getElementById('user-number');
    const enteredNumber = userInputNumber.value;

    let sumUpToNumber = 0;
    for (let i = 0; i <= enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    }

    const outputResultElement = document.getElementById('calculated-sum');

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
}

calculateSumButton.addEventListener('click', calculateSum);

const highlightButton = document.querySelector('#highlight-links button');


function highlightAllLinks() {
    const linksElements = document.querySelectorAll('#highlight-links a');

    for (const linksElement of linksElements){
        linksElement.classList.add('highlight');
    }
}
highlightButton.addEventListener('click', highlightAllLinks);

const userData = {
    firstName: 'Dasha',
    lastName: 'Halaida',
    age: '22'
}

const displayUserDataButton = document.querySelector('#user-data button');

function displayUserData() {
    const outputUserDataElement = document.getElementById('output-user-data');
    outputUserDataElement.innerHTML = '';

    for (const key in userData) {
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + userData[key];
        newUserDataListItemElement.textContent = outputText; 
        outputUserDataElement.append(newUserDataListItemElement);
    }
}

displayUserDataButton.addEventListener('click', displayUserData);

// Statistics

const rollTheDiceButton = document.querySelector('#statistics button');

function rollTheDice() {
   return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');

    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollTheDice();
        // if (rolledNumber == enteredNumber) {
        //     hasRolledTargetNumber = true;
        // делает то же,что и ниже}

        numberOfRolls++;
        const newRollListItemElement = document.createElement('li');

        const outputText = 'Roll' + ': ' + rolledNumber;
        newRollListItemElement.textContent = outputText;
        diceRollsListElement.append(newRollListItemElement);
        hasRolledTargetNumber = rolledNumber == enteredNumber;
    }
    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}

rollTheDiceButton.addEventListener('click', deriveNumberOfDiceRolls);
