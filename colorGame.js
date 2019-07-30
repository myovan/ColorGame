var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var challenge = document.getElementById("RGB_val");
var alert = document.getElementById("alert");

//var button = document.querySelector("#but");

var button = $("#but");
gameLogic();

button.bind("click", function(){
    $(".square").fadeTo("fast", 1);
    
    index = Math.floor(Math.random() * Math.floor(6));
    gameLogic();
    CORRECT = squares[index].style.backgroundColor;
    challenge.innerHTML = CORRECT;
    h1.style.backgroundColor = "#6B7A8F";
    
});

h1.style.color = "white";
challenge.style.color = "white";

function gameLogic(){
for(var i = 0; i < squares.length; ++i){
    squares[i].style.backgroundColor = getRandomRgb();
    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor === CORRECT){
            alert.textContent = "HOORAY";
            squares.forEach(function(element){
                element.style.backgroundColor = CORRECT;
            });
            h1.style.background = CORRECT;
        }
        else{
            $(this).fadeTo("slow", .2);
            alert.textContent = "WRONG";
        }
    });
}
}

let index = Math.floor(Math.random() * Math.floor(6));
let CORRECT = squares[index].style.backgroundColor;
challenge.innerHTML = CORRECT;



function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

  

