/*eslint-env browser*/

function clearErrors() {
    for (var loopCounter = 0; 
        loopCounter < document.forms["displayEvensForm"].elements.length;
        loopCounter++)
        
        // "has-" as in "has-error"
        if (document.forms["displayEvensForm"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
            document.forms["displayEvensForm"].elements[loopCounter].parentElement.className = "form-group";
        }
}

function validateItems() {
    var start = document.forms["displayEvensForm"]["start"].value;
    var end = document.forms["displayEvensForm"]["end"].value;
    var step = document.forms["displayEvensForm"]["step"].value;
    var results = [];
    var outputString = "";
    
    clearErrors();
    
    if (start == "" || isNaN(start)) {
        alert("Starting number must be filled in with a number")
        document.forms["displayEvensForm"]["start"].parentElement.className = "form-group-has-error";
        document.forms["displayEvensForm"]["start"].focus();
        return false;
    }
    
    if (end == "" || isNaN(end)) {
        alert("Ending number must be filled in with a number")
        document.forms["displayEvensForm"]["end"].parentElement.className = "form-group-has-error";
        document.forms["displayEvensForm"]["end"].focus();
        return false;
    }

    if (step == "" || isNaN(step) || step <= 0) {
        alert("Step must be filled in with a positive number")
        document.forms["displayEvensForm"]["step"].parentElement.className = "form-group-has-error";
        document.forms["displayEvensForm"]["step"].focus();
        return false;
    }
    
    // Make sure to use numerical rather than string comparison
    start = Number(start);
    end = Number(end);
    step = Number(step);
    
    if (end <= start) {
        alert("Ending number must be larger than starting number")
        document.forms["displayEvensForm"]["end"].parentElement.className = "form-group-has-error";
        document.forms["displayEvensForm"]["end"].focus();
        return false;
    }
    
    document.getElementById("results").style.display = "block";
    

    for (var i = start; i <= end; i += step) {
        if (i % 2 == 0) {
            results.push(i);
        }
    }
    
    outputString = "<p>Here are the even numbers between " + start + " and " + end + " by " + step + "'s:<br />";
    
    for (i = 0; i < results.length; i++) {
        outputString += results[i] + "<br />";
    }
    
    outputString += "</p>"
    
    document.getElementById("results").style.display = "block";
    document.getElementById("results").innerHTML = outputString;

    return false;
}