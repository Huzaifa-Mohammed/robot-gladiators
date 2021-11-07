var playerName = window.prompt("what is your robots name ?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;



var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//**for (var i = 0; i < enemyNames.length; i++) {
//console.log(enemyNames[i]);
// console.log(i);
//   console.log(enemyNames[i] + " is at " + i + " index.");
//}


var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {


        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

        if (promptFight === "Skip" || promptFight === "skip") {
            //window.alert(playerName + " has choosen to skip the game ");
            var skipConfirm = window.confirm("are you sure you would like to quit ?");

            if (skipConfirm) {
                window.alert(playerName + " has choosen to skip. GoodBye! ");
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playe Money " + playerMoney);
                break;
            }
        }
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining.");
        //check health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died.");
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + "health left");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        playerHealth = Math.max(0, playerHealth - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " Attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaning.");
        //check players health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }

};

var endGame = function() {
    //window.alert("The game has now ended. Let's see how you did!");
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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
            if (playerMoney >= 7) {

                window.alert("Refilling player's health by 20 for 7 dollars");
                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                break;
            } else {
                window.alert("You don't have enough money!");
            }
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                //increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
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
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}



var startGame = function() {
    for (var i = 0; i < enemyNames.length; i++) {

        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40, 60);
            playerHealth = 100;
            playerAttack = 10;
            playerMoney = 10;
            fight(pickedEnemyName);
            if (playerHealth > 0 && i < enemyNames.length - 1) {
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