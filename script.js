let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartBody = document.getElementById("cart-body");
  const totalSpan = document.getElementById("total");
  cartBody.innerHTML = "";

  cart.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price.toFixed(2)}</td>
      <td><button onclick="removeFromCart(${index})">Remove</button></td>
    `;
    cartBody.appendChild(row);
  });

  totalSpan.textContent = total.toFixed(2);//textContent us element ke andar ka text update karta hai.
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add items before placing an order.");
    return;
  }

  let confirmation = confirm("Do you want to place the order?");
  if (confirmation) {
    alert("Thank you! Your order has been placed.");
    // Clear cart
    cart = [];
    total = 0;
    updateCart();
  }
}


function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}
