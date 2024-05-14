// create arrays
var customers = [];
var items = [];
var orders = [];
let addedItems = [];
let tempItems = [];

let sum = 0;

var customerRecordIndex;
var itemRecordIndex;
var orderIndex;


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

        $("#customer-count").html(customers.length);

    });
}
// -------------------------- The end - customer table loading --------------------------



// ---------------- The start - when first time order page is loaded, want to generate order id  ----------------
autoGenerateCustomerId();
// --------------- The end - when first time order page is loaded, want to generate order id  ----------------



// -------------------------- The start - auto generate customer id --------------------------
function autoGenerateCustomerId() {

    var customerLength = customers.length;

    if(customerLength !== 0 ) {

        var currentCustomerId = customers[customers.length-1].id;
        var split = [];
        split = currentCustomerId.split("C0");
        var id = parseInt(split[1]);
        id++;
        if(id < 10) {
            $("#customerId").val("C00" + id);
        }else{
            $("#customerId").val("C0" + id);
        }

    } else {
        $("#customerId").val("C001");
    }

}
// -------------------------- The end - auto generate customer id --------------------------



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


    let customerValidated = checkCustomerValidation(idOfCustomer,nameOfCustomer,addressOfCustomer,phoneOfCustomer);


    if(customerValidated) {

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

            // generate next customer id
            autoGenerateCustomerId();

            // show customer saved pop up
            Swal.fire({
                icon: 'success',
                title: 'Customer saved successfully!',
                showConfirmButton: false,
                timer: 1500
            });

    }


});
// -------------------------- The end - when click customer save button --------------------------



// -------------------------- The start - when click customer update button --------------------------
$("#customer-update").on('click', () => {

    // get values from inputs

    var idOfCustomer = $("#customerId").val();      // customer id value
    var nameOfCustomer = $("#customerName").val();      // customer name value
    var addressOfCustomer = $("#customerAddress").val();        // customer address value
    var phoneOfCustomer = $("#customerPhone").val();        // customer phone value


    // get current customer object relevant to clicked row, using customerRecordIndex
    let customerObj = customers[customerRecordIndex];


    let customerValidated = checkCustomerValidation(idOfCustomer,nameOfCustomer,addressOfCustomer,phoneOfCustomer);

    if(customerValidated) {

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

        // generate next customer id
        autoGenerateCustomerId();

        // show customer saved pop up
        Swal.fire({
            icon: 'success',
            title: 'Customer updated successfully!',
            showConfirmButton: false,
            timer: 1500
        });

    }

    // ********** special **********
    // the clicked table's row index must equal to the customer object's index of array

});
// -------------------------- The end - when click customer update button --------------------------



// -------------------------- The start - when click customer delete button --------------------------
$("#customer-delete").on('click', () => {

    Swal.fire({

        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#328532',
        cancelButtonColor: '#c59c35',
        confirmButtonText: 'Yes, delete customer!'

    }).then((result) => {

        if (result.isConfirmed) {

            customers.splice(customerRecordIndex, 1);

            // load the table
            loadCustomerTable();

            // clean the inputs values
            $("#customerId").val("");
            $("#customerName").val("");
            $("#customerAddress").val("");
            $("#customerPhone").val("");

            // generate next customer id
            autoGenerateCustomerId();

            // show customer saved pop up
            Swal.fire({
                icon: 'success',
                title: 'Customer deleted successfully!',
                showConfirmButton: false,
                timer: 1500
            });
        }
    })

});
// -------------------------- The end - when click customer delete button --------------------------



//-------------------------- The start - check validations when place order --------------------------
function checkCustomerValidation(id, name, address, phone) {

    if(!/^C\d{3}$/.test(id)){
        showErrorAlert("Please enter a valid ID!")
        return false;
    }

    if(!name){ //check name
        showErrorAlert("Please enter a valid name!");
        return false;
    }

    if(!address){ //check address
        showErrorAlert("Please enter a valid address!");
        return false;
    }

    if(!phone){ //check address
        showErrorAlert("Please enter a valid Contact!");
        return false;
    }

    return true;

}
//-------------------------- The end - check validations when place order --------------------------



// -------------------------- The start - when click customer clear button --------------------------
$("#customer-clear").on('click', () => {

    // clean the inputs values
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



// -------------------------- The start - when click customer search button --------------------------
$("#customer-search-btn").on('click', function () {

    var customerDetail = $("#searchCustomer").val();

        for (let i=0; i<customers.length; i++) {

            if(customers[i].id === customerDetail || customers[i].name === customerDetail){
                $("#searchedCustomerId").val(customers[i].id);
                $("#searchedCustomerName").val(customers[i].name);
                $("#searchedCustomerAddress").val(customers[i].address);
                $("#searchedCustomerPhone").val(customers[i].phone);

                $("#customerDetailsModalLabel").html("Customer Details");

                return;
            }

            else {

                if(customerDetail !== "") {

                    $("#customerDetailsModalLabel").html("Can't find customer! Try again...");

                    $("#searchedCustomerId").val("No Customer");
                    $("#searchedCustomerName").val("No Customer");
                    $("#searchedCustomerAddress").val("No Customer");
                    $("#searchedCustomerPhone").val("No customer");

                } else {

                    $("#customerDetailsModalLabel").html("Please enter customer id or name...");

                    $("#searchedCustomerId").val("");
                    $("#searchedCustomerName").val("");
                    $("#searchedCustomerAddress").val("");
                    $("#searchedCustomerPhone").val("");
                }

            }

        }
});
// -------------------------- The end - when click customer search button --------------------------



// -------------------------- The start - clear the customer search bar's value --------------------------
$("#customer-search-modal-close").on('click', function () {

    $("#searchCustomer").val("");

});
// -------------------------- The end - clear the customer search bar's value --------------------------




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

        $("#item-count").html(items.length);

    });
}
// -------------------------- The end - item table loading --------------------------



// -------------------------- The start - when click item save button --------------------------
$("#item-save").on('click', () => {

    // get values from inputs
    var codeOfItem = $("#codeItem").val();      // item code value
    var nameOfItem = $("#nameItem").val();      // item name value
    var priceOfItem = $("#priceItem").val();        // item price value
    var qtyOfItem = $("#qtyItem").val();        // item qty value

    // check whether print those values
    console.log("code: " , codeOfItem);
    console.log("name: " , nameOfItem);
    console.log("price: " , priceOfItem);
    console.log("qty: " , qtyOfItem);

    // create an object - Object Literal
    let item = {
        code: codeOfItem,
        name: nameOfItem,
        price: priceOfItem,
        qty: qtyOfItem
    }

    // push to the array
    items.push(item);

    // load the table
    loadItemTable();

    // clean the inputs values
    $("#codeItem").val("");
    $("#nameItem").val("");
    $("#priceItem").val("");
    $("#qtyItem").val("");

});
// -------------------------- The end - when click item save button --------------------------



// -------------------------- The start - when click item update button --------------------------
$("#item-update").on('click', () => {

    // get values from inputs
    var codeOfItem = $("#codeItem").val();      // item code value
    var nameOfItem = $("#nameItem").val();      // item name value
    var priceOfItem = $("#priceItem").val();        // item price value
    var qtyOfItem = $("#qtyItem").val();        // item qty value


    // get current item object relevant to clicked row, using itemRecordIndex
    let itemObj = items[itemRecordIndex];

    // assign new values to relevant item object's values
    itemObj.code = codeOfItem;
    itemObj.name = nameOfItem;
    itemObj.price = priceOfItem;
    itemObj.qty = qtyOfItem;

    // load the table
    loadItemTable();

    // clean the inputs values
    $("#codeItem").val("");
    $("#nameItem").val("");
    $("#priceItem").val("");
    $("#qtyItem").val("");


    // ********** special **********
    // the clicked table's row index must equal to the customer object's index of array

});
// -------------------------- The end - when click item update button --------------------------



// -------------------------- The start - when click item delete button --------------------------
$("#item-delete").on('click', () => {

    items.splice(itemRecordIndex, 1);

    // load the table
    loadItemTable();

    // clean the inputs values
    $("#codeItem").val("");
    $("#nameItem").val("");
    $("#priceItem").val("");
    $("#qtyItem").val("");

});
// -------------------------- The end - when click item delete button --------------------------



// -------------------------- The start - when click item clear button --------------------------
$("#item-clear").on('click', () => {

    // clean the inputs values
    $("#nameItem").val("");
    $("#priceItem").val("");
    $("#qtyItem").val("");

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



// -------------------------- The start - auto generate item id --------------------------
$("#newItemBtn").on('click', function () {

    var itemLength = items.length;

    if(itemLength !== 0 ) {

        var currentItemCode = items[items.length-1].code;
        var split = [];
        split = currentItemCode.split("I0");
        var id = parseInt(split[1]);
        id++;
        if(id < 10) {
            $("#codeItem").val("I00" + id);
        }else{
            $("#codeItem").val("I0" + id);
        }

    } else {
        $("#codeItem").val("I001");
    }

    // $("#priceItem").val("Rs: ");

});
// -------------------------- The end - auto generate item id --------------------------



// -------------------------- The start - when click view all item button --------------------------
$("#viewAllItem").on('click', function () {

    $("#all-items-tbl-tbody").empty();

    items.map((item, index) => {

        // want to wrap => use ` mark

        let record = `<tr>
            <td>${item.name}</td>  <!-- <td> = table data -->
        </tr>`;

        $("#all-items-tbl-tbody").append(record);
        $("#all-items-tbl-tbody").css("font-weight", 600);

    });

});
// -------------------------- The end - when click view all item button --------------------------


// -------------------------- The start - when click item search button --------------------------
$("#item-search-btn").on('click', function () {

    var itemDetail = $("#searchItem").val();

    for (let i=0; i<items.length; i++) {

        if(items[i].code === itemDetail || items[i].name === itemDetail){
            $("#searchedItemCode").val(items[i].code);
            $("#searchedItemName").val(items[i].name);
            $("#searchedItemPrice").val(items[i].price);
            $("#searchedItemQty").val(items[i].qty);

            $("#itemDetailsModalLabel").html("Item Details");

            return;
        }

        else {

            $("#itemDetailsModalLabel").html("Can't find item! Try again...");

            $("#searchedItemCode").val("No Item");
            $("#searchedItemName").val("No Item");
            $("#searchedItemPrice").val("No Item");
            $("#searchedItemQty").val("No Item");
        }

    }

});
// -------------------------- The end - when click item search button --------------------------



// -------------------------- The start - clear the item search bar's value --------------------------
$("#item-search-modal-close").on('click', function () {

    $("#searchItem").val("");

});
// -------------------------- The end - clear the item search bar's value --------------------------



/* =================================================================================================== */
/* ========================================== ORDERS PAGE ========================================== */
/* =================================================================================================== */


// -------------------------- The start - when click order nav link want to load customer IDs --------------------------
$("#nav-orders").on('click', function () {
    autoFillCurrentDate();
    loadCustomerComboBoxValues(customers, "#customersIdComboBox");
    loadItemComboBoxValues(items, "#itemsIdComboBox");
});
// -------------------------- The end - when click order nav link want to load customer IDs --------------------------



// -------------------------- The start - fill current date --------------------------
function autoFillCurrentDate() {

    var d = new Date();

    var year = d.getFullYear();
    var month = d.getMonth() + 1;

    if(month < 10){
        month = '0' + month;
    }

    var date = d.getDate();

    if(date < 10){
        date = '0' + date;
    }

    var current_date = year + "-" + month + "-" + date;

    $("#orderDate").val(current_date);

}
// -------------------------- The end - fill current date --------------------------



// ---------------- The start - when first time order page is loaded, want to generate order id  ----------------
autoGenerateOrderId("");
// --------------- The end - when first time order page is loaded, want to generate order id  ----------------



// ---------------- The start - when first time order page is loaded, want to fill total inputs ----------------
$("#subTotal").val("Rs.000.00");
$("#total").val("Rs.000.00");
// ---------------- The end - when first time order page is loaded, want to fill total inputs ----------------



// -------------------------- The start - generate order id automatically --------------------------
function autoGenerateOrderId(orderId) {

    console.log("currentOrderId: " + orderId);

    if(orderId !== "") {
        var split = [];
        split = orderId.split("O0");
        var id = Number.parseInt(split[1]);
        id++;
        if(id < 10) {
            $("#orderId").val("O00" + id);
        }else{
            $("#orderId").val("O0" + id);
        }
    } else {
        $("#orderId").val("O001");
    }

}
// -------------------------- The end - generate order id automatically --------------------------



// -------------------------- The start - load customer IDs to customer combo box --------------------------
function loadCustomerComboBoxValues(customerArray, customerComboBoxId) {

    $(customerComboBoxId).empty();

    $(customerComboBoxId).append($(`<option>`, {
        text: "choose customer ID"
    }));

    for (let i = 0; i < customerArray.length; i++) {

        var cusId = customerArray[i].id;

        $(customerComboBoxId).append($(`<option>`, {
            value: cusId,
            text: cusId
        }));
    }

}
// -------------------------- The end - load customer IDs to customer combo box --------------------------



// -------------------------- The start - load item IDs to item combo box --------------------------
function loadItemComboBoxValues(itemArray, itemComboBoxId) {

    $(itemComboBoxId).empty();

    $(itemComboBoxId).append($(`<option>`, {
        text: "choose item code"
    }));

    for (let i = 0; i < itemArray.length; i++) {

        var itemCode = itemArray[i].code;

        $(itemComboBoxId).append($(`<option>`, {
            value: itemCode,
            text: itemCode
        }));
    }

}
// -------------------------- The end - load item IDs to item combo box --------------------------



// ---------------- The start - when select a customer dropdown value , autofilled other inputs ----------------
$("#customersIdComboBox").change(function () {

    var currentSelectionCustomerId = $(this).val();

    for (let i = 0; i < customers.length; i++) {

        if(customers[i].id === currentSelectionCustomerId) {
            $("#cusId").val(customers[i].id);
            $("#cusName").val(customers[i].name);
            $("#cusAddress").val(customers[i].address);
            $("#cusPhone").val(customers[i].phone);

            return;

        } else {

            $("#cusId").val("");
            $("#cusName").val("");
            $("#cusAddress").val("");
            $("#cusPhone").val("");

        }

    }

});
// ---------------- The end - when select a customer dropdown value , autofilled other inputs ----------------



// ---------------- The start - when select a customer dropdown value , autofilled other inputs ----------------
$("#itemsIdComboBox").change(function () {

    var currentSelectionItemCode = $(this).val();

    for (let i = 0; i < items.length; i++) {

        if(items[i].code === currentSelectionItemCode) {
            $("#itemCode").val(items[i].code);
            $("#itemName").val(items[i].name);
            $("#itemPrice").val(items[i].price);
            $("#itemQtyOnH").val(items[i].qty);

            return;

        } else {

            $("#itemCode").val("");
            $("#itemName").val("");
            $("#itemPrice").val("");
            $("#itemQtyOnH").val("");

        }

    }

});
// ---------------- The end - when select a customer dropdown value , autofilled other inputs ----------------



// -------------------------- The start - add-to-cart table loading --------------------------
function loadAddToCartTable() {

    $("#add-to-cart-tbl-tbody").empty();

    addedItems.map((item, index) => {

        // want to wrap => use ` mark

        let record = `<tr>
            <td> ${item.code} </td>    <!-- <td> = table data -->
            <td> ${item.name} </td>
            <td> ${item.price} </td>
            <td> ${item.qty} </td>
            <td> ${item.price * item.qty} </td>
            <td> <button type="button" class="btn btn-danger" onclick='removeItem("${item.code}", Number.parseInt(${item.qty}))'>Remove</button> </td>
        </tr>`;

        $("#add-to-cart-tbl-tbody").append(record);
        $("#add-to-cart-tbl-tbody").css("font-weight", 600);
        $(".btn-danger").css("font-weight", 600);

    });
}
// -------------------------- The end - add-to-cart table loading --------------------------



// -------------------------- The start - when click add to cart button --------------------------
$("#addBtn").on('click', function () {

    var codeOfItem = $("#itemCode").val();
    var nameOfItem = $("#itemName").val();
    var priceOfItem = Number.parseFloat($("#itemPrice").val());
    var qtyOfItem = Number.parseInt($("#quantity").val());
    var itemTotal = priceOfItem * qtyOfItem;


    // chosen item's index of items[] array
    itemRecordIndex = items.findIndex(item => item.code === codeOfItem);
    console.log(itemRecordIndex);

    // check the typed qty, equal or lower than qtyOnHand
    if( qtyOfItem > items[itemRecordIndex].qty || !qtyOfItem) {
        showErrorAlert("Please enter a valid qty..Need to be lower than or equal to qty on hand");
        return;
    }

    // check the chosen item, include to addedItems[] array and get index
    let existingItem = addedItems.findIndex(item => item.code === codeOfItem);
    console.log("index : " + existingItem);

    if(existingItem < 0) {  // if addedItems[] array is empty, add a new object to array.

        // create an object - Object Literal
        let addedItem = {
            code: codeOfItem,
            name: nameOfItem,
            price: priceOfItem,
            qty: qtyOfItem,
            total: itemTotal
        }

        // push to the array
        addedItems.push(addedItem);

    } else {    // if addedItems[] array is not empty, want to update qty.
        addedItems[existingItem].qty += qtyOfItem;
    }

    // load the add-to-cart table
    loadAddToCartTable();

    tempItems.push(items[itemRecordIndex]);     // push the chosen item to the temporary array called tempItems[]
    items[itemRecordIndex].qty -= qtyOfItem;    // update the qtyOnHand of that chosen item in the items[] array
    $("#itemQtyOnH").val(items[itemRecordIndex].qty);   // update the qtyOnHand input of that chosen item in Select Item form

    sum += itemTotal;   // update the total when add new items

    $("#total").val(`Rs. ${sum}`);

});
// -------------------------- The end - when click add to cart button --------------------------



// -------------------------- The start - when click remove button of add-to-cart table --------------------------
function removeItem(addedItemRecord, qty) {
    console.log(addedItemRecord);
    console.log(qty);

    var filt = addedItems.filter((item,index) => {

        if(addedItemRecord === item.code) {
            addedItems.splice(index,1);

            items.filter((item,index) => {

                if(item.code === addedItemRecord) {
                    item.qty += qty;
                    loadItemComboBoxValues(items, "#itemsIdComboBox");

                    $("#itemCode").val("");
                    $("#itemName").val("");
                    $("#itemPrice").val("");
                    $("#itemQtyOnH").val("");
                    $("#quantity").val("");

                }
            });

            // load the table
            loadAddToCartTable();
        }
    });
}
// -------------------------- The start - when click remove button of add-to-cart table --------------------------



// -------------------------- The start - when input discount, auto generated sub total --------------------------
$("#discount").on('input', function () {

    // get total value and slice it 4 characters -> Extract the Sub Total value
    let subTotal = Number.parseFloat($("#total").val().slice(4));

    // get the discount input value (default to 0 if not a valid number)
    let discount = Number.parseFloat($("#discount").val()) || 0;

    // calculate the discounted total
    let discountedTotal = subTotal - ( subTotal * discount / 100 );

    // update the Sub Total with the discounted value
    $("#subTotal").val(`Rs. ${discountedTotal.toFixed(2)}`);

});
// -------------------------- The end - when input discount, auto generated sub total --------------------------



// -------------------------- The start - when type cash, auto generated balance --------------------------
$("#cash").on('input', function () {

    // get cash value
    let cashValue = Number.parseFloat($("#cash").val());

    // get the discount input value (default to 0 if not a valid number)
    let discount = Number.parseFloat($("#discount").val()) || 0;

    // get sub total value and slice it 4 characters -> Extract the Sub Total value
    let subTotal = Number.parseFloat($("#subTotal").val().slice(4));

    // get total value and slice it 4 characters -> Extract the Sub Total value
    let total = Number.parseFloat($("#total").val().slice(4));


    if( discount > 0) {

        // calculate the balance
        let balance = (cashValue - subTotal) ;

        // update the balance input
        $("#balance").val(balance.toFixed(2));

    } else {

        // calculate the balance
        let balance = (cashValue - total) ;

        // update the balance input
        $("#balance").val(balance.toFixed(2));

    }


});
// -------------------------- The end - when type cash, auto generated balance --------------------------



// -------------------------- The start - save order when click purchase button of order page --------------------------
$("#purchaseBtn").on('click', function () {

    sum = 0;

    var orderId = $("#orderId").val();
    var orderDate = $("#orderDate").val();
    var customerId = $("#cusId").val();
    var orderTotal = Number.parseFloat($("#total").val().slice(4));
    var orderDiscount = Number.parseFloat($("#discount").val());
    var orderSubTotal = Number.parseFloat($("#subTotal").val().slice(4));
    var cash = Number.parseFloat($("#cash").val());

    var chosenItems = addedItems;

    let orderValidated = checkValidation(customerId,chosenItems,orderTotal,orderDiscount,orderSubTotal,cash);

    if(orderValidated) {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#328532',
            cancelButtonColor: '#c59c35',
            confirmButtonText: 'Yes, Place Order!'

        }).then((result) => {

            if (result.isConfirmed) {

                /*let order = new OrderModel(orderId, date, customer, items, discount, total);*/

                // create an object - Object Literal
                let order = {
                    idOfOrder: orderId,
                    dateOfOrder: orderDate,
                    idOfCustomer: customerId,
                    itemsOfOrder: chosenItems,
                    totalOfOrder: orderTotal,
                    discountOfOrder: orderDiscount,
                    subTotalOfOrder:orderSubTotal
                }

                // push to the orders[] array
                orders.push(order);

                console.log(order);

                // want to reset the forms
                $("#order-section form").trigger('reset');

                // want to load combobox again
                loadItemComboBoxValues(items, "#itemsIdComboBox");
                loadCustomerComboBoxValues(customers, "#customersIdComboBox");


                // load the item table again, so we can see there was updated item table's item qty
                loadItemTable();

                // want to empty the addedItems[] array because order has done
                addedItems = [];

                // want to remove all items from cart
                loadAddToCartTable()

                // want to fill current date
                autoFillCurrentDate();

                // want to generate next order id
                autoGenerateOrderId(orderId);

                // order save pop up
                if(!orderDiscount) {
                    Swal.fire(
                        `Rs: ${orderTotal}`,
                        'The Order has been placed!',
                        'success'
                    )
                } else {
                    Swal.fire(
                        `Rs: ${orderSubTotal}`,
                        'The Order has been placed!',
                        'success'
                    )
                }

                // finally want to fill total inputs like follow
                $("#subTotal").val("Rs.000.00");
                $("#total").val("Rs.000.00");

                // update the home page's order card
                $("#orders-count").html(orders.length);

            }
        });
    }

});
// -------------------------- The end - save order when click purchase button of order page --------------------------



//-------------------------- The start - check validations when place order --------------------------
function checkValidation(customer, items, total, discount, subTotal, cash) {

    if(!customer){
        showErrorAlert("Please select a customer to place order");
        return false;
    }

    if(items.length === 0){
        showErrorAlert("Please select a item/items to place order");
        return false;
    }

    if(!cash){
        showErrorAlert("Please enter the cash amount");
        return false;
    }

    if(!discount){
        if((cash - total) < 0){
            showErrorAlert("The cash is not enough to pay the order!!!");
            return false;
        }
        return true;
    } else {
        if((cash - subTotal) < 0){
            showErrorAlert("The cash is not enough to pay the order!!!");
            return false;
        }
        return true;
    }

}
//-------------------------- The end - check validations when place order --------------------------



//-------------------------- The start - show error alert --------------------------
function showErrorAlert(message){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
    });
}
//-------------------------- The end - show error alert --------------------------





/* =================================================================================================== */
/* ========================================== ORDERS HISTORY ========================================== */
/* =================================================================================================== */


// -------------------------- The start - order history table loading --------------------------
function loadOrderHistoryTable() {

    $("#order-history-tbl-tbody").empty();

    orders.map((item, index) => {

        // want to wrap => use ` mark

        let record = `<tr>
            <td> ${item.idOfOrder} </td>    <!-- <td> = table data -->
            <td> ${item.dateOfOrder} </td>
            <td> ${item.idOfCustomer} </td>
            <td> <i class="bi bi-eye-fill ml-3"></i> ${item.itemsOfOrder.length} </td>
            <td> Rs: ${item.totalOfOrder} </td>
            <td> ${item.discountOfOrder} % </td>
            <td> Rs: ${item.subTotalOfOrder} </td>
        </tr>`;

        $("#order-history-tbl-tbody").append(record);
        $("#order-history-tbl-tbody").css("font-weight", 600);

    });

}
// -------------------------- The end - order history table loading --------------------------



// -------------------------- The start - when click view order history button --------------------------
$("#viewBtn").on('click', function () {
    loadOrderHistoryTable();
});
// -------------------------- The end - when click view order history button --------------------------



// -------------------------- The start - when click a row of order history table --------------------------
$("#order-history-tbl-tbody").on('click', 'tr', function () {

    let clickedIndex = $(this).index();
    orderIndex = clickedIndex;    // assign current row index to recordIndex variable

    console.log("index: " + clickedIndex);

    let details = "";

    // get items 1 by 1 from an order
    orders[orderIndex].itemsOfOrder.map((item) => {
        details += item.code + " - " + item.name + "\n";
    });

    // show the items of an order
    Swal.fire(details);

});

// -------------------------- The end - when click a row of order history table --------------------------