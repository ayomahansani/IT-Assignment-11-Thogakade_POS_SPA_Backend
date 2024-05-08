// create an array
var customers = [];

var recordIndex;

// -------------------------- The start - when click navbar and some buttons --------------------------

$('#customer-section').css({display: 'none'});
$('#item-section').css({display: 'none'});
$('#order-section').css({display: 'none'});
$('#login-section').css({display: 'none'});
$('#register-section').css({display: 'none'});
$('#logout-section').css({display: 'none'});


/* start home nav management */
$('#nav-home').on("click", function () {
    $('#home-section').css({display: 'block'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});
});
/* end home nav management */


/* start customers nav management */
$('#nav-customers').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'block'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});
});
/* end customers nav management */


/* start items nav management */
$('#nav-items').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'block'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});
});
/* end items nav management */


/* start orders nav management */
$('#nav-orders').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'block'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});
});
/* end orders nav management */


/* start login nav management */
$('#btn-login').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'block'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});
    $('#navbar-section').css({display: 'none'});
});
/* end login nav management */


/* start register nav management */
$('#btn-register').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'block'});
    $('#logout-section').css({display: 'none'});
    $('#navbar-section').css({display: 'none'});
});
/* end register nav management */


/* start logout nav management */
$('#btn-logout').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'block'});
    $('#navbar-section').css({display: 'none'});
});
/* end logout nav management */


/* when click login page's login button */
$('#go-home-page').on("click", function () {
    $('#home-section').css({display: 'block'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});
    $('#navbar-section').css({display: 'block'});

    $('ul span.active').removeClass('active');
    $('ul li:nth-child(1) span').addClass('active');
});
/* end when click login page's login button */


/* when click login page's register button */
$('#go-register-page').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'block'});
    $('#logout-section').css({display: 'none'});
});
/* end when click login page's register button */


/* when click register page's register button */
$('#go-home-page-2').on("click", function () {
    $('#home-section').css({display: 'block'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});
    $('#navbar-section').css({display: 'block'});

    $('ul span.active').removeClass('active');
    $('ul li:nth-child(1) span').addClass('active');
});
/* when click register page's register button */


/* when click login page's register button */
$('#go-login-page').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'block'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});
});
/* end when click login page's register button */


/* when click home page's customer card's more button */
$('#go-customer-page').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'block'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});

    $('ul span.active').removeClass('active');
    $('ul li:nth-child(2) span').addClass('active');
});
/* end when click home page's customer card's more button */


/* when click home page's item card's more button */
$('#go-item-page').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'block'});
    $('#order-section').css({display: 'none'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});

    $('ul span.active').removeClass('active');
    $('ul li:nth-child(3) span').addClass('active');
});
/* end when click home page's customer card's more button */


/* when click home page's order card's more button */
$('#go-orders-page').on("click", function () {
    $('#home-section').css({display: 'none'});
    $('#customer-section').css({display: 'none'});
    $('#item-section').css({display: 'none'});
    $('#order-section').css({display: 'block'});
    $('#login-section').css({display: 'none'});
    $('#register-section').css({display: 'none'});
    $('#logout-section').css({display: 'none'});

    $('ul span.active').removeClass('active');
    $('ul li:nth-child(4) span').addClass('active');
});
/* end when click home page's customer card's more button */


/* start adding active class on click */
$('ul').on("click", 'span', function () {
    $('ul span.active').removeClass('active');
    $(this).addClass('active');
});
/* end adding active class on click */

// -------------------------- The end - when click navbar and some buttons --------------------------



// -------------------------- The start - when click customer save button --------------------------
$("#customer-save").on('click', () => {

    // get values from inputs

    var idOfCustomer = $("#customerId").val();      // customer id value
    var nameOfCustomer = $("#customerName").val();      // customer name value
    var addressOfCustomer = $("#customerAddress").val();        // customer address value
    var phoneOfCustomer = $("#customerPhone").val();        // customer phone value

    // check whether print those values

    console.log("id: " , idOfCustomer);
    console.log("name: " , nameOfCustomer);
    console.log("address: " , addressOfCustomer);
    console.log("phone: " , phoneOfCustomer);

    // create an object - Object Literal





});

// -------------------------- The end - when click customer save button --------------------------



// -------------------------- The start - when click customer update button --------------------------
$("#customer-update").on('click', () => {

    // get values from inputs

    var idOfCustomer = $("#customerId").val();      // customer id value
    var nameOfCustomer = $("#customerName").val();      // customer name value
    var addressOfCustomer = $("#customerAddress").val();        // customer address value
    var phoneOfCustomer = $("#customerPhone").val();        // customer phone value


    // get current customer object relevant to clicked row, using recordIndex


    // assign new values to relevant customer object's values



    // ********** special **********
    // the clicked table's row index must equal to the customer object's index of array

});

// -------------------------- The end - when click customer update button --------------------------



// -------------------------- The start - when click customer delete button --------------------------
$("#customer-delete").on('click', () => {



});

// -------------------------- The end - when click customer delete button --------------------------



// -------------------------- The end - when click a table row --------------------------



