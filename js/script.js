// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){
    $("#userChoice").text($("#input").val());
});
var rock="rock";
var paper="paper";
var scissors="scissors";


// DOCUMENT READY FUNCTION BELOW

var userChoice = ""
var computerChoice = ""
var winner = ""
var randomNumber = 0;

$("#shoot").click(function(){
    randomNumber=Math.random();
    userChoice = $("#input").val();
    $("#userChoice").text(userChoice);     
    
    if(randomNumber < .33) {
        computerChoice="rock"; 
        $("#computerChoice").html("rock")
    }else if(randomNumber > .33 && randomNumber < .66) {
        computerChoice="paper";
        $("#computerChoice").html("paper")
    }else if(randomNumber > .66) {
        computerChoice="scissors";
        $("#computerChoice").html("scissors")
    }
    if(computerChoice==="rock" && userChoice==="rock"){
            $("#result1").html("Its a draw");
            
        }else if(computerChoice==="rock" && userChoice==="paper"){
            $("#result1").html("User Wins!You are elite!");
        }else if(computerChoice==="rock" && userChoice==="scissors"){
            $("#result1").html("Computure Wins!OOOF!");
    }
    if(computerChoice==="paper" && userChoice==="paper"){
        $("#result1").html("Its a draw");
        }else if(computerChoice==="paper" && userChoice==="scissors"){
            $("#result1").html("User Wins!You are elite!");
        }else if(computerChoice==="paper" && userChoice==="rock"){
            $("#result1").html("Computure Wins!OOOF!");
    }
    if(computerChoice==="scissors" && userChoice==="scissors"){
        $("#result1").html("Its a draw");
        }else if(computerChoice==="scissors" && userChoice==="rock"){
            $("#result1").html("User Wins!You are elite!");
        }else if(computerChoice==="scissors" && userChoice==="paper"){
            $("#result1").html("Computure Wins!OOOF!");
    }
    console.log(randomNumber);
    console.log(computerChoice);
$("#play").click(function(){
   location.reload(); 
   $("#play").hide();
});
    
});