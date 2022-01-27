$(document).ready(function() {
    // set initially button state hidden
    $("#reg").hide();
    // use keyup event on email field
    //^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$
    $("#email").keyup(function() {
        if (validateEmail()) {
            // if the email is validated
            // set input email border green
            $("#email").css("border", "4px solid green");
            // and set label 
            $("#messageemail").html("<p class='text-success'>E-mail Validated</p>");
        } else {
            // if the email is not validated
            // set border red

            $("#email").css("border", "4px solid red");
            $("#messageemail").html("<p class='text-danger' >incorrect email</p>");

        }
        buttonState();
    });

    $("#fname").keyup(function() {
        if (validatename()) {
            // if the email is validated
            // set input email border green
            $("#fname").css("border", "4px solid green");
            // and set label 
            $("#messagefname").html("<p class='text-success'>Name Validated</p>");
        } else {
            // if the email is not validated
            // set border red
            $("#fname").css("border", "4px solid red");
            $("#messagefname").html("<p class='text-danger'>incorrect Name</p>");
        }
        buttonState();
    });
    $("#lname").keyup(function() {
        if (validatename2()) {
            // if the email is validated
            // set input email border green
            $("#lname").css("border", "4px solid green");
            // and set label 
            $("#messagelname").html("<p class='text-success'>Name Validated</p>");
        } else {
            // if the email is not validated
            // set border red
            $("#lname").css("border", "4px solid red");
            $("#messagelname").html("<p class='text-danger'>incorrect Name</p>");
        }
        buttonState();
    });
    $("#pno").keyup(function() {
        if (validatephone()) {
            // if the email is validated
            // set input email border green
            $("#pno").css("border", "4px solid green");
            // and set label 
            $("#messagephone").html("<p class='text-success'>phone Validated</p>");
        } else {
            // if the email is not validated
            // set border red
            $("#pno").css("border", "4px solid red");
            $("#messagephone").html("<p class='text-danger'>incorrect phone no</p>");
        }
        buttonState();
    });

    $("#pass").keyup(function() {
        if (validatepass()) {
            // if the email is validated
            // set input email border green
            $("#pass").css("border", "4px solid green");
            // and set label 
            $("#messagepass").html("<p class='text-success'>E-mail Validated</p>");
        } else {
            // if the email is not validated
            // set border red

            $("#pass").css("border", "4px solid red");
            $("#messagepass").html("<p class='text-danger' >incorrect email</p>");

        }
        buttonState();
    });



});

function buttonState() {
    if (validateEmail() && validatename() && validatename2() && validatephone() && validatepass()) {
        // if the both email and password are validate
        // then button should show visible
        $("#reg").show();
    } else {
        // if both email and pasword are not validated
        // button state should hidden
        $("#reg").hide();
    }
}

function validateEmail() {
    // get value of input email
    var email = $("#email").val();
    // use reular expression
    var reg = /^([a-zA-Z0-9]{8,20}@(christuniversity.in))$/;
    if (reg.test(email)) {
        return true;
    } else {
        return false;
    }
}

function validatename() {
    // get value of input email
    var name = $("#fname").val();
    // use reular expression
    var reg3 = /^([a-zA-Z]{3,20}) ([a-zA-Z]{2,20})+(\s*)$/;
    if (reg3.test(name)) {
        return true;
    } else {
        return false;
    }
}

function validatename2() {
    // get value of input email
    var name = $("#lname").val();
    // use reular expression
    var reg3 = /^([a-zA-Z]{3,20}) ([a-zA-Z]{2,20})+(\s*)$/;
    if (reg3.test(name)) {
        return true;
    } else {
        return false;
    }
}

function validatephone() {
    // get value of input email
    var phone = $("#pno").val();
    // use reular expression
    var reg4 = /^[6789]{1}[0-9]{9}$/;
    if (reg4.test(phone)) {
        return true;
    } else {
        return false;
    }
}


function validatepass() {
    var pass = $("#pass").val();
    //var weak=/^(([a-z]+[A-Z])+[a-zA-Z]|([A-Z]+[a-z]+[a-zA-Z])|([a-zA-Z][A-Z]+[a-z])|([a-zA-Z][A-Z]+[a-z]))$/;
    //(?<!foo|bar)(foo|bar)(?!foo|bar)
    var strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*()-_+={}[|\;:"<\]\>,./?])[a-zA-z0-9~`!@#$%^&*()_+={}[|\;:"<\]\>,./?]{8,20}$/;
    if (strong.test(pass)) {
        return true;
    } else {
        return false;
    }
}
