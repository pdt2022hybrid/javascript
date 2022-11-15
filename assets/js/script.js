function getResult() {

    //*form
    const number1 = parseFloat(document.getElementById('num1').value);
    const number2 = parseFloat(document.getElementById('num2').value);

    const operation = document.getElementById('operation_select').value;

    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'sub':
            result = number1 - number2;
            break;
        case 'mul':
            result = number1 * number2;
            break;
        case 'div':
            result = number1 / number2;
            break;
    }

    //if result is not a number nothing will return
    if (isNaN(result)) {
        return;
    }

    document.getElementById('result').value = result;

}

function Clear() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').value = '';
}

function tryToAutomaticallyCalcaulate() {

    if (document.getElementById('num1').value && document.getElementById('num2').value) {
        getResult();
    }
    else {
        document.getElementById('result').value = '';
    }
}

function setOperationClass(operation = document.getElementById('operation_select').value) {

    document.getElementById('operation_select').classList.remove('add', 'sum', 'mul', 'div');
    document.getElementById('operation_select').classList.add(operation);


}

function setOperation(operation) {
    document.getElementById('operation_select').value = operation; 
    tryToAutomaticallyCalcaulate();
    setOperationClass(operation);
}

//!website refresh
window.onload = function () {
    setOperationClass();

    document.getElementById('num1').addEventListener('input', tryToAutomaticallyCalcaulate);
    document.getElementById('num2').addEventListener('input', tryToAutomaticallyCalcaulate);    
}
