/*eslint-env browser*/

function clearErrors() {
    for (var loopCounter = 0; 
        loopCounter < document.forms["contactForm"].elements.length;
        loopCounter++)
        
        // "has-" as in "has-error"
        if (document.forms["contactForm"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
            document.forms["contactForm"].elements[loopCounter].parentElement.className = "form-group";
        }
}

// This function should never execute - HTML 5 does its own email validation.
function validateEmail(number) {
    // Pattern courtesy https://stackoverflow.com/a/46181
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var test = re.test(number)
    return re.test(number);
}

function validatePhone (number) {
    // Pattern courtesy https://stackoverflow.com/a/123666
    var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

    return re.test(number);
}

function validateItems() {
    clearErrors();
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    
    // This block should never execute - name is a required field.
    // This is a placeholder for more validation logic.
    if (name == "") {
        alert("Please enter your name.");
        document.forms["contactForm"]["name"].parentElement.className = "form-row form-group col-md-6 has-error";
        document.forms["contactForm"]["name"].focus;
        return false;
    }
    
    // This block should never execute - name is a required field.
    // This is a placeholder for more validation logic.
    if (email == "" || !validateEmail(email)) {
        alert("Please enter your email.");
        document.forms["contactForm"]["email"].parentElement.className = "form-row form-group col-md-6 has-error";
        document.forms["contactForm"]["email"].focus;
        return false;
    }
    
    if (phone == "" || !validatePhone(phone)) {
        alert("Please enter a valid telephone number.");
        document.forms["contactForm"]["phone"].parentElement.className = "form-row form-group col-md-6 has-error";
        document.forms["contactForm"]["phone"].focus;
        return false;
    }
    
    document.getElementById("acknowledgement").style.display = "block";
    return false;
}