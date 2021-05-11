const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const resultDisplay = document.getElementById('result')

const calculate = (e) => {
    let result = ''
    switch (e) {
        case '+':
            result = parseInt(num1.value) + parseInt(num2.value)
            resultDisplay.innerHTML = result
            break;
        case '-':
            result = parseInt(num1.value) - parseInt(num2.value)
            console.log(result);
            resultDisplay.innerHTML = result
            break;
        case '/':
            result = parseInt(num1.value) / parseInt(num2.value)
            console.log(result);
            resultDisplay.innerHTML = result
            break;
        case '*':
            result = parseInt(num1.value) * parseInt(num2.value)
            console.log(result);
            resultDisplay.innerHTML = result
            break;
        default:
            break;
    }
}