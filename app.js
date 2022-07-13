import { obtenerProductos,agregarACarrito, obtenerPrecompra,actualizarPrecompra } from "./firebase.js";
const contenedor = document.getElementById("contenedor-principal");

window.addEventListener("DOMContentLoaded", () => {
  contenedor.innerHTML = "";
  obtenerProductos((querySnapshot) => {  
  querySnapshot.forEach((doc) => {
   createCardProducts(doc.data(), doc.data().sku);
  });
 });
});

const createCardProducts = (producto, id) => {
 const product = document.createElement("div");
 product.classList.add("product");
 const imgProduct = document.createElement("img");
 imgProduct.src = producto.imagen;
 imgProduct.alt = producto.nombre;
 const pProduct = document.createElement("p");
 pProduct.textContent = producto.nombre;
 const pPrecio = document.createElement("p");
 pPrecio.textContent = `$ ${producto.precio} COP`;
 const btnAgregar = document.createElement("button");
 btnAgregar.textContent = "Agregar al carrito";
 btnAgregar.setAttribute("id", `${id}`);
 product.appendChild(imgProduct);
 product.appendChild(pProduct);
 product.appendChild(pPrecio);
 product.appendChild(btnAgregar);
 contenedor.appendChild(product);

  btnAgregar.addEventListener("click", event => {    
    const id = event.target.id;

    const imgProductoActual = event.target.parentNode.childNodes[0].src;
    const nombreProductoActual = event.target.parentNode.childNodes[1].textContent;
    const precioProductoActual = Number(event.target.parentNode.childNodes[2].textContent.split(' ')[1]);
    let cantidadProductoActual = 1;
    const productoActual = {sku:id, cantidad: cantidadProductoActual, imagen: imgProductoActual, nombre: nombreProductoActual, precio: precioProductoActual };    

    obtenerPrecompra((querySnapshot) => {
      const existe = querySnapshot.docs.some(doc => doc.id === id);
      if (!existe) {
        sumarACarrito(productoActual,id);
      }else {        
        actualizarCarrito(id,150);
      }
    })
    
    
});
} 

function sumarACarrito(producto,id) {
  agregarACarrito(producto,id);
  console.log('Agregado');
}

function actualizarCarrito(id,cantidad) {  
  actualizarPrecompra(id,cantidad);
  console.log('Actualizado');
}


