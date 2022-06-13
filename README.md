# Calculator
@calculator @javascript 

## Video

<img src='https://user-images.githubusercontent.com/98836519/173416138-89c8b603-83eb-4563-8935-4622f751221e.gif' width='440' loop="true" autoplay="true !important" controls muted> 

<details  class="details-reset border rounded-2 " style="max-width:440px !important;">
  <summary class="px-3 py-2" style="max-width:440px !important;">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-device-camera-video">
    <path fill-rule="evenodd" d="M16 3.75a.75.75 0 00-1.136-.643L11 5.425V4.75A1.75 1.75 0 009.25 3h-7.5A1.75 1.75 0 000 4.75v6.5C0 12.216.784 13 1.75 13h7.5A1.75 1.75 0 0011 11.25v-.675l3.864 2.318A.75.75 0 0016 12.25v-8.5zm-5 5.075l3.5 2.1v-5.85l-3.5 2.1v1.65zM9.5 6.75v-2a.25.25 0 00-.25-.25h-7.5a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-4.5z"></path>
</svg>
    <span aria-label="Video açıklaması hesaplayıcı.mp4" class="m-1"><font style="vertical-align: inherit;" ><font style="vertical-align: inherit;">calculator.mp4</font></font></span>
    <span class="dropdown-caret"></span>
  </summary>

  <video src="https://user-images.githubusercontent.com/98836519/173416368-8123bb4c-a893-4fa6-90c6-8b773b0f894f.mp4" data-canonical-src="https://user-images.githubusercontent.com/98836519/173416368-8123bb4c-a893-4fa6-90c6-8b773b0f894f.mp4" controls="controls" autoplay muted="muted" class="d-block rounded-bottom-2 border-top width-fit" style="max-width:440px !important;">

  </video>
</details>

## Explanation

- First part of the code is to save the text from the button.
- In order for "dell" to do the deletion, the displayEntry text needs to be reduced by 1.
-     displayEntry = displayEntry.substring(0, displayEntry.length - 1);

- Second part, need to verify that the text from displayEntryy is the number.
-     number_true = function (value) {
        return !isNaN(value);
      }

- After verifying that the pressed button is a number, we can print the numbers to the displayEntry using the "if" condition.
-     else if (number_true(buttonPress)) {
            if (displayEntry === '0') displayEntry = buttonPress;
            else if (displayEntry == 'Infinity') displayEntry = buttonPress;
            else if (displayEntry == 'NaN') displayEntry = buttonPress;
            else if (displayEntry == 'undefined') displayEntry = buttonPress;
            else displayEntry = displayEntry + buttonPress;
       }

- Third part, Now let's examine the cases where displayEntry is not a number.
-     number_false = function (value) {
        return isNaN(value);
      }

- If the operator key is pressed, our priority should be to parse our number from the displayEntry. For this, the "parseFloat" method should be used. so we can save the first number we entered in another variable. 
-     if (operator_true(buttonPress)) {
                prevEntry = parseFloat(displayEntry)
                operation = buttonPress;
                saveScreen() // Up screen
                displayEntry = '';         
      }
      operator_true = function (value) {
        return value === '/' || value === 'x' || value === '+' || value === '-';
      }

