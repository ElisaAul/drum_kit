let numberOfDrumButtons = document.querySelectorAll(".drum").length;
let drumButtons = document.querySelectorAll(".drum"); 
let audio = new Audio("sounds/crash.mp3");


/* for (let i = 0;i < numberOfDrumButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
     alert("I got clicked!");
});
} */

// better solution
 drumButtons.forEach(function(button) {
     button.addEventListener("click", function() {
          alert("I got clicked!");
          audio.play();
     });
}); 




  /*   function add(num1, num2) {
     return num1 + num2;
     }
     function multiply(num1, num2) {
     return num1 * num2;
     }

     function divide(num1, num2) {
     return num1 / num2;
     }
     function subtract(num1, num2) {
     return num1 - num2;
     }


     function calculator(num1, num2, operator) {
     return operator(num1 + num2)};

      calculator(4, 5,add);
     calculator(4,5,multiply);
     calculator(4,5,divide);
     calculator(4,5,subtract);
 */

