$(document).ready(function () {
    
    var result = 0;
    var displayEntry = '0';
    var ans = 0;

    calculate = $(".calculate")
    calculate.text(result)
    
    $('.btn').on('click', function (evt) {
        var buttonPress = $(this).html()
        console.log(buttonPress)

        if (buttonPress === 'CE') {
            result = 0;
            displayEntry = '0';
        } else if (buttonPress === '.') {
            displayEntry += '.'
        } else if (buttonPress === 'del') {
            displayEntry = displayEntry.substring(0, displayEntry.length - 1);
        } else if (number_true(buttonPress)) {
            if (displayEntry === '0') displayEntry = buttonPress;
            else if (displayEntry == 'Infinity') displayEntry = buttonPress;
            else if (displayEntry == 'NaN') displayEntry = buttonPress;
            else if (displayEntry == 'undefined') displayEntry = buttonPress;
            else displayEntry = displayEntry + buttonPress;
        } else if (number_false(buttonPress)){
            if (operator_true(buttonPress)) {
                prevEntry = parseFloat(displayEntry)
                operation = buttonPress;
                saveScreen() // Up screen
                displayEntry = '';
                
            } else if (buttonPress === '%') {
                displayEntry = displayEntry/100;
                displayEntry = displayEntry + '';
            } else if (buttonPress === 'x<sup>2</sup>') {
                displayEntry *= displayEntry;
                displayEntry = displayEntry + '';
            } else if (buttonPress === 'x<sup>3</sup>') {
                displayEntry = displayEntry ** 3;
                displayEntry = displayEntry + '';
            } else if (buttonPress === '10<sup>x</sup>') {
                displayEntry = 10 ** displayEntry;
                displayEntry = displayEntry + '';
            } else if (buttonPress === '<sup>2</sup>√x') {
                displayEntry = Math.sqrt(displayEntry);
                displayEntry = displayEntry + '';

            } else if (buttonPress === '=') {
                if (operation != null) {
                    displayEntry = operate(prevEntry, displayEntry, operation);
                    operation = null;
                }
                console.log('olur');
                displayEntry = displayEntry + '';
                ans = displayEntry;
                $('.save').html('')
            } else if (buttonPress === 'ans') {
                displayEntry = ans;
            }

        }
        updateScreen(displayEntry);
    })

    updateScreen = function (displayValue) {
        var displayValue = displayValue.toString();
        $('.calculate').html(displayValue.substring(0, 15));
    }

    saveScreen = function () {
        var saveEntry = displayEntry.toString();
        $('.save').html(saveEntry.substring(0, 15) + operation);
    }


    number_true = function (value) {
        return !isNaN(value);
    }

    number_false = function (value) {
        return isNaN(value);
    }
    
    operator_true = function (value) {
        return value === '/' || value === 'x' || value === '+' || value === '-';
    }

    operate = function (a, b, operation) {
        a = parseFloat(a);
        b = parseFloat(b);
        console.log(a, b, operation);
        if (operation === '+') return a + b;
        if (operation === '-') return a - b;
        if (operation === 'x') return a * b;
        if (operation === '/') return a / b;
    }
    
})




