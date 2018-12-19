/*eslint-env browser*/
function rollDice() {
    return Math.floor((Math.random()*6)+1) + Math.floor((Math.random()*6)+1)
}

function clearErrors() {
    for (var loopCounter = 0; 
        loopCounter < document.forms["luckySevensForm"].elements.length;
        loopCounter++)
        
        // "has-" as in "has-error"
        if (document.forms["luckySevensForm"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
            document.forms["luckySevensForm"].elements[loopCounter].parentElement.className = "form-group";
        }
}

function validateItems() {
    var bet = document.forms["luckySevensForm"]["bet"].value;
    var wallet = bet;
    var peak = bet;
    var peakCount = 0;
    var rollCount = 0;
    var roll;
    
    if (bet == "" || isNaN(bet) || bet < 0) {
        alert("Starting number must be filled in with a positive number")
        document.forms["displayEvensForm"]["start"].parentElement.className = "form-group-has-error";
        document.forms["displayEvensForm"]["start"].focus();
        return false;
    }
    wallet = Number(wallet)
    
    while (wallet > 0) {
        rollCount++;
        roll = rollDice();
        if (roll == 7) {
            wallet += 4;
            if (wallet >= peak) {
                peak = wallet;
                peakCount = rollCount;
            }
        } else {
            wallet -= 1;
        }
        
    }
    
    document.getElementById("results").style.display = "block";
    document.getElementById("startingBet").innerText = "$" + bet;
    document.getElementById("totalRolls").innerText = rollCount;
    document.getElementById("highestAmount").innerText = "$" + peak;
    document.getElementById("highestRollCount").innerText = peakCount;
    document.getElementById("displayButton").innerText = "Play Again"
    return false;
}
