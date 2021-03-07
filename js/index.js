// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  console.log(price.innerHTML);
  console.log(quantity.value);
  //... your code goes here

  let subtotalPrice = product.querySelector('.subtotal span');
  subtotalPrice.value = price.innerHTML * quantity.value;
  console.log(subtotalPrice.value);
  
  subtotalPrice.innerHTML = subtotalPrice.value;
  return subtotalPrice.value;
}

function calculateAll() {
  
  let products = document.getElementsByClassName('product');
  let subTotal = 0;
  
  for (let i=0; i<products.length; i++) {
    subTotal += updateSubtotal(products[i])
  }
  
  let total = document.querySelector('#total-value span');
  total.textContent = subTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
