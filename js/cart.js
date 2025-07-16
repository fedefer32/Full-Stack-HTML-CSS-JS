let cart = [];

const openCartBtn = document.getElementById('openCart');
const cartModal = document.getElementById('cartModal');
const closeCartBtn = document.getElementById('closeCart');
const cartItemsList = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

// Función para abrir y cerrar el carrito
openCartBtn.addEventListener('click', () => {
  cartModal.style.display = 'flex';
  renderCart();
});

closeCartBtn.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

// Agregar producto al carrito
const addToCart = (productId) => {
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(product => {
      const existingProduct = cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      renderCart();
    });
};

// Mostrar el carrito
const renderCart = () => {
  cartItemsList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item.title} x${item.quantity}</span>
      <span>$${(item.price * item.quantity).toFixed(2)}</span>
      <button onclick="removeFromCart(${item.id})">Eliminar</button>
    `;
    cartItemsList.appendChild(li);
    total += item.price * item.quantity;
  });

  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
};

// Eliminar producto del carrito
const removeFromCart = (productId) => {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
};

// Función de checkout (vaciar carrito)
checkoutBtn.addEventListener('click', () => {
  alert('Compra realizada');
  cart = [];
  renderCart();
});