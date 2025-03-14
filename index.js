import { productosAPI } from "./api.js";
import { cargarProductos } from "./cargarProductos.js";

document.addEventListener("DOMContentLoaded", async () => {
    const productos = await productosAPI();
    cargarProductos(productos);
});