export async function productosAPI() {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=8');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        return [];
    }
}

export function productos() {
    fetch('https://fakestoreapi.com/products?limit=8')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error:", error));
}

