var quantityInputs = document.querySelectorAll('.quantity');
quantityInputs.forEach(function(input) {
    input.addEventListener('input', function() {
        calculateSubtotal(this);
    });
});

function calculateSubtotal(input) {
    // Get the price per unit
    var pricePerUnit = parseFloat(input.parentElement.nextElementSibling.textContent.replace('$', ''));
    // Get the quantity
    var quantity = parseInt(input.value);
    // Calculate the subtotal
    var subtotal = pricePerUnit * quantity;
    // Update the subtotal cell
    input.parentElement.nextElementSibling.nextElementSibling.textContent = '$' + subtotal.toFixed(2);
    // Recalculate total
    calculateTotal();
}

function calculateTotal() {
    var subtotals = document.querySelectorAll('.subTotal');
    var total = 0;
    subtotals.forEach(function(subtotal) {
        total += parseFloat(subtotal.textContent.replace('$', ''));
    });
    document.querySelector('.total').textContent = '$' + total.toFixed(2);
}

function removeRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    // Recalculate total after removing row
    calculateTotal();
}