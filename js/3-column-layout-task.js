var winnerIsSet=0;
//p1 represents player 1 and p2 represents player 2.
var player1Score=0,player2Score=0,b1count=0,b2count=0;
function giveScore(button_id)
{
    if(winnerIsSet==1) return;
    //generating random number between 1 and 6
    var min=1; 
    var max=6;  
    var random =Math.floor(Math.random()*10)%7; 
    if(random==0) random=6;
    if(button_id=="p1play"){
        /*button1 click count*/
        if(b1count)
        {
            if(b1count>=5)
            {
                document.getElementById("final_result").innerText = "Player 1 you have used maximum number of chances.";
                return;
            }
            else
            {
                b1count = Number(b1count) + 1;
            }
        }
        else{
            b1count = 1;
        }
        document.getElementById("final_result").innerText = "";
        /*player1 score update*/
        if(player1Score)
        {
            player1Score = Number(player1Score) + random;
        }
        else
        {
            player1Score = random;
        }
        document.getElementById("p1score").value = player1Score;
    }
    else if(button_id=="p2play")
    {
        /*button2 click count*/
        if(b2count)
        {
            if(b2count>=5)
            {
                document.getElementById("final_result").innerText = "Player 2 you have used maximum number of chances.";
                return;
            }
            else
            {
            b2count = Number(b2count) + 1;
            }
        }
        else{
            b2count = 1;
        }
        document.getElementById("final_result").innerText = "";
        /*player2 score update*/
        if(player2Score)
        {
            player2Score = Number(player2Score) + random;
        }
        else
        {
            player2Score = random;
        }
        document.getElementById("p2score").value=player2Score;
    }
    document.getElementById("result").value=random;
    if(b1count>=5 && b2count>=5)
    {
        var winner = player1Score>player2Score?"Player1":"Player2";
        winnerIsSet=1;
        if(player1Score==player2Score)
        document.getElementById("final_result").innerText = "Draw Match";
        else
        document.getElementById("final_result").innerText = winner+" won the game.";
    }
}

//function resetting the local storage and scores.
function resetStorage()
{
    player1Score=0;player2Score=0;b1count=0;b2count=0;
    document.getElementById("p1score").value="";
    document.getElementById("p2score").value="";
    document.getElementById("result").value="";
    document.getElementById("final_result").innerText ="";
    winnerIsSet=0;
}


