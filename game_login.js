function addUser()
{
player1Name = document.getElementById("player1_name_input").value;
player2Name = document.getElementById("player2_name_input").value;

    localStorage.setItem("Player1Name", player1Name);
    localStorage.setItem("Player2Name", player2Name);
    

    window.location = "game_page.html";
}