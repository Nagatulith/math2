function addplayers(){
    p1_name=document.getElementById("player_1_name_input").value ;
    p2_name=document.getElementById("player_2_name_input").value ;
    localStorage.setItem("first_player",p1_name);
    localStorage.setItem("second_player",p2_name);
    window.location="game_page.html";
}