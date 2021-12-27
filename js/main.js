localStorage.clear();
const productsContainer = document.getElementById('products-container');
const cartContainer = document.getElementById('cart-container');
const btnCart = document.getElementById('btn-cart');
const vehicleFiltered = document.getElementById('products-vehicle');
const options = Array.from(vehicleFiltered.options);

renderProducts(options[0].value);


productsContainer.addEventListener('click', addCart);
btnCart.addEventListener('mouseover', renderCart);
vehicleFiltered.addEventListener('change', selectedFilter);
