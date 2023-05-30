function generateRandomNumber(arrayRandomNumbers)
{
    let randomNumber;
    let check = false;
    while(check === false)
    {
        randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        if(!arrayRandomNumbers.includes(randomNumber))
        {
            check = true;
        }
    }
    return randomNumber;
}

function fillArrayRandomNumbers(arrayRandomNumbers)
{
    let number = null;
    for (let i=0; i<5; i++)
    {
        number = generateRandomNumber(arrayRandomNumbers);
        arrayRandomNumbers.push(number);
    }
    return arrayRandomNumbers;
}

let arrayRandomNumbers = [];
fillArrayRandomNumbers(arrayRandomNumbers);
console.log(arrayRandomNumbers);
let randomNumbers = document.getElementById('array_numbers');
randomNumbers.innerText = arrayRandomNumbers;

let second = 1;
const arrayCorrect = [];
const arrayIncorrect = [];
let arrayTotCorrect = 0;

setTimeout(function(){
    randomNumbers.innerText = '';
}, second * 1000);

setTimeout(function()
    {
        let InputNumber1 = parseInt(prompt('Inserisci il primo numero'));
        let InputNumber2 = parseInt(prompt('Inserisci il secondo numero'));
        let InputNumber3 = parseInt(prompt('Inserisci il terzo numero'));
        let InputNumber4 = parseInt(prompt('Inserisci il quarto numero'));
        let InputNumber5 = parseInt(prompt('Inserisci il quinto numero'));
        const arrayInputNumber = [InputNumber1, InputNumber2, InputNumber3, InputNumber4, InputNumber5]
        
        for(let i = 0; i<arrayRandomNumbers.length; i++)
        {
            let numbers = arrayRandomNumbers[i]
            if(arrayInputNumber.includes(numbers))
            {
                arrayCorrect.push(arrayInputNumber[i]);
                arrayTotCorrect++;
            }
            else
            {
                arrayIncorrect.push(arrayInputNumber[i]);
            }
        }
        alert
        (`
            I numeri che hai indovinto sono: ${arrayCorrect}
            I numeri che hai sbagliato sono: ${arrayIncorrect}
            Complimenti! Hai indovinato ${arrayTotCorrect} numeri.
        `)
    }, (second + 1) * 1000);