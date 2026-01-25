
let cart = [];

function openCart() {
  document.getElementById('cartPopup').classList.add('active');
  document.getElementById('cartOverlay').style.display = 'block';
}

function closeCart() {
  document.getElementById('cartPopup').classList.remove('active');
  document.getElementById('cartOverlay').style.display = 'none';
}

function addToCart(name, price) {
  const item = cart.find(i => i.name === name);

  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  updateCart();
}

function removeFromCart(name) {
  cart = cart.filter(i => i.name !== name);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  const cartCount = document.getElementById('cartCount');

  cartItems.innerHTML = '';
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    count += item.qty;

    cartItems.innerHTML += `
      <div class="cart-item">
        <div class="cart-item-info">
          <strong>${item.name}</strong><br>
          ${item.qty} × ${item.price} ₴
        </div>
        <button onclick="removeFromCart('${item.name}')">✖</button>
      </div>
    `;
  });

  cartTotal.textContent = total;
  cartCount.textContent = count;
}
