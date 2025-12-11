let numberOfDrumButtons = document.querySelectorAll(".drum").length;
let drumButtons = document.querySelectorAll(".drum"); 

/* for (let i = 0;i < numberOfDrumButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
     alert("I got clicked!");
});
} */

// better solution
drumButtons.forEach(function(button) {
     button.addEventListener("click", function() {
          alert("I got clicked!");
     });
});