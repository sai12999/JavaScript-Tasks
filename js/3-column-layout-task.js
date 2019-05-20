var winnerIsSet=0;
var p1=0,p2=0,b1count=0,b2count;
function giveScore(button_id)
{
    if(winnerIsSet==1) return;
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
        if(p1)
        {
            p1 = Number(p1) + random;
        }
        else
        {
            p1 = random;
        }
        document.getElementById("p1score").value=p1;
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
        if(p2)
        {
            p2 = Number(p2) + random;
        }
        else
        {
            p2 = random;
        }
        document.getElementById("p2score").value=p2;
    }
    document.getElementById("result").value=random;
    if(b1count>=5 && b2count>=5)
    {
        var winner = p1>p2?"Player1":"Player2";
        winnerIsSet=1;
        if(p1==p2)
        document.getElementById("final_result").innerText = "Draw Match";
        else
        document.getElementById("final_result").innerText = winner+" won the game.";
    }
}

//function resetting the local storage and scores.
function resetStorage()
{
    p1=0;p2=0;b1count=0;b2count=0;
    document.getElementById("p1score").value="";
    document.getElementById("p2score").value="";
    document.getElementById("result").value="";
    document.getElementById("final_result").innerText ="";
    winnerIsSet=0;
}