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
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

        if (promptFight === "Skip" || promptFight === "skip") {
            //window.alert(playerName + " has choosen to skip the game ");
            var skipConfirm = window.confirm("are you sure you would like to quit ?");

            if (skipConfirm) {
                window.alert(playerName + " has choosen to skip. GoodBye! ");
                playerMoney = playerMoney - 10;
                console.log("playe Money " + playerMoney);
                break;
            }
        }
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
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
        playerHealth = playerHealth - enemyAttack;
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
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}


//fight();