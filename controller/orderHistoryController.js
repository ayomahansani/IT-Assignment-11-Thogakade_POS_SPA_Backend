// import array
import {orders} from "../db/db.js";
import {items} from "../db/db.js";
import {loadItemTable} from "./itemController.js";

var orderRecordIndex;

// -------------------------- The start - order history table loading --------------------------
function loadOrderHistoryTable() {
    $("#order-history-tbl-tbody").empty();

    orders.map((item, index) => {
        let record = `<tr>
            <td> ${item.idOfOrder} </td>
            <td> ${item.dateOfOrder} </td>
            <td> ${item.idOfCustomer} </td>
            <td class="items-of-order" style="display: none;">${JSON.stringify(item.itemsOfOrder)}</td>
            <td> <i class="bi bi-eye-fill ml-3"></i> ${item.itemsOfOrder.length} </td>
            <td> Rs: ${item.totalOfOrder} </td>
            <td> ${item.discountOfOrder} % </td>
            <td> Rs: ${item.subTotalOfOrder} </td>
            <td> <button type="button" class="btn btn-danger order-cancel-button">Cancel</button> </td>
        </tr>`;
        $("#order-history-tbl-tbody").append(record);
        $("#order-history-tbl-tbody").css("font-weight", 600);
    });
}

// -------------------------- The end - order history table loading --------------------------




// -------------------------- The start - when click remove button want to call cancelOrder() function --------------------------
$("#table-order-history").on('click', function (event) {
    if (event.target.classList.contains('order-cancel-button')) {
        const row = event.target.closest('tr');
        const orderId = row.querySelector('td:nth-child(1)').textContent.trim();
        const orderedItems = JSON.parse(row.querySelector('.items-of-order').textContent.trim());

        // Call the function
        cancelOrder(orderId, orderedItems);
    }
});
// -------------------------- The end - when click remove button want to call cancelOrder() function --------------------------




// -------------------------- The start - when click remove button of order history table --------------------------
function cancelOrder(orderId, orderedItems) {
    console.log(orderId);
    console.log(orderedItems);

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#6da959',
        cancelButtonColor: '#dcba65',
        background: '#fff1e0',
        width: '35em',
        confirmButtonText: 'Yes, Cancel the order!'

    }).then((result) => {

        if (result.isConfirmed) {

            // Remove the canceled order from the 'orders' array
            let orderIndex = orders.findIndex(item => item.idOfOrder === orderId);
            orders.splice(orderIndex,1);


            // Iterate through the ordered items to update the 'items' array
            orderedItems.forEach(orderedItem => {
                let itemIndex = items.findIndex(item => item.code === orderedItem.code);

                // Check if the item exists in the 'items' array
                if (itemIndex !== -1) {
                    // Increment the quantity of the item in the 'items' array
                    items[itemIndex].qty += orderedItem.qty;
                }
            });


            // Load the order history table
            loadOrderHistoryTable();

            // Load the item table
            loadItemTable();
        }
    });
}
// -------------------------- The start - when click remove button of order history table --------------------------




// -------------------------- The start - when click view order history button --------------------------
$("#viewBtn").on('click', function () {
    loadOrderHistoryTable();
});
// -------------------------- The end - when click view order history button --------------------------




// -------------------------- The start - when click a row of order history table --------------------------
$("#order-history-tbl-tbody").on('click', 'tr', function () {

    let index = $(this).index();
    orderRecordIndex = index;  // assign current row index to recordIndex variable

    console.log("index: " + index);

    let details = "/  ";

    // get items 1 by 1 from an order and show them
    orders[orderRecordIndex].itemsOfOrder.map((item) => {
        details += " " + item.code + "  -  " + item.name + "  -  " + item.qty + "  /  ";
    });

    // show the items of an order
    Swal.fire({
        title: 'Item Details',
        text: details,
        background: '#fff1e0',
        width: '35em',
        confirmButtonColor: '#eac237',
        color: '#167216'
    });

});
// -------------------------- The end - when click a row of order history table --------------------------