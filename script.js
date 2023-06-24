var start = true;
var color = ["red","yellow","green","blue"];
var gamePattern = [];
var userPattern = [];
var sounds = ["sounds\red.mp3","sounds/yellow.mp3","sounds/green.mp3","sounds/blue.mp3"];
var level = 0;
$(document).keypress(function(event){
    if(event.key=='Enter'&&start==true){
        $("h1").text("Level " + level);
        start = false;
        next_Sequence();
    }
});

$(".block").click(function(){
    var clickedbtn = $(this).attr("id");
    userPattern.push(clickedbtn);
    var audio = new Audio("sounds/" + clickedbtn + ".mp3");
    audio.play();
    $("#"+clickedbtn).fadeIn(100).fadeOut(100).fadeIn(100);
    check(userPattern.length-1);
});

function check(index){
    if(gamePattern[index]===userPattern[index]&&gamePattern.length!=userPattern.length){
    }
    else if(gamePattern[index]===userPattern[index]&&gamePattern.length===userPattern.length){
        userPattern = [];
        setTimeout(function(){
            next_Sequence();
        },1000);
    }
    else if(gamePattern[index]!=userPattern[index]){
        var audio = new Audio("sounds/" + "wrong" + ".mp3");
        audio.play();
        $("#title").text("Game Over, Press Enter key to Restart the Game");
        //start again
        start = true;
        gamePattern = [];
        userPattern = [];
        level = 0;
    }
}

function next_Sequence() {
    level++;
    $("#title").text("Level " + level);
    var randomNo = Math.floor(Math.random() * 4);
    gamePattern.push(color[randomNo]);
    $("#"+color[randomNo]).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + color[randomNo] + ".mp3");
    audio.play();
  }