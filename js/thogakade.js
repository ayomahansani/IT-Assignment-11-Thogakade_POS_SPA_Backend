// create arrays
var customers = [];
var items = [];
var orders = [];

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


    // get current customer object relevant to clicked row, using customerRecordIndex
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



// -------------------------- The start - auto generate customer id --------------------------
$("#newCusBtn").on('click', function () {

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

});
// -------------------------- The end - auto generate customer id --------------------------



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

            $("#customerDetailsModalLabel").html("Can't find customer! Try again...");

            $("#searchedCustomerId").val("No Customer");
            $("#searchedCustomerName").val("No Customer");
            $("#searchedCustomerAddress").val("No Customer");
            $("#searchedCustomerPhone").val("No customer");
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
    autoGenerateOrderId();
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



// -------------------------- The start - generate order id automatically --------------------------
function autoGenerateOrderId() {

    var currentOrderId = $("#orderId").val();

    if(currentOrderId !== "") {
        var split = [];
        split = currentOrderId.split("O0");
        var id = parseInt(split[1]);
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



// -------------------------- The start - when select a customer dropdown value , autofilled other inputs --------------------------
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
// -------------------------- The end - when select a customer dropdown value , autofilled other inputs --------------------------



// -------------------------- The start - when select a customer dropdown value , autofilled other inputs --------------------------
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
// -------------------------- The end - when select a customer dropdown value , autofilled other inputs --------------------------



// -------------------------- The start - add-to-cart table loading --------------------------
function loadAddToCartTable() {

    $("#add-to-cart-tbl-tbody").empty();

    orders.map((item, index) => {

        var currentIndex = index;

        // want to wrap => use ` mark

        let record = `<tr>
            <td>${item.code}</td>    <!-- <td> = table data -->
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.qty}</td>
            <td>${item.total}</td>
            <td> <button type="button" class="btn btn-danger" id="item-remove-btn" onclick='removeItem("${item.code}")'>Remove</button> </td>
        </tr>`;

        $("#add-to-cart-tbl-tbody").append(record);
        $("#add-to-cart-tbl-tbody").css("font-weight", 600);
        $("#item-remove-btn").css("font-weight", 600);

    });
}
// -------------------------- The end - add-to-cart table loading --------------------------



// -------------------------- The start - when click add to cart button --------------------------
$("#addBtn").on('click', function () {

    var codeOfItem = $("#itemCode").val();
    var nameOfItem = $("#itemName").val();
    var priceOfItem = $("#itemPrice").val();
    var qtyOnHOfItem = $("#itemQtyOnH").val();

    var qtyOfItem = $("#quantity").val();

    // create an object - Object Literal
    let order = {
        code: codeOfItem,
        name: nameOfItem,
        price: priceOfItem,
        qty: qtyOfItem,
        total: priceOfItem * qtyOfItem
    }

    // push to the array
    orders.push(order);

    // load the table
    loadAddToCartTable();

});

// -------------------------- The start - when click add to cart button --------------------------



// -------------------------- The start - when click add to cart button --------------------------
function removeItem(orderRecord) {
    console.log(orderRecord);
}


