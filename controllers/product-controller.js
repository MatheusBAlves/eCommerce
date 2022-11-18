import { productServices } from "../services/product-services.js";

const newProduct = (name, price, imageUrl) => {
    const card = document.createElement("div");
    const content = `
        
            <img src="${imageUrl}" alt="img" class="product_img"/>
            <h4 class="product_title">${name}</h4>
            <p class="product_price">${price}</p>
            <a href="" class="product_link">Ver Produto</a>
    
    `;
    card.classList.add("product")
    card.innerHTML = content;
    return card;
}

const products = document.querySelector("[data-product]");

const render = async () => {
    try {
        const productsList = await productServices.productsList();
        productsList.forEach(product => {
            products.appendChild(newProduct(product.name, product.price, product.imageUrl));
        });
    }catch(err) {
        console.log(err);
    }
}

render();