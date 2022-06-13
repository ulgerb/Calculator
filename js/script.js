$(document).ready(function () {
    
    var result = 0;
    var displayEntry = '0';
    var ans = 0;

    calculate = $(".calculate")
    calculate.text(result)
    
    $('.btn').on('click', function (evt) {
        var buttonPressed = $(this).html();
        console.log(buttonPressed);

        if (buttonPressed === 'CE') {
            result = 0;
            displayEntry = '0';
        } else if (buttonPressed === '.') {
            displayEntry += '.'
        } else if (buttonPressed === 'del') {
            displayEntry = displayEntry.substring(0, displayEntry.length - 1);
        } else if (number_true(buttonPressed)) {
            if (displayEntry === '0') displayEntry = buttonPressed;
            else if (displayEntry == 'Infinity') displayEntry = buttonPressed;
            else if (displayEntry == 'NaN') displayEntry = buttonPressed;
            else if (displayEntry == 'undefined') displayEntry = buttonPressed;
            else displayEntry = displayEntry + buttonPressed;
        } else if (number_false(buttonPressed)){
            if (isOperator(buttonPressed)) {
                prevEntry = parseFloat(displayEntry);
                operation = buttonPressed;
                saveCurrent()
                displayEntry = '';
                
            } else if (buttonPressed === '%') {
                displayEntry = displayEntry/100
                displayEntry = displayEntry + ''
            } else if (buttonPressed === 'x<sup>2</sup>') {
                displayEntry *= displayEntry
                displayEntry = displayEntry + ''
            } else if (buttonPressed === 'x<sup>3</sup>') {
                displayEntry = displayEntry ** 3
                displayEntry = displayEntry + ''
            } else if (buttonPressed === '10<sup>x</sup>') {
                displayEntry = 10 ** displayEntry
                displayEntry = displayEntry + ''
            } else if (buttonPressed === '<sup>2</sup>√x') {
                displayEntry = Math.sqrt(displayEntry)
                displayEntry = displayEntry + ''
            } else if (buttonPressed === '=') {
                ans = displayEntry
                displayEntry = displayEntry 
                displayEntry = operate(prevEntry, displayEntry, operation);
                operation = null;
                console.log('olur');
                displayEntry = displayEntry + ''
                ans = displayEntry
                $('.save').html('')
            } else if (buttonPressed === 'ans') {
                displayEntry = ans
            }

        }
        updateScreen(displayEntry);
    });

    number_true = function (value) {
        return !isNaN(value);
    }
    number_false = function (value) {
        return isNaN(value);
    }
    updateScreen = function (displayValue) {
        var displayValue = displayValue.toString();
        $('.calculate').html(displayValue.substring(0, 15));
    };
    saveCurrent = function(){
        var saveEntry = displayEntry.toString();
        $('.save').html(saveEntry.substring(0, 15)+operation);
    }
    isOperator = function (value) {
        return value === '/' || value === 'x' || value === '+' || value === '-';
    };
    operate = function (a, b, operation) {
        a = parseFloat(a);
        b = parseFloat(b);
        console.log(a, b, operation);
        if (operation === '+') return a + b;
        if (operation === '-') return a - b;
        if (operation === 'x') return a * b;
        if (operation === '/') return a / b;
    }   
    
});




