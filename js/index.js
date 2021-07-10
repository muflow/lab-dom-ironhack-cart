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
  total.innerHTML = subTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll();
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("Created!");
  const mainProductsTable = document.querySelector('tbody');
  const newProductName = document.querySelector('input[placeholder="Product Name"]');
  const newProductPrice = document.querySelector('input[placeholder="Product Price"]');

  const newProductItem = document.createElement('tr');
  newProductItem.innerHTML = `
  <tr class="product">
    <td class="name">
      <span>${newProductName.value}</span>
    </td>
    <td class="price">$<span>${newProductPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `;

  newProductItem.setAttribute('class', "product");
  mainProductsTable.appendChild(newProductItem);

  newProductItem.querySelector('.btn-remove').addEventListener('click', removeProduct);

  newProductName.value = null;
  newProductPrice.value = 0;
  
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelector('.btn-remove');

  for (let i=0; i<removeBtns.length; i++) {
    removeBtns.addEventListener('click', removeProduct);
  }
  
  

  //... your code goes here

  const removeButton = document.querySelectorAll('.btn-remove');
  removeButton.forEach(button => {
    button.addEventListener('click', removeProduct);
  });


  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});
