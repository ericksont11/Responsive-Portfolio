$(document).ready(function() {

var CharacterSelect = false;
var character = 0;
var enemy = 0;
var enemyHealth;
var enemyPower;
var characterPower;
var characterHealth;
var snokeDefeated = false;
var lukeDefeated = false;
var yodaDefeated = false;
var maceDefeated = false;
var restart = false;
var counter = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;

$("#CharacterImage1").click(function () {
    if (CharacterSelect === false) {
        character = 1;
        characterPower = 10;
        characterHealth = 100;
    }
    enemy = 1;
    characterPower = 10;
    characterHealth = 100;
    setBattle();
});

$("#CharacterImage2").click(function () {
    if (CharacterSelect === false) {
        character = 2;
        characterPower = 80;
        characterHealth = 70;
    }
    enemy = 2; 
    enemyPower = 80;
    enemyHealth = 70;
    setBattle();  
});

$("#CharacterImage3").click(function () {
    if (CharacterSelect === false) {
        character = 3;
        characterPower = 20;
        characterHealth = 105;
    }
    enemy = 3;
    enemyPower = 20;
    enemyHealth = 150;
    setBattle();        
});

$("#CharacterImage4").click(function () {
    if (CharacterSelect === false) {
        character = 4;
        characterPower = 70;
        characterHealth = 50;
    }
    enemy = 4;
    enemyPower = 70;
    enemyHealth = 50;
    setBattle();
});


$("#attack").click(function () {
for (y = 0; y < 5; y++){
    if (enemypicked === y) {
        enemyHealth = enemyHealth - characterPower;
        characterHealth = characterHealth - enemyPower;
        for (z = 0; z < 5; z++) {
        if (character === z) {
            characterPower = characterPower + 35;
            if (enemyHealth <= 0 && maceDefeated === false && yodaDefeated === false) {
                $("#CharacterOne").hide();
                $("#CharacterTwo").hide();
                $("#CharacterFour").show();
                $("#CharacterThree").show();
                $("#heading").html("Skywalker has been defeated! Choose your next foe!");
                $("#CharacterThree").css("margin-left", "35vw");
                lukeDefeated = true;
                $("#attack").hide();
            }
            else if (enemyHealth <= 0 && yodaDefeated === true) {
                $("#heading").html("Master Windu is up next! May the force be with you!");
                $("#CharacterOne").hide();
                $("#CharacterTwo").hide();
                $("#CharacterFour").hide();
                $("#CharacterThree").show();
                $("#CharacterThree").css("margin-left", "42vw");
                lukeDefeated = true;
                $("#attack").hide();
            }

            else if (enemyHealth <= 0 && maceDefeated === true) {
                $("#heading").html("Master Yoda is up next! May the force be with you!");
                $("#CharacterOne").hide();
                $("#CharacterTwo").hide();
                $("#CharacterThree").hide();
                $("#CharacterFour").show();
                $("#CharacterFour").css("margin-left", "42vw");
                lukeDefeated = true;
                $("#attack").hide();
            }
        }
        }
        $("#enemypower").html("Power: " +enemyPower);
        $("#enemyHealth").html("Health: " +enemyHealth);
        $("#characterHealth").html("Health: " +characterHealth);
        $("#characterPower").html("Power: " +characterPower);
    }
}

    if (characterHealth <=0) {
        $("#heading").html("You have been Defeated! Try Again!");
        newGame();
    }

    if (restart === true) {
        $("#heading").html("Try with a new character!");
        newGame();
        restart = false;
    }

    if (characterHealth !== 0 && yodaDefeated === true && lukeDefeated === true && snokeDefeated === true) {
        $("#heading").html("You are the most powerful force user in the galaxy!");
        $("#CharacterOne").hide();
        $("#CharacterTwo").hide();
        $("#CharacterThree").show();
        $("#CharacterFour").hide();
        $("#CharacterThreeText").hide();
        $("#CharacterThree").css("margin-left", "42vw");
        $("#attack").show();
        restart = true;
        $("#attack").html("NEW GAME");

    }

    if (characterHealth !== 0 && yodaDefeated === true && lukeDefeated === true && maceDefeated === true) {
        $("#heading").html("You are the most powerful force user in the galaxy!");
        $("#CharacterOne").hide();
        $("#CharacterThree").hide();
        $("#CharacterTwo").show();
        $("#CharacterFour").hide();
        $("#CharacterTwo").css("margin-left", "42vw");
        $("#CharacterTwoText").hide();
        restart = true;
        $("#attack").show();
        $("#attack").html("NEW GAME");


    }

    if (characterHealth !== 0 && snokeDefeated === true && lukeDefeated === true && maceDefeated === true) {
        $("#heading").html("You are the most powerful force user in the galaxy!");
        $("#CharacterOne").hide();
        $("#CharacterThree").hide();
        $("#CharacterFour").show();
        $("#CharacterTwo").hide();
        $("#CharacterFour").css("margin-left", "42vw");
        $("#CharacterFourText").hide();
        restart = true;
        $("#attack").show();
        $("#attack").html("NEW GAME");


    }

    if (characterHealth !== 0 && snokeDefeated === true && yodaDefeated === true && maceDefeated === true) {
        $("#heading").html("You are the most powerful force user in the galaxy!");
        $("#CharacterTwo").hide();
        $("#CharacterThree").hide();
        $("#CharacterOne").show();
        $("#CharacterFour").hide();
        $("#CharacterOne").css("margin-left", "42vw");
        restart = true;
        $("#attack").show();
        $("#attack").html("NEW GAME");
        $("#CharacterOnerText").hide();

    }

    if (lukeDefeated === true && a===0){
        $("#defeatedEnemies").show();
        $("#defeatedLuke").show();
        defeatedPosition();
        a = 1;
    }

    if (maceDefeated === true && b===0){
        $("#defeatedEnemies").show();
        $("#defeatedMace").show();
        defeatedPosition();
        b = 1;
    }

    if (yodaDefeated === true && c===0){
        $("#defeatedEnemies").show();
        $("#defeatedYoda").show();
        defeatedPosition();
        c = 1;
    }

    if (snokeDefeated === true && d===0){
        $("#defeatedEnemies").show();
        $("#defeatedSnoke").show();
        defeatedPosition();
        d = 1;
    };
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
        counter = 0;
        a = 0;
        b = 0;
        c = 0;
        d = 0;
        CharacterSelect = false;
        character = 0;
        enemypicked = false;
        enemyHealth = 100;
        enemyPower = 100;
        characterPower;
        characterHealth;
        snokeDefeated = false;
        lukeDefeated = false;
        yodaDefeated = false;
        maceDefeated = false;
    }
}

function defeatedPosition () {
    if (d === 0) {
        counter = counter + 1;
    }
    d = 1;
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
        $("#attack").show();
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
        $("#Character1").hide();
        $("#Character2").hide();
        $("#Character3").hide();
        $("#Character4").hide();
        $("#heading").html("Attack your enemy!");
        $("#CharacterText" + enemy).append("<br><br><p id='enemyPower'></p>");
        $("#CharacterText" + enemy).append("<br><p id='enemyHealth'></p>");
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