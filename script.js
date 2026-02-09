const productsData = [
  { name: "Pizza Muzzarella", price: 5000, category: "Pizzas" },
  { name: "Pizza Napolitana", price: 5500, category: "Pizzas" },

  { name: "Hamburguesa Clásica", price: 4500, category: "Hamburguesas" },
  { name: "Hamburguesa Doble Cheese", price: 6000, category: "Hamburguesas" },

  { name: "Lomito Completo", price: 6500, category: "Lomitos" },
  { name: "Lomito XXL", price: 8000, category: "Lomitos" },

  { name: "Milanesa Clásica", price: 5200, category: "Milanesas" },
  { name: "Milanesa Napolitana", price: 5900, category: "Milanesas" },
  { name: "Milanesa a Caballo", price: 6200, category: "Milanesas" },

  { name: "Flan Casero", price: 2000, category: "Postres" },
  { name: "Brownie con Helado", price: 2800, category: "Postres" },
  { name: "Chocotorta Premium", price: 3200, category: "Postres" },

  { name: "Coca Cola 1.5L", price: 2500, category: "Bebidas" },
  { name: "Agua Mineral", price: 1500, category: "Bebidas" }
];

let cart = [];

function showCategory(category) {
  document.getElementById("title").innerText = category;
  const container = document.getElementById("products");
  container.innerHTML = "";

  productsData
    .filter(p => p.category === category)
    .forEach(p => {
      container.innerHTML += `
        <div class="card">
          <h3>${p.name}</h3>
          <p>$${p.price}</p>
          <button onclick="addToCart('${p.name}', ${p.price})">
            Agregar 🛒
          </button>
        </div>
      `;
    });
}

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function renderCart() {
  const list = document.getElementById("cartItems");
  list.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    list.innerHTML += `
      <li>
        ${item.name} - $${item.price}
        <button onclick="removeItem(${index})">❌</button>
      </li>
    `;
  });

  document.getElementById("total").innerText = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function clearCart() {
  cart = [];
  renderCart();
}

function sendWhatsApp() {
  let message = "Hola! Quiero pedir:\n\n";
  cart.forEach(item => {
    message += `- ${item.name} ($${item.price})\n`;
  });

  message += `\nTotal: $${document.getElementById("total").innerText}`;

  window.open("https://wa.me/542644517816?text=" + encodeURIComponent(message));
}

showCategory("Pizzas");