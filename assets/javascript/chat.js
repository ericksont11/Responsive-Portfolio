$( document ).ready(function() {

var config = {
apiKey: "AIzaSyCNF05USCRKHU3ol5O8rI4v0E1zasEeuSc",
authDomain: "comment-f18f9.firebaseapp.com",
databaseURL: "https://comment-f18f9.firebaseio.com",
projectId: "comment-f18f9",
storageBucket: "comment-f18f9.appspot.com",
messagingSenderId: "948852790554"
};
firebase.initializeApp(config);

var database = firebase.database();
var username=""
var text=""
var show = false
var hold ="";
var selected = 0;
var selected2 = 0;
var player1 = "";
var player2 = "";
var oneWins = 0;
var twoWins = 0;


database.ref().on("value", function(snapshot) {

    player1 = snapshot.val().game.player1;
    player2 = snapshot.val().game.player2;
    selected = snapshot.val().game.choice;
    selected2 = snapshot.val().game.choice2;
    show = snapshot.val().talking.display;
    text = snapshot.val().talking.chat;
    username = snapshot.val().talking.player;

    if (show === true){
    var div = $("<div id='box'>").text(username + ":    " +text).css("margin-bottom", ".5vh").css("margin-right", "0.5vh");
    if (hold === username){
        div.css("background-color", "rgb(104, 103, 107)")
    }
    else {
        div.css("background-color", "rgb(70, 54, 175)")
    }
    div.appendTo("#chatbox")
    show = false;
    updateScroll()
    database.ref("/talking").set({
        chat: text,
        player : username,
        display : show,
    });
    if (player1 == true) {
    console.log('hello')
    database.ref("/game").onDisconnect().set({
        choice: 0,
        choice2: 0,
        player1 : player1,
        player2: player2,
    })
    }
    if (player2 == true) {
    console.log('hello')
    database.ref("/game").onDisconnect().set({
        choice: 0,
        choice2: 0,
        player1 : player1,
        player2: "",
    })
    }
    
    }
    displayWinner();
}, function(errorObject) {
console.log("Error: " + errorObject.code);
});


$('#comment').keypress(function(event) {
    if (event.keyCode == 13 || event.which == 13) {
    $("#chatbox").show()
    text = $("#comment").val()
    username = $("#user").val().toUpperCase().trim()
    show = true;
    database.ref("/talking").set({
        chat: text,
        player : username,
        display : show,
    });
    if (player1 === ""){
        player1 = username;
    }
    else if (player2 === ""){
        player2 = username;
    }
    database.ref("/game").set({
        choice: selected,
        choice2: selected2,
        player1 : player1,
        player2: player2,
    });
    $("#comment").val("")
    }
});


$('#user').keypress(function(event) {
    if (event.keyCode == 13 || event.which == 13) {
    show = false;
    username = $("#user").val().toUpperCase().trim()
    hold = username;
    $("#user").hide()
    $("#comment").show()
    $("#title").html("Hey " + username + " choose Rock, Paper, or Scissors from")
    if (player1 === "") {
        $("#userChoice").css("background-color", "green")
        database.ref("/talking").set({
            chat: text,
            player : username,
            display : show,
        });
        player1 = hold
        database.ref("/game").set({
            choice: selected,
            choice2: selected2,
            player1 : player1,
            player2: player2,
        });
    }
    else if (player2 === "") {
        $("#opponentChoice").css("background-color", "green")
        database.ref("/talking").set({
            chat: text,
            player : username,
            display : show,
        });
        player2 = hold
        database.ref("/game").set({
            choice: selected,
            choice2: selected2,
            player1 : player1,
            player2: player2,
    
        });
    }
    else {
        $("#title").html("The game is full")
    }
}

});

$("#rock").on("click", function() {
    console.log(player1)
    console.log(player2)
    if (hold === player1) {
        selected = 1
        database.ref("/game").set({
            choice: selected,
            choice2: selected2,
            player1 : player1,
            player2: player2,
        });
        $("#paper").css("display", "none")
        $("#scissors").css("display", "none")
    }
})
$("#paper").on("click", function() {
    if (hold === player1) {
        selected = 2
        database.ref("/game").set({
            choice: selected,
            choice2: selected2,
            player1 : player1,
            player2: player2,
        });
        $("#rock").css("display", "none")
        $("#scissors").css("display", "none")
    }
})
$("#scissors").on("click", function() {
    if (hold === player1) {
        selected = 3
        database.ref("/game").set({
            choice: selected,
            choice2: selected2,
            player1 : player1,
            player2: player2,
        });
        $("#paper").css("display", "none")
        $("#rock").css("display", "none")
    }
})
$("#rock2").on("click", function() {
    if (hold === player2) {
        selected2 = 1
        database.ref("/game").set({
            choice: selected,
            choice2: selected2,
            player1 : player1,
            player2: player2,
        });
        $("#paper2").css("display", "none")
        $("#scissors2").css("display", "none")
    }
})
$("#paper2").on("click", function() {
    if (hold === player2) {
        selected2 = 2
        database.ref("/game").set({
            choice: selected,
            choice2: selected2,
            player1 : player1,
            player2: player2,
        });
        $("#rock2").css("display", "none")
        $("#scissors2").css("display", "none")
    }
})
$("#scissors2").on("click", function() {
    if (hold === player2) {
        selected2 = 3
        database.ref("/game").set({
            choice: selected,
            choice2: selected2,
            player1 : player1,
            player2: player2,
        });
        $("#paper2").css("display", "none")
        $("#rock2").css("display", "none")
    }
})

function updateScroll(){
    var element = document.getElementById("chatbox");
    element.scrollTop = element.scrollHeight;
}


function displayWinner () {
    if (selected > 0 && selected2 > 0) {
        if (selected2 === 1) {
            $("#paper2").css("display", "none")
            $("#scissors2").css("display", "none")
        }
        else if (selected2 === 2) {
            $("#rock2").css("display", "none")
            $("#scissors2").css("display", "none")
        } 
        else if (selected2 === 3) {
            $("#paper2").css("display", "none")
            $("#rock2").css("display", "none")
        } 
        if (selected === 1) {
            $("#paper").css("display", "none")
            $("#scissors").css("display", "none")
        }
        else if (selected === 2) {
            $("#rock").css("display", "none")
            $("#scissors").css("display", "none")
        } 
        else if (selected === 3) {
            $("#paper").css("display", "none")
            $("#rock").css("display", "none")
        }
        if ((selected === 3 && selected2 === 2)||(selected === 2 && selected2 === 1)||(selected === 1 && selected2 === 3)) {
            $("#title").html("Player one wins!")
            oneWins++
        }
        if ((selected === 2 && selected2 === 3)||(selected === 1 && selected2 === 2)||(selected === 3 && selected2 === 1)) {
            $("#title").html("Player two wins!")
            twoWins++
        }
        if ((selected === 2 && selected2 === 2)||(selected === 1 && selected2 === 1)||(selected === 3 && selected2 === 3)) {
            $("#title").html("It's a tie!")
        }
        selected= 0;
        selected2=0;
        setTimeout(function() {
            database.ref("/game").set({
                choice: selected,
                choice2: selected2,
                player1 : player1,
                player2: player2,
            });
            $("#rock").css("display", "inline-block")
            $("#scissors").css("display", "inline-block")
            $("#paper").css("display", "inline-block")
            $("#rock2").css("display", "inline-block")
            $("#scissors2").css("display", "inline-block")
            $("#paper2").css("display", "inline-block")
            $("#title").html("You're chatting as " + hold)
            $("#one-wins").html("WINS: " + oneWins)
            $("#two-wins").html("WINS: " + twoWins)
        },3000)

        
    }
}

});