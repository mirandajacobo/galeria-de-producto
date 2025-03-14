export function cargarProductos(productos) {
    const contenedor = document.getElementById("productos-container");
    contenedor.innerHTML = "";

    productos.forEach(producto => {
        const productoElemento = document.createElement("div");
        productoElemento.classList.add("producto");
        productoElemento.innerHTML = `
            <img src="${producto.image}" alt="${producto.title}">
            <h3>${producto.title}</h3>
            <p>${producto.description}</p>
            <span>$${producto.price}</span>
        `;
        contenedor.appendChild(productoElemento);
    });
}