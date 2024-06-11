const display = document.getElementById("display");

function appendToDisplay(input) {
    if (input === 'c') {
        display.value = '';
    } else {
        display.value += input;
    }
}

function calculator() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
