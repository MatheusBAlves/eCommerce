import { productServices } from "../services/product-services.js";

const produtos = document.querySelector(".produtos")

const newProduct = (name, price, imageUrl, id) => {
    const card = document.createElement("div");
    const content = `
            <div class="">
                <img src="${imageUrl}" alt="img" class="product_img"/>
                <div class="icons">
                </div>
            </div>
            <h4 class="product_title">${name}</h4>
            <p class="product_price">${price}</p>
            <a href="/produto/${id}" class="product_link">Ver Produto</a>
    `;
    card.classList.add("product");
    card.innerHTML = content;
    return card;
}

const renderProduct = async () => {
    try {
        const productsList = await productServices.productsList();
        productsList.forEach(product => {
            produtos.appendChild(newProduct(product.name, product.price, product.imageUrl, product.id));
        })
    }
    catch (err) {
        console.log(err);
    }
}

renderProduct();
