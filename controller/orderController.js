import {orders} from "../db/db.js";
import {customers} from "../db/db.js";
import {items} from "../db/db.js";

import {OrderModel} from "../model/orderModel.js";
import {ItemModel} from "../model/itemModel.js";

import {loadItemTable} from "./itemController.js";
import {showErrorAlert} from "./customerController.js";

// create temporary arrays
let addedItems = [];
let tempItems = [];


let sum = 0;
var itemRecordIndex;
var addedItemIndex;


// -------------------------- The start - fill current date --------------------------
export function autoFillCurrentDate() {

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
$("#subTotal").val("Rs:000.00");
$("#total").val("Rs:000.00");
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
export function loadCustomerComboBoxValues(customerArray, customerComboBoxId) {

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
export function loadItemComboBoxValues(itemArray, itemComboBoxId) {

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

        addedItemIndex = index;

        // want to wrap => use ` mark

        let record = `<tr>
            <td> ${item.code} </td>    <!-- <td> = table data -->
            <td> ${item.name} </td>
            <td> Rs: ${item.price} </td>
            <td> ${item.qty} </td>
            <td> ${item.price * item.qty} </td>
            <td> <button type="button" class="btn btn-danger item-remove-button">Remove</button> </td>
        </tr>`;

        $("#add-to-cart-tbl-tbody").append(record);
        $("#add-to-cart-tbl-tbody").css("font-weight", 600);
        $(".btn-danger").css("font-weight", 600);

    });
}
// -------------------------- The end - add-to-cart table loading --------------------------


$("#table-add-to-cart").on('click', function (event) {

    if (event.target.classList.contains('item-remove-button')) {
        const row = event.target.closest('tr');
        const code = row.querySelector('td:nth-child(1)').textContent.trim();
        const qty = parseInt(row.querySelector('td:nth-child(4)').textContent.trim());
        const price = parseFloat(row.querySelector('td:nth-child(3)').textContent.replace('Rs:', '').trim());
        removeItem(code, qty, price);
    }
});



// -------------------------- The start - when click remove button of add-to-cart table --------------------------
function removeItem(addedItemRecord, qty, unitPrice) {
    console.log(addedItemRecord);
    console.log(qty);
    console.log(unitPrice);
    var total = unitPrice * qty ;


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

                    sum -= total;
                    $("#total").val(`Rs: ${sum}`);
                }
            });

            // load the table
            loadAddToCartTable();
        }
    });
}
// -------------------------- The start - when click remove button of add-to-cart table --------------------------



// -------------------------- The start - when click add to cart button --------------------------
$("#addBtn").on('click', function () {

    var codeOfItem = $("#itemCode").val();
    var nameOfItem = $("#itemName").val();
    var priceOfItem = Number.parseFloat($("#itemPrice").val());
    var qtyOfItem = Number.parseInt($("#quantity").val());
    var itemTotal = priceOfItem * qtyOfItem;


    if(codeOfItem !== "") {

        // chosen item's index of items[] array
        itemRecordIndex = items.findIndex(item => item.code === codeOfItem);
        console.log(itemRecordIndex);

        // check the typed qty, equal or lower than qtyOnHand
        if( !/^\d{1,10}$/.test($("#quantity").val()) || qtyOfItem > items[itemRecordIndex].qty || !qtyOfItem ) {
            showErrorAlert("Please enter a valid qty..Need to be lower than or equal to qty on hand");
            return;
        }

        // check the chosen item, include to addedItems[] array and get index
        let existingItem = addedItems.findIndex(item => item.code === codeOfItem);
        console.log("index : " + existingItem);

        if(existingItem < 0) {  // if addedItems[] array is empty, add a new object to array.

            // create an object - Object Literal
            /*let addedItem = {
                code: codeOfItem,
                name: nameOfItem,
                price: priceOfItem,
                qty: qtyOfItem,
                total: itemTotal
            }*/


            // create an object - Class Syntax
            let addedItem = new ItemModel(codeOfItem,nameOfItem,priceOfItem,qtyOfItem,itemTotal);


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

        $("#total").val(`Rs: ${sum}`);

    } else {
        showErrorAlert("Please select an item / items to add to cart!");
    }


});
// -------------------------- The end - when click add to cart button --------------------------



// -------------------------- The start - when input discount, auto generated sub total --------------------------
$("#discount").on('input', function () {

    // get total value and slice it 4 characters -> Extract the Sub Total value
    let subTotal = Number.parseFloat($("#total").val().slice(4));

    // get the discount input value (default to 0 if not a valid number)
    let discount = Number.parseFloat($("#discount").val()) || 0;

    // calculate the discounted total
    let discountedTotal = subTotal - ( subTotal * discount / 100 );

    // update the Sub Total with the discounted value
    $("#subTotal").val(`Rs: ${discountedTotal.toFixed(2)}`);

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

    let orderValidated = checkOrderValidation(customerId,chosenItems,orderTotal,orderDiscount,orderSubTotal,cash);

    if(orderValidated) {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#6da959',
            cancelButtonColor: '#dcba65',
            background: '#fff1e0',
            width: '35em',
            confirmButtonText: 'Yes, Place Order!'

        }).then((result) => {

            if (result.isConfirmed) {

                /*let order = new OrderModel(orderId, date, customer, items, discount, total);*/

                // create an object - Object Literal
                /*let order = {
                    idOfOrder: orderId,
                    dateOfOrder: orderDate,
                    idOfCustomer: customerId,
                    itemsOfOrder: chosenItems,
                    totalOfOrder: orderTotal,
                    discountOfOrder: orderDiscount,
                    subTotalOfOrder:orderSubTotal
                }*/


                // create an object - Class Syntax
                let order = new OrderModel(orderId,orderDate,customerId,chosenItems,orderTotal,orderDiscount,orderSubTotal);


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
                    Swal.fire({
                        icon: 'success',
                        title: `Rs: ${orderTotal}`,
                        text: 'The Order has been placed!',
                        background: '#fff1e0',
                        width: '35em',
                        confirmButtonColor: '#eac237',
                        iconColor: '#4dc94d'
                    });
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: `Rs: ${orderSubTotal}`,
                        text: 'The Order has been placed!',
                        background: '#fff1e0',
                        width: '35em',
                        confirmButtonColor: '#eac237',
                        iconColor: '#4dc94d'
                    });
                }

                // finally want to fill total inputs like follow
                $("#subTotal").val("Rs:000.00");
                $("#total").val("Rs:000.00");

                // update the home page's order card
                $("#orders-count").html(orders.length);

            }
        });
    }

});
// -------------------------- The end - save order when click purchase button of order page --------------------------



//-------------------------- The start - check validations when place order --------------------------
function checkOrderValidation(customer, chosenItems, total, discount, subTotal, cash) {

    if(!customer){
        showErrorAlert("Please select a customer to place order!");
        return false;
    }

    if(chosenItems.length === 0){
        showErrorAlert("Please select and add to cart an item / items to place order!");
        return false;
    }

    if(!cash){
        showErrorAlert("Please enter the cash amount!");
        return false;
    }

    if(!discount  || discount === 0 ){
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





// <td> <button type="button" class="btn btn-danger" onclick='removeItem("${item.code}", Number.parseInt(${item.qty}), Number.parseFloat(${item.price}))'>Remove</button> </td>
