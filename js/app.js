const productsContainer = document.getElementById('products');

// Obtener productos de Fake Store API
const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Añadir al Carrito</button>
    `;
    productsContainer.appendChild(productElement);
  });
};

fetchProducts();