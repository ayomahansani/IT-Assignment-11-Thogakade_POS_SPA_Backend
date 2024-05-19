// import array
import {user_credentials} from "../db/db.js";

// import class
import {RegisterModel} from "../model/registerModel.js";

// import method
import {displayNonSections} from "./indexController.js";
import {showErrorAlert} from "./customerController.js";




// -------------------------- The start - when click register page's register button  --------------------------
$('#go-home-page-2').on("click", function () {

    // get values from inputs
    var firstName = $("#fn").val();      // user first name value
    var lastName = $("#ln").val();      // user last name value
    var username = $("#email1").val();        // user email value
    var password = $("#pw1").val();        // user password value


    let userCredentialValidated = checkUserCredentialValidated(firstName, lastName, username, password);


    if(userCredentialValidated) {

        // create an object - Class Syntax
        let user = new RegisterModel(firstName, lastName, username, password);


        // push to the array
        user_credentials.push(user);

        // clear the inputs
        $("#fn").val("");
        $("#ln").val("");
        $("#email1").val("");
        $("#pw1").val("");


        displayNonSections();
        $('#home-section').css({display: 'block'});
        $('#navbar-section').css({display: 'block'});

        $('ul span.active').removeClass('active');
        $('ul li:nth-child(1) span').addClass('active');


        // show user register pop up
        Swal.fire({
            icon: 'success',
            title: 'Registered successfully!',
            showConfirmButton: false,
            timer: 1500,
            iconColor: '#4dc94d'
        });

    }

});
// -------------------------- The end - when click register page's register button  --------------------------




//-------------------------- The start - check customer validations --------------------------
function checkUserCredentialValidated(firstName, lastName, username, password) {

    if(!firstName){    //check first name field is empty or not
        showErrorAlert("First name field is required!")
        return false;
    } else {
        if(!/^[A-Za-z ]{2,40}$/.test(firstName)){
            showErrorAlert("Please enter a valid First Name!  Pattern - 'Shenu'")
            return false;
        }

    }

    if(!lastName){ //check last name field is empty or not
        showErrorAlert("Last name field is required!");
        return false;
    } else {
        if(!/^[A-Za-z ]{2,40}$/.test(lastName)){
            showErrorAlert("Please enter a valid Last Name!  Pattern - 'Mathew'")
            return false;
        }

    }

    if(!username){ //check username field is empty or not
        showErrorAlert("Username field is required!");
        return false;
    } else {
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)){
            showErrorAlert("Please enter a valid Email! Pattern - 'shawn345@gmail.com'")
            return false;
        }
    }

    if(!password){ //check password field is empty or not
        showErrorAlert("Password field field is required!");
        return false;
    } else {
        if(!/^.{4,}$/.test(password)){
            showErrorAlert("Please enter a valid Password! Pattern - 'Ko*56m()'")
            return false;
        }
    }

    return true;

}
//-------------------------- The end - check customer validations --------------------------



