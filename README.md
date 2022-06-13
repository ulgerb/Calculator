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

## Explanation (Türkçe anlatımı aşağıdadır.)

- First part of the code is to save the text from the button.
- In order for "del" to do the deletion, the displayEntry text needs to be reduced by 1.
-     else if (buttonPress === 'del') {
          displayEntry = displayEntry.substring(0, displayEntry.length - 1);
      }

- Second part, need to verify that the text from displayEntry is the number.
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

- Third part, let's examine the cases where displayEntry is not a number.
-     number_false = function (value) {
          return isNaN(value);
      }

- If the operator key is pressed, our priority should be to parse our number from the displayEntry(for example; displayEntry == 45+). For this, the "parseFloat" method should be used. so we can save the first number we entered in another variable. After saving the number and operator, we clear the displayEntry.
-     if (operator_true(buttonPress)) {
          prevEntry = parseFloat(displayEntry)
          operation = buttonPress;
          saveScreen() // Up screen
          displayEntry = '';         
      }
      operator_true = function (value) {
          return value === '/' || value === 'x' || value === '+' || value === '-';
      }

- Fourth part, we need a function where we do "+", "-", "*", "/" to find out what the result is.
-     operate = function (a, b, operation) {
          a = parseFloat(a);
          b = parseFloat(b);
          console.log(a, b, operation);
          if (operation === '+') return a + b;
          if (operation === '-') return a - b;
          if (operation === 'x') return a * b;
          if (operation === '/') return a / b;
      }

- For the result, we must verify that we pressed the "=" button. here our priority should be to check the "operation" because if the "operation" is null then displayEntry will show underfined. If "operation" is not null, the "oparate()" function will work.
-     else if (buttonPress === '=') {
          if (operation != null) {
              displayEntry = operate(prevEntry, displayEntry, operation);
              operation = null;
          }
          displayEntry = displayEntry + '';
          ans = displayEntry;
          $('.save').html('')
      }

## Açıklama

- Kodun ilk kısmı, butondan gelen metnileri displayEntry içine kaydetmeliyiz.
- silme işlemini yapabilmesi için displayEntry metninin 1 azaltılması gerekir. Böylelikle yazılan son değeri silmiş yada değişkenden çıkarmış oluyoruz.
-     else if (buttonPress === 'del') {
          displayEntry = displayEntry.substring(0, displayEntry.length - 1);
      }

- İkinci kısım, displayEntryy'den gelen metnin sayı olduğunu doğrulamamız gerekiyor.
-     number_true = function (value) {
          return !isNaN(value);
      }

- Basılan butonun bir sayı olduğunu doğruladıktan sonra "if" koşulunu kullanarak sayıları displayEntry'ye yazdırabiliriz.
-     else if (number_true(buttonPress)) {
          if (displayEntry === '0') displayEntry = buttonPress;
          else if (displayEntry == 'Infinity') displayEntry = buttonPress;
          else if (displayEntry == 'NaN') displayEntry = buttonPress;
          else if (displayEntry == 'undefined') displayEntry = buttonPress;
          else displayEntry = displayEntry + buttonPress;
       }

- Üçüncü kısım, displayEntry'nin sayı olmadığı durumları inceleyelim.
-     number_false = function (value) {
          return isNaN(value);
      }

- Operatör tuşuna basılırsa, önceliğimiz displayEntry'den numaramızı ayrıştırmak olmalıdır çünkü displayEntry'de görülecek şey "45+" gibi bir şey olacaktır biz ise "45" ve "+" farklı değişkenlere atanmasını istiyoruz. Bunun için "parseFloat" yöntemi kullanılmalıdır. böylece girdiğimiz ilk sayıyı başka bir değişkene kaydedebiliriz. Numarayı ve operatörü kaydettikten sonra displayEntry'yi temizliyoruz.
-     if (operator_true(buttonPress)) {
          prevEntry = parseFloat(displayEntry)
          operation = buttonPress;
          saveScreen() // Up screen
          displayEntry = '';         
      }
      operator_true = function (value) {
          return value === '/' || value === 'x' || value === '+' || value === '-';
      }

- Dördüncü kısım, sonucun ne olduğunu bulmak için "+", "-", "*", "/" işlemlerini yaptığımız bir fonksiyona ihtiyacımız var.
-     if (operator_true(buttonPress)) {
          prevEntry = parseFloat(displayEntry)
          operation = buttonPress;
          saveScreen() // Up screen
          displayEntry = '';         
      }
      operator_true = function (value) {
          return value === '/' || value === 'x' || value === '+' || value === '-';
      }

- sonuç için "=" butonuna bastığımızı doğrulamalıyız. burada önceliğimiz "operation" içini kontrol etmek olmalı çünkü "operation" içi null ise displayEntry underfined göstericektir. "operation" içi null değil ise "oparate()" fonksiyonu çalışıcaktır.
-     else if (buttonPress === '=') {
          if (operation != null) {
              displayEntry = operate(prevEntry, displayEntry, operation);
              operation = null;
          }
          displayEntry = displayEntry + '';
          ans = displayEntry;
          $('.save').html('')
      }
