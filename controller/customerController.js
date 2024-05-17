// import array
import {customers} from "../db/db.js";

// import class
import {CustomerModel} from "../model/customerModel.js";


var customerRecordIndex;


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




// ---------------- The start - when first time order page is loaded, want to generate customer id  ----------------
autoGenerateCustomerId();
// --------------- The end - when first time order page is loaded, want to generate customer id  ----------------




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
        /*let customer = {
            id: idOfCustomer,
            name: nameOfCustomer,
            address: addressOfCustomer,
            phone: phoneOfCustomer
        }*/


        // create an object - Class Syntax
        let customer = new CustomerModel(idOfCustomer,nameOfCustomer,addressOfCustomer,phoneOfCustomer);


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
            timer: 1500,
            iconColor: '#4dc94d'
        });


        // update the home page's customer card
        $("#customer-count").html(customers.length);

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

    customers.map((item) => {

        if(item.id === idOfCustomer) {

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

                // show customer updated pop up
                Swal.fire({
                    icon: 'success',
                    title: 'Customer updated successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                    iconColor: '#4dc94d'
                });

            }

        } else {
            showErrorAlert("Customer not found ! Please try again...")
        }

    });



    // ********** special **********
    // the clicked table's row index must equal to the customer object's index of array

});
// -------------------------- The end - when click customer update button --------------------------




// -------------------------- The start - when click customer delete button --------------------------
$("#customer-delete").on('click', () => {

    var cusId = $("#customerId").val();

    customers.map((item) => {

        if(item.id === cusId){

            Swal.fire({

                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#6da959',
                cancelButtonColor: '#dcba65',
                background: '#fff1e0',
                width: '35em',
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

                    // show customer deleted pop up
                    Swal.fire({
                        icon: 'success',
                        title: 'Customer deleted successfully!',
                        showConfirmButton: false,
                        timer: 1500,
                        iconColor: '#4dc94d'
                    });

                }
            });

        } else {
            showErrorAlert("Customer not found ! Please try again...");
        }

    });

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




//-------------------------- The start - check customer validations --------------------------
function checkCustomerValidation(id, name, address, phone) {

    if(!id){    //check id field is empty or not
        showErrorAlert("ID field is required!")
        return false;
    } else {
        if(!/^C\d{3,10}$/.test(id)){
            showErrorAlert("Please enter a valid ID!  Pattern - 'C000'")
            return false;
        }
    }

    if(!name){ //check name field is empty or not
        showErrorAlert("Name field is required!");
        return false;
    } else {
        if(!/^[A-Za-z ]{2,40}$/.test(name)){
            showErrorAlert("Please enter a valid Name!  Pattern - 'Shenu / Shenu Mathew'")
            return false;
        }

    }

    if(!address){ //check address field is empty or not
        showErrorAlert("Address field is required!");
        return false;
    } else {
        if(!/^[A-Za-z\d\s\-']{2,50}$/.test(address)){
            showErrorAlert("Please enter a valid Address! Pattern - 'Colombo / Colombo-10'")
            return false;
        }
    }

    if(!phone){ //check contact field is empty or not
        showErrorAlert("Contact field is required!");
        return false;
    } else {
        if(!/^(?:077|075|072|076|071)\d{7}$/.test(phone)){
            showErrorAlert("Please enter a valid Phone Number! Pattern - '0756567234'")
            return false;
        }
    }

    return true;

}
//-------------------------- The end - check customer validations --------------------------




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

                $("#searchedCustomerId").val("Search Customer");
                $("#searchedCustomerName").val("Search Customer");
                $("#searchedCustomerAddress").val("Search Customer");
                $("#searchedCustomerPhone").val("Search Customer");
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




//-------------------------- The start - show error alert --------------------------
export function showErrorAlert(message){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
        background: '#fff1e0',
        width: '38em',
        confirmButtonColor: '#6da959',
        // iconColor: '#ec3636',
    });
}
//-------------------------- The end - show error alert --------------------------
