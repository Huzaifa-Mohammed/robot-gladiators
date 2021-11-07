//**for (var i = 0; i < enemyNames.length; i++) {
//console.log(enemyNames[i]);
// console.log(i);
//   console.log(enemyNames[i] + " is at " + i + " index.");
//}


var fight = function(enemy) {

    while (playerInfo.health > 0 && enemy.health > 0) {


        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

        if (promptFight === "Skip" || promptFight === "skip") {
            //window.alert(playerName + " has choosen to skip the game ");
            var skipConfirm = window.confirm("are you sure you would like to quit ?");

            if (skipConfirm) {
                window.alert(playerInfo.Name + " has choosen to skip. GoodBye! ");
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playe Money " + playerInfo.money);
                break;
            }
        }
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(playerInfo.Name + " attacked " + enemy.name + "." + enemy.name + " now has " + enemy.health + " health remaining.");
        //check health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died.");
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + "health left");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(enemy.name + " Attacked " + playerInfo.Name + ". " + playerInfo.Name + " now has " + playerInfo.health + " health remaning.");
        //check players health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.Name + " has died!");
            break;
        } else {
            window.alert(playerInfo.Name + " still has " + playerInfo.health + " health left.");
        }
    }

};

var endGame = function() {
    //window.alert("The game has now ended. Let's see how you did!");
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again ? ");
    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerInfo.money >= 7) {

                window.alert("Refilling player's health by 20 for 7 dollars");
                // increase health and decrease money
                playerInfo.health = playerInfo.health + 20;
                playerInfo.money = playerInfo.money - 7;
                break;
            } else {
                window.alert("You don't have enough money!");
            }
        case "UPGRADE":
        case "upgrade":
            if (playerInfo.money >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                //increase attack and decrease money
                playerInfo.attack = playerInfo.attack + 6;
                playerInfo.money = playerInfo.money - 7;
                break;
            } else {
                window.alert("You don't have enough money!");
            }
        case "LEAVE":
        case "leave":
            window.alert("leaving the store.");
            //do nothing
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            //call shop function to force player to choose right option
            shop();
            break;
    }

};
var playerInfo = {
    Name: window.prompt("what is your robots name ?"),
    health: 100,
    attack: 10,
    money: 10
};

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}


var enemyInfo = [{
        name: "Roborto",
        attack: randomNumber(10, 14)

    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)

    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)

    }
];



var startGame = function() {
    for (var i = 0; i < enemyInfo.length; i++) {

        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            playerInfo.health = 100;
            playerInfo.attack = 10;
            playerInfo.money = 10;
            fight(pickedEnemyObj);
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round? ");
                if (storeConfirm) {
                    shop();
                }
            }
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();
};
startGame();



//fight();