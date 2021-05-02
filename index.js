var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    
makeSound(buttonInnerHtml);
buttonAnimation(buttonInnerHtml);

  });
}

document.querySelector(".cali").addEventListener("click", function() {
        var cali1 = new Audio("sounds/cali.mp3");
         cali1.play();
      });

document.querySelector(".bird").addEventListener("click", function() {
        var bird1 = new Audio("sounds/birds.mp3");
         bird1.play();
      });

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "f": 
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
        case "a": 
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
        case "s": 
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
        case "d": 
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
        case "j": 
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
        case "k": 
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
        case "l": 
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
        case "g": 
                var drum1 = new Audio("sounds/drum.mp3");
                drum1.play();
                break;
        case "h": 
                var splash = new Audio("sounds/splash.mp3");
                splash.play();
                break;
        case "z": 
                var snare1 = new Audio("sounds/snare1.mp3");
                snare1.play();
                break;
        case "x": 
                var bassd = new Audio("sounds/bassd.mp3");
                bassd.play();
                break;
        case "c": 
                var china = new Audio("sounds/china.mp3");
                china.play();
                break;
        case "v": 
                var drums = new Audio("sounds/drums.mp3");
                drums.play();
                break;
        case "b": 
                var hihat = new Audio("sounds/hihat.mp3");
                hihat.play();
                break;
        case "n": 
                var medium = new Audio("sounds/medium.mp3");
                medium.play();
                break;
        case "m": 
                var ride = new Audio("sounds/ride.mp3");
                ride.play();
                break;
        default: console.log(buttonInnerHtml);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}