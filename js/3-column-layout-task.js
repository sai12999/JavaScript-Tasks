
var winnerIsSet=0;
var player1Score=0,player2Score=0,button1count=0,button2count=0;

//Arrow function to generate a random number between 1 and 6.
var getRandom = () =>
                    {
                        var min=1; 
                        var max=6;  
                        var random = Math.floor(Math.random()*10)%7; 
                        if(random == 0) 
                        return 6;
                        return random;
                    }                   
	

//Arrow function to give a random score to the player who clicked the play button.
var giveScore = (button_id) =>
                            {
                            var random = getRandom();
                            //Edge case
                            if(winnerIsSet==1) return;
                            //player 1 clicked the play button
                            if(button_id=="p1play")
                            { 
                                //if button1 is already clicked
                                if(button1count)
                                {
                                    //b1count>=5 represents player1 used all 5 chances.
                                    if(button1count>=5)
                                    {
                                        document.getElementById("final_result").innerText = "Player 1 you have used maximum number of chances.";
                                        return;
                                    }
                                    else
                                    {
                                        //updating number of chances used by player1.
                                        button1count = Number(button1count) + 1;
                                    }
                                }
                                else //Button is clicked for first time.
                                {
                                    button1count = 1;
                                }
                                document.getElementById("final_result").innerText = "";
                                /*player1 score update*/
                                player1Score = Number(player1Score) + random;
                                document.getElementById("p1score").value = player1Score;
                            }
                            else if(button_id=="p2play") //player 2 clicked the play button
                            {
                                //if button2 is already clicked
                                if(button2count)
                                {
                                    if(button2count>=5) //b2count>=5 represents player2 used all 5 chances.
                                        {
                                            document.getElementById("final_result").innerText = "Player 2 you have used maximum number of chances.";
                                            return;
                                        }
                                    else
                                    {
                                        //updating number of chances used by player2.
                                        button2count = Number(button2count) + 1;
                                    }
                                }
                                else //Button is clicked for first time.
                                {
                                    button2count = 1;
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
                            //always the dice value will be updated.
                            document.getElementById("result").value=random;
                            if(button1count>=5 && button2count>=5)
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
    player1Score=0;player2Score=0;button1count=0;button2count=0;
    document.getElementById("p1score").value="";
    document.getElementById("p2score").value="";
    document.getElementById("result").value="";
    document.getElementById("final_result").innerText ="";
    winnerIsSet=0;
}


