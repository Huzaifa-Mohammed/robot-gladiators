var playerName = window.prompt("what is your robots name ?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

for (var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index.");
}


var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    if (promptFight === "fight" || promptFight === "Fight") {

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining.");
        //check health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died.");
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
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } else if (promptFight === "Skip" || promptFight === "skip") {
        //window.alert(playerName + " has choosen to skip the game ");
        var skipConfirm = window.confirm("are you sure you would like to quit ?");

        if (skipConfirm) {
            window.alert(playerName + " has choosen to skip. GoodBye! ");
            playerMoney = playerMoney - 2;
        } else {
            fight();
        }

    } else {
        window.alert("you have choosen valid option. Try Again!")
    }

}
for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
//fight();