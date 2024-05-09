// create arrays
var customers = [];
var items = [];

var customerRecordIndex;
var itemRecordIndex;


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



/* =================================================================================================== */
/* ========================================== CUSTOMER PAGE ========================================== */
/* =================================================================================================== */


// -------------------------- The start - customer table loading --------------------------
function loadCustomerTable() {

    $("#customer-tbl-tbody").empty();

    customers.map((item, index) => {

        // want to wrap => use ` mark

        let record = `<tr>
            <td class="customer-id-value">${item.id}</td>    <!-- <td> = table data -->
            <td class="customer-name-value">${item.name}</td>
            <td class="customer-address-value">${item.address}</td>
            <td class="customer-phone-value">${item.phone}</td>
        </tr>`;

        $("#customer-tbl-tbody").append(record);
        $("#customer-tbl-tbody").css("font-weight", 600);

    });
}
// -------------------------- The end - customer table loading --------------------------



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
    let customer = {
        id: idOfCustomer,
        name: nameOfCustomer,
        address: addressOfCustomer,
        phone: phoneOfCustomer
    }

    // push to the array
    customers.push(customer);

    // load the table
    loadCustomerTable();

    // clean the inputs values
    $("#customerId").val("");
    $("#customerName").val("");
    $("#customerAddress").val("");
    $("#customerPhone").val("");

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
    let customerObj = customers[customerRecordIndex];

    // assign new values to relevant customer object's values
    customerObj.id = idOfCustomer;
    customerObj.name = nameOfCustomer;
    customerObj.address = addressOfCustomer;
    customerObj.phone = phoneOfCustomer;

    // load the table
    loadCustomerTable();

    // clean the inputs values
    $("#customerId").val("");
    $("#customerName").val("");
    $("#customerAddress").val("");
    $("#customerPhone").val("");


    // ********** special **********
    // the clicked table's row index must equal to the customer object's index of array

});
// -------------------------- The end - when click customer update button --------------------------



// -------------------------- The start - when click customer delete button --------------------------
$("#customer-delete").on('click', () => {

    customers.splice(customerRecordIndex, 1);

    // load the table
    loadCustomerTable();

    // clean the inputs values
    $("#customerId").val("");
    $("#customerName").val("");
    $("#customerAddress").val("");
    $("#customerPhone").val("");

});
// -------------------------- The end - when click customer delete button --------------------------



// -------------------------- The start - when click customer clear button --------------------------
$("#customer-clear").on('click', () => {

    // clean the inputs values
    $("#customerId").val("");
    $("#customerName").val("");
    $("#customerAddress").val("");
    $("#customerPhone").val("");

});
// -------------------------- The end - when click customer clear button --------------------------



// -------------------------- The start - when click a customer table row --------------------------
$("#customer-tbl-tbody").on( 'click', 'tr', function () {

    let index = $(this).index();
    customerRecordIndex = index;    // assign current row index to recordIndex variable

    console.log("index" + index);

    let id = $(this).find(".customer-id-value").text();
    let name = $(this).find(".customer-name-value").text();
    let address = $(this).find(".customer-address-value").text();
    let phone = $(this).find(".customer-phone-value").text();

    $("#customerId").val(id);
    $("#customerName").val(name);
    $("#customerAddress").val(address);
    $("#customerPhone").val(phone);

});
// -------------------------- The end - when click a customer table row --------------------------



// -------------------------- The start - when click view all customers button --------------------------
$("#viewAllCus").on('click', function () {

    $("#all-customers-tbl-tbody").empty();

    customers.map((item, index) => {

        // want to wrap => use ` mark

        let record = `<tr>
            <td>${item.name}</td>  <!-- <td> = table data -->
        </tr>`;

        $("#all-customers-tbl-tbody").append(record);
        $("#all-customers-tbl-tbody").css("font-weight", 600);

    });

});
// -------------------------- The end - when click view all customers button --------------------------



/* =================================================================================================== */
/* ========================================== ITEM PAGE ========================================== */
/* =================================================================================================== */


// -------------------------- The start - item table loading --------------------------
function loadItemTable() {

    $("#item-tbl-tbody").empty();

    items.map((item, index) => {

        // want to wrap => use ` mark

        let record = `<tr>
            <td class="item-code-value">${item.code}</td>    <!-- <td> = table data -->
            <td class="item-name-value">${item.name}</td>
            <td class="item-price-value">${item.price}</td>
            <td class="item-qty-value">${item.qty}</td>
        </tr>`;

        $("#item-tbl-tbody").append(record);
        $("#item-tbl-tbody").css("font-weight", 600);

    });
}
// -------------------------- The end - item table loading --------------------------



// -------------------------- The start - when click item save button --------------------------
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
    let customer = {
        id: idOfCustomer,
        name: nameOfCustomer,
        address: addressOfCustomer,
        phone: phoneOfCustomer
    }

    // push to the array
    customers.push(customer);

    // load the table
    loadCustomerTable();

    // clean the inputs values
    $("#customerId").val("");
    $("#customerName").val("");
    $("#customerAddress").val("");
    $("#customerPhone").val("");

});
// -------------------------- The end - when click item save button --------------------------



// -------------------------- The start - when click item update button --------------------------
$("#customer-update").on('click', () => {

    // get values from inputs

    var idOfCustomer = $("#customerId").val();      // customer id value
    var nameOfCustomer = $("#customerName").val();      // customer name value
    var addressOfCustomer = $("#customerAddress").val();        // customer address value
    var phoneOfCustomer = $("#customerPhone").val();        // customer phone value


    // get current customer object relevant to clicked row, using recordIndex
    let customerObj = customers[customerRecordIndex];

    // assign new values to relevant customer object's values
    customerObj.id = idOfCustomer;
    customerObj.name = nameOfCustomer;
    customerObj.address = addressOfCustomer;
    customerObj.phone = phoneOfCustomer;

    // load the table
    loadCustomerTable();

    // clean the inputs values
    $("#customerId").val("");
    $("#customerName").val("");
    $("#customerAddress").val("");
    $("#customerPhone").val("");


    // ********** special **********
    // the clicked table's row index must equal to the customer object's index of array

});
// -------------------------- The end - when click item update button --------------------------



// -------------------------- The start - when click item delete button --------------------------
$("#customer-delete").on('click', () => {

    customers.splice(customerRecordIndex, 1);

    // load the table
    loadCustomerTable();

    // clean the inputs values
    $("#customerId").val("");
    $("#customerName").val("");
    $("#customerAddress").val("");
    $("#customerPhone").val("");

});
// -------------------------- The end - when click item delete button --------------------------



// -------------------------- The start - when click item clear button --------------------------
$("#customer-clear").on('click', () => {

    // clean the inputs values
    $("#customerId").val("");
    $("#customerName").val("");
    $("#customerAddress").val("");
    $("#customerPhone").val("");

});
// -------------------------- The end - when click item clear button --------------------------



// -------------------------- The start - when click a item table row --------------------------
$("#item-tbl-tbody").on( 'click', 'tr', function () {

    let index = $(this).index();
    itemRecordIndex = index;    // assign current row index to recordIndex variable

    console.log("index" + index);

    let code = $(this).find(".item-code-value").text();
    let name = $(this).find(".item-name-value").text();
    let price = $(this).find(".item-price-value").text();
    let qty = $(this).find(".item-qty-value").text();

    $("#codeItem").val(code);
    $("#nameItem").val(name);
    $("#priceItem").val(price);
    $("#qtyItem").val(qty);

});
// -------------------------- The end - when click a item table row --------------------------



// -------------------------- The start - when click view all item button --------------------------
$("#viewAllCus").on('click', function () {

    $("#all-customers-tbl-tbody").empty();

    customers.map((item, index) => {

        // want to wrap => use ` mark

        let record = `<tr>
            <td>${item.name}</td>  <!-- <td> = table data -->
        </tr>`;

        $("#all-customers-tbl-tbody").append(record);
        $("#all-customers-tbl-tbody").css("font-weight", 600);

    });

});
// -------------------------- The end - when click view all item button --------------------------



