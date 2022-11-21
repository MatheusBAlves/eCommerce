import { productServices } from "../services/product-services.js";

const newCategory = (category) => {
    const card = document.createElement("div");
    const content = `
    <div class="section_titles">
        <h3 class="section_title">${category}</h3>
        <p class="section_more">
            Ver tudo
            <img src="./assets/Vector.png" alt="seta" />
        </p>
    </div>
    <div class="section_products" id="${category}" data-product="${category}"">
    </div>
    `;

    card.classList.add("categoria");
    card.id = category;
    card.innerHTML = content;
    return card;
}

const sectionProducts = document.querySelector(".section");

const renderCategory = async () => {
    try {
        let categorias = {};
        const productsList = await productServices.productsList();

        productsList.forEach(product => {
            categorias[product.section] = categorias[product.section] ? categorias[product.section] + 1 : 1;
        });
        console.log(categorias);

        Object.keys(categorias).forEach(categoria => {
            sectionProducts.appendChild(newCategory(categoria));
        });
        const products = document.querySelectorAll("[data-product]");
        renderProduct(products);
    }
    catch (err) {
        console.log(err);
    }
}

renderCategory();

const newProduct = (name, price, imageUrl, id) => {
    const card = document.createElement("div");
    const content = `
            <img src="${imageUrl}" alt="img" class="product_img"/>
            <h4 class="product_title">${name}</h4>
            <p class="product_price">${price}</p>
            <a href="/produto/${id}" class="product_link">Ver Produto</a>
    `;
    card.classList.add("product");
    card.innerHTML = content;
    return card;
}

const renderProduct = async (products) => {
    try {
        console.log(products);
        const productsList = await productServices.productsList();
        products.forEach(category => {
            productsList.forEach(product => {
                if (category.dataset.product == product.section) {
                    if(category.childElementCount < 6){
                        category.appendChild(newProduct(product.name, product.price, product.imageUrl, product.id));
                    }
                };
            });
        })
    } catch (err) {
        console.log(err);
    }
}