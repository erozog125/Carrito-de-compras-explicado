import { products } from './productos.js';
let productos = products();
const main = document.querySelector('main');
// 1. Crear un array vacío que será el que recibirá los elementos que se pinten en el carrito.
let carrito = [];

const agregados = document.querySelector('.agregados');

const createCardProducts = () => {
  productos.forEach(producto => {
    const product = document.createElement('div');
    product.classList.add('product');
    const imgProduct = document.createElement('img');
    imgProduct.src = producto.imagen;
    imgProduct.alt = producto.nombre;
    const pProduct = document.createElement('p');
    pProduct.textContent = producto.nombre;
    const pPrecio = document.createElement('p');
    pPrecio.textContent = `$${producto.precio} COP`;
    const btnAgregar = document.createElement('button');
    btnAgregar.textContent = 'Agregar al carrito';
    btnAgregar.setAttribute('id',`${producto.id}`);

    product.appendChild(imgProduct);
    product.appendChild(pProduct);
    product.appendChild(pPrecio);
    product.appendChild(btnAgregar);

    main.appendChild(product);

    btnAgregar.addEventListener('click', agregarAlCarrito);
  });
};

const agregarAlCarrito = (event) => {
  // 2. validar la información que haya en el Array.
  // 3. Si el Array está vacío, agregar el producto al Array.
  // 4. Si el Array no está vacío, validar que el producto no exista en el Array.
  // 5. Si el producto no existe en el Array, agregarlo.
  // 6. Si el producto existe en el Array, sumar la cantidad.
  const id = event.target.id;
  console.log("Ingresa");
  productos.forEach(producto => {
    if (producto.id == id) {
      if (carrito.length == 0) {
        carrito.push(producto);
      }else {
        let existe = false;
        carrito.forEach(productoCarrito => {
          if (productoCarrito.id == id) {
            existe = true;
            productoCarrito.cantidad++;
          }
        });
        if (!existe) {
          carrito.push(producto);
        }
      }
    }
  });
  console.log(carrito);
  renderizarCarrito();
}

const renderizarCarrito = () => {
  agregados.innerHTML = "";
  carrito.forEach(producto => {
    crearElementosCarrito(producto);
  });
}

window.addEventListener('DOMContentLoaded', createCardProducts);

const crearElementosCarrito = (producto) => {  
  const { id, nombre, precio, cantidad } = producto;
  const contenido = document.createElement('div');
  contenido.classList.add('contenido');  
  contenido.innerHTML = ` 
  <div class="nombre">${nombre}</div>
  <div class="cantidad">${cantidad}</div>
  <div class="quitar"><button id=${id}>-</button></div>
  <div class="agregar"><button id=${id}>+</button></div>
  <div class="precio">${precio * cantidad}</div>
  <div></div>
  <div></div>
  `;    
  agregados.appendChild(contenido);
  contenido.addEventListener("click", AgregarOQuitarProducto);
}       

const AgregarOQuitarProducto = (event) => {
  const id = event.target.id;  
  const button = event.target.textContent;
  
  carrito.forEach(producto => {
    if (producto.id == id && button == "-") {
      producto.cantidad--;
      console.log(carrito);      
    }
    if (producto.id == id && button == "+") {
      producto.cantidad++;
      console.log(carrito);      
    }
    renderizarCarrito();
  });
}

  
      