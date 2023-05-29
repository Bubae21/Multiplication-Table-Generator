let no_of_table = document.getElementById('number_of_table')
let table_length = document.getElementById('table_length')
let generate = document.getElementById('generate')
let result = document.querySelector('.result')


generate.addEventListener('click', function () {

    let output = ''

    let start_table_no = 1



while (start_table_no <= no_of_table.value) {
    output += `<div class ="table">
    <h3 class ="table-title">${start_table_no} Multiplication Table</h3>`

let start_length = 1 

while (start_length <= table_length.value) {
output += `${start_table_no} X ${start_length} = ${(start_table_no*start_length)} <br>`

    start_length++
}
 output += `</div>`
  start_table_no++
}
result.innerHTML = output


})


