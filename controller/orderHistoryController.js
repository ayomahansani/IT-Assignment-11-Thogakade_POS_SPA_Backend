import {orders} from "../db/db.js";

var orderRecordIndex;


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