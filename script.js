var cartItems = [];
var totalPrice = 0;

function addToCart(productName, price) {
    cartItems.push(productName);
    totalPrice += price;

    updateCart();
}

function updateCart() {
    var cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    for (var i = 0; i < cartItems.length; i++) {
        var li = document.createElement('li');
        li.textContent = cartItems[i];
        cartItemsElement.appendChild(li);
    }

    var totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = '$' + totalPrice;
}
