$(document).ready(function() {

var CharacterSelect = false;
var character = 0;
var enemy = 0;
var enemyHealth;
var enemyPower;
var characterPower;
var characterHealth;
var restart = false;
var counter = 0;
var positioned = false;
var first;
var enemyArray = ["Luke", "Snoke", "Mace", "Yoda"]
var noneDefeated = true;
var powerBoost;
var attack = true

$("#attack").hide();


    
$("#CharacterImage1").click(function () {
    if (attack === true) {
        if (CharacterSelect === false) {
            character = 1;
            characterPower = 10;
            characterHealth = 100;
            powerBoost = 30;
        }
        else {
        attack = false;
        name = "Luke",
        enemy = 1;
        enemyPower = 10;
        enemyHealth = 100;
        }
        setBattle();
    }
});

$("#CharacterImage2").click(function () {
    if (attack === true) {
        if (CharacterSelect === false) {
            character = 2;
            characterPower = 80;
            characterHealth = 70;
            powerBoost = 20;
        }
        else {
        attack = false;
        name = "Snoke",
        enemy = 2; 
        enemyPower = 15;
        enemyHealth = 70;
        }
        setBattle();
    }
});

$("#CharacterImage3").click(function () {
    if (attack === true) {
        if (CharacterSelect === false) {
            character = 3;
            characterPower = 20;
            characterHealth = 150;
            powerBoost = 5;
        }
        else {
        attack = false;
        name = "Mace",
        enemy = 3;
        enemyPower = 20;
        enemyHealth = 105;
        }
        setBattle();
    }
});

$("#CharacterImage4").click(function () {
    if (attack === true) {
        if (CharacterSelect === false) {
            character = 4;
            characterPower = 70;
            characterHealth = 50;
            powerBoost = characterPower  * 2;
        }
        else {
        attack = false;
        name = "Yoda",
        enemy = 4;
        enemyPower = 30;
        enemyHealth = 50;
        }
        setBattle();  
    }
});



$("#attack").click(function () {
console.log(attack)
for (y = 0; y < 5; y++){
    if (enemy === y) {
        enemyHealth = enemyHealth - characterPower;
        characterHealth = characterHealth - enemyPower;
        for (z = 1; z < 5; z++) {
            if (character === z) {
                characterPower = characterPower + powerBoost;
                if (enemyHealth <= 0) {
                    attack = true;
                    $("#Character1").show();
                    $("#Character2").show();
                    $("#Character3").show();
                    $("#Character4").show();
                    $("#Character"+y).hide();
                    $("#Character"+z).hide();
                    $("#heading").html(name + " has been defeated! Choose your next foe!");
                    $("#attack").hide();

                    if (name === enemyArray[y-1]){
                        $("#defeatedEnemies").show();
                        $("#defeated"+enemyArray[y-1]).show();
                        counter++;
                        defeatedPosition();
                        if (noneDefeated === true) {
                            first = y;
                            noneDefeated = false;
                        }
                    }
                    console.log(counter)
                    console.log(first)
                    if (counter === 2) {
                        $("#Character"+first).hide();
                        $("#Character1").css("margin-left", "42vw");;
                        $("#Character2").css("margin-left", "42vw");
                        $("#Character3").css("margin-left", "42vw");
                        $("#Character4").css("margin-left", "42vw");
                    }

                    if (counter === 3) {
                        $("#Character1").css("margin-left", "42vw");;
                        $("#Character2").css("margin-left", "42vw");
                        $("#Character3").css("margin-left", "42vw");
                        $("#Character4").css("margin-left", "42vw");
                        $("#Character1").hide();
                        $("#Character2").hide();
                        $("#Character3").hide();
                        $("#Character4").hide();
                        $("#Character"+ z).show();
                    }
                    
                }
               
            }

            if (positioned === false && character !== z && z !== y && z !== first) {
                $("#Character"+z).css("margin-left", "35vw");
                positioned = true;
            }
        }
        $("#CharacterText" + enemy).empty();
        $("#CharacterText" + enemy).append("<br><br><p id='enemyPower'>"+'Power: '+enemyPower+"</p>");
        $("#CharacterText" + enemy).append("<br><p id='enemyHealth'>"+'Health: '+enemyHealth+"</p>");
        $("#characterHealth").html("Health: " +characterHealth);
        $("#characterPower").html("Power: " +characterPower);
    }
}
    if (characterHealth <=0 && restart === false) {
    $("#heading").html("You have been Defeated! Try Again!");
    newGame();
    }

    if (restart === true) {
        $("#heading").html("Try with a new character!");
        newGame();
        restart = false;
    }

    if (characterHealth !== 0 && counter === 3) {
        $("#heading").html("You are the most powerful force user in the galaxy!");
        $("#attack").show();
        restart = true;
        $("#attack").html("NEW GAME");
    }
});

function newGame () {
    for (x=1; x<5; x++) {
        $("#Character" + x).show();
        $("#CharacterText" + x).empty();
        $("#CharacterText1").html("Luke Skywalker");
        $("#CharacterText2").html("Snoke");
        $("#CharacterText3").html("Mace Windu");
        $("#CharacterText4").html("Yoda");
        $("#Character"+ x).css("float", "left");
        $("#Character1").css("margin-left", "16vw");
        $("#Character" + x).css("margin-left", "0");
        $("#Character"+ x).css("position", "relative");
        $("#attack").html("Attack");
        $("#defeatedLuke").hide();
        $("#defeatedMace").hide();
        $("#defeatedSnoke").hide();
        $("#defeatedYoda").hide();
        $("#defeatedEnemies").hide();
        CharacterSelect = false;
        character = 0;
        enemy = 0;
        enemyHealth;
        enemyPower;
        characterPower;
        characterHealth;
        restart = false;
        counter = 0;
        positioned = false;
        first = 0;
        enemyArray = ["Luke", "Snoke", "Mace", "Yoda"]
        noneDefeated = true;
        attack = true;
    }
}

function defeatedPosition () {
    if (counter === 1){
        $("#defeatedEnemies").css("left", "42%");
    }
    if (counter === 2){
        $("#defeatedEnemies").css("left", "34.5%");
    }
    if (counter === 3){
        $("#defeatedEnemies").css("left", "27%");
    }
}


function setBattle () {
    if (CharacterSelect === false) {
        $("#Character"+ character).hide();
        CharacterSelect = true;
        $("#heading").html("Choose your Opponent");
        $("#CharacterText" + character).append("<br><br><p id='characterPower'></p>");
        $("#CharacterText" + character).append("<br><p id='characterHealth'></p>");
        $("#characterHealth").html("Health: " +characterHealth);
        $("#characterPower").html("Power: " +characterPower);
        if (character === 1) {
            $("#Character"+(character+1)).css("margin-left", "26vw");
        }
        else {
            $("#Character1").css("margin-left", "26vw");
        }
    }
    else if (CharacterSelect === true) {
        $("#attack").show();
        $("#Character1").hide();
        $("#Character2").hide();
        $("#Character3").hide();
        $("#Character4").hide();
        $("#heading").html("Attack your enemy!");
        $("#CharacterText" + enemy).append("<br><br><p id='enemyPower'>"+'Power: '+enemyPower+"</p>");
        $("#CharacterText" + enemy).append("<br><p id='enemyHealth'>"+'Health: '+enemyHealth+"</p>");
        $("#CharacterText" + character).append("<br><br><p id='characterPower'></p>");
        $("#CharacterText" + character).append("<br><p id='characterHealth'></p>");
        $("#enemyHealth").html("Health: " +enemyHealth);
        $("#enemyPower").html("Power: " + enemyPower);
        $("#Character"+ character).css("position", "absolute");
        $("#Character"+ enemy).css("position", "absolute");
        $("#Character" + enemy).css("margin-left", "59vw");
        $("#Character" + character).css("margin-left", "26vw");
        $("#Character"+ enemy).show();
        $("#Character"+ character).show();
    }
}

});