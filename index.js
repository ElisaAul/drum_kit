let numberOfDrumButtons = document.querySelectorAll(".drum").length;
let drumButtons = document.querySelectorAll(".drum").length; 
let crash = new Audio("sounds/crash.mp3");
let kick = new Audio("sounds/kick.mp3");
let snare = new Audio("sounds/snare.mp3");
let tom1 = new Audio("sounds/tom1.mp3");
let tom2 = new Audio("sounds/tom2.mp3");
let tom3 = new Audio("sounds/tom3.mp3");
let tom4 = new Audio("sounds/tom4.mp3");


for (let i = 0; i < numberOfDrumButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function () {
/*      console.log(this);
     this.style.color ="blue"; */

     let buttonInnerHTML = this.innerHTML;

     switch (buttonInnerHTML) {
          case "w":
               crash.play();
               break;
          case "a":
               kick.play();
               break;
          case "s":
               snare.play();
               break;
          case "d":
               tom1.play();
               break;
          case "j":
               tom2.play();
               break;
          case "k":
               tom3.play();
               break;
          case "l":
               tom4.play();
               break;
     }
});
}



/* crashImage.addEventListener("click", function() {
     crashImage
}) */


/* for (let i = 0;i < numberOfDrumButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
     alert("I got clicked!");
});
} */

/* // better solution
 drumButtons.forEach(function(button) {
     button.addEventListener("click", function() {
          alert("I got clicked!");
          audio.play();
     });
});  */




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

