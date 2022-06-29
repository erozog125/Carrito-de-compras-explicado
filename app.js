import { obtenerProductos } from './firebase.js';
const contenedor = document.getElementById('contenedor-principal');

window.addEventListener('DOMContentLoaded', async () => {
    
  const querySnapshot = await obtenerProductos();
    querySnapshot.forEach(doc => {
        createCardProducts(doc.data());
    })
})

const createCardProducts = (producto) => {  
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
    contenedor.appendChild(product);    
};
