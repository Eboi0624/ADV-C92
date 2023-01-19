player1Name = localStorage.getItem("Player1Name");
var player2Name = localStorage.getItem("Player2Name");

player1Score = 0;
player2Score = 0;
questionTurn = "";
answerTurn = "";
document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";


document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;


document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;

function send()
{
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();

    charAt1 = word.charAt(1);

    lengthDivide2 = Math.floor(word.length/2);
    charAt2 = word.charAt(lengthDivide2);

    lengthMinus1 = word.length - 1;
    charAt3 = word.charAt(lengthMinus1);

    removeCharAt1 = word.replace(charAt1, "_")
    removeCharAt2 = removeCharAt1.replace(charAt2, "_")
    removeCharAt3 = removeCharAt2.replace(charAt3, "_")

    questionWord = "<h4 id='wordDisplay'> Q: " + removeCharAt3 + "</h4>";
    inputBox = "<br>Answer: <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = questionWord + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
}

function check()
{
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();
    if(word == answer)
    {
    
        if(answerTurn == "player1")
        {
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score;

        }
        else
        {
            player2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    
    }
    
    if(questionTurn == "player1")
    {
        answerTurn = "player2";
        document.getElementById("playerQuestion").innerHTML = "Answer Turn - " + player2Name;

    }
    else
    {
        answerTurn = "player1";
        document.getElementById("playerQuestion").innerHTML = "Answer Turn - " + player1Name;
    }
       

    if(answerTurn == "player1")
    {
        questionTurn = "player2";
        document.getElementById("playerAnswer").innerHTML = "Question Turn - " + player2Name;

    }
    else
    {
        questionTurn = "player1";
        document.getElementById("playerAnswer").innerHTML = "Question Turn - " + player1Name;
    }

    document.getElementById("output").innerHTML = "";
}