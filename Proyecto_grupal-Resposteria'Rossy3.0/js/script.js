// Carrito de compras
let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const container = document.getElementById("carrito-items");
  const total = document.getElementById("total");

  if (carrito.length === 0) {
    container.innerHTML = "<p>No hay productos en el carrito.</p>";
    total.textContent = "$0.00";
    return;
  }

  let html = "";
  let suma = 0;

  carrito.forEach(item => {
    html += `<div class="card mb-2">
                <div class="card-body">
                  <p>${item.nombre} - $${item.precio.toFixed(2)}</p>
                </div>
              </div>`;
    suma += item.precio;
  });

  container.innerHTML = html;
  total.textContent = `$${suma.toFixed(2)}`;
}

function finalizarCompra() {
  alert("Gracias por tu compra. ¡Hasta pronto!");
  carrito = [];
  actualizarCarrito();
}
// agregrar carritoen catalogo
function agregarAlCarrito(nombre, precio) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push({ nombre, precio });
  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert(nombre + " ha sido agregado al carrito.");
}
