export function crearProducto(producto) {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img src="${producto.image}" alt="${producto.title}">
        <h3>${producto.title}</h3>
        <p>${producto.description}</p>
        <span>$${producto.price}</span>
    `;
    return div;
}