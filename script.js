'use strict'

document.getElementById('addFormData').addEventListener('click', function () {

    let first_name = document.getElementById('fname');
    let last_name = document.getElementById('lname');
    let gender = document.getElementById('gender');
    let state_name = document.getElementById('state');
    let country_name = document.getElementById('country');
    let checked_food = document.getElementsByClassName('form-check-input');
    let table = document.getElementById('info_table');
    let row_count = table.rows.length;
    let row = table.insertRow(row_count);
    row.insertCell(0).innerHTML = `${first_name.value} ${last_name.value}`;
    row.insertCell(1).innerHTML = gender.value;
    row.insertCell(2).innerHTML = state_name.value;
    row.insertCell(3).innerHTML = country_name.value;
    for (let i = 0; i < checked_food.length; i++) {
        if (checked_food[i].checked) {
            row.insertCell(4).innerHTML = checked_food[i].value;
        }
    }
    row.insertCell(5).innerHTML = '<input type="button" value="Delete" onClick="delete_row(this)">';
});

function delete_row(data) {
    let index = data.parentNode.parentNode.rowIndex;
    let table = document.getElementById('info_table');
    let row_count = table.rows.length;
    let row = table.deleteRow(index);
}