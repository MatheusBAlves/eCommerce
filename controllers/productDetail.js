import { productServices } from "../services/product-services.js";

//Produtos similares

const pegaURL = new URL(window.location);
const id = pegaURL.searchParams.get('id');
const similar = document.querySelector('.produtos-similares .wrapper')

const renderSimilarProducts = async () => {
    try {
        const element = 6;
        const sectionProducts = document.querySelector('.section_products');
        const mainProduct = await productServices.productDetailId(id);
        const lista = await productServices.productsList();
        lista.forEach(product => {
            if (product.section === mainProduct.section
                && product.id != mainProduct.id 
                && sectionProducts.childElementCount < element
                ) {
                sectionProducts.appendChild(similarProduct(product.name, product.price, product.imageUrl, product.id));
            }
        });
        if (sectionProducts.childElementCount == 0) {
            sectionProducts.remove();
            const card = document.createElement("p");
            const content = "Nenhum produto da mesma categoria!";
            card.innerHTML = content;
            card.classList.add('aviso')
            similar.append(card);
        }
    }
    catch (err) {
        console.log(err);
    }
}

const similarProduct = (name, price, imageUrl, id) => {
    const card = document.createElement("div");
    const content = `
            <img src="${imageUrl}" alt="img" class="product_img"/>
            <h4 class="product_title">${name}</h4>
            <p class="product_price">${price}</p>
            <a href="/produto.html?id=${id}" class="product_link">Ver Produto</a>
    `;
    card.classList.add("product");
    card.innerHTML = content;
    return card;
}

//produto principal

const main = document.querySelector('.section_main');

const mainProduct = (nome, img, preco, categoria, descricao) => {
    const card = document.createElement('section');
    const content = `
    <div class="wrapper" data-main=${categoria}>
        <img src="${img}" alt="" class="main_img" />
        <div class="wrapper_text">
            <h2 class="main_product_title">${nome}</h2>
            <p class="main_product_price">R$ ${preco}</p>
            <p class="main_product_description">
              ${descricao}
            </p>
        </div>
    </div>
    `;
    card.classList.add('main_product');
    card.innerHTML = content;
    return card;
}

const renderMainProduct = async () => {
    try {
        const product = await productServices.productDetailId(id);
        main.appendChild(mainProduct(product.name, product.imageUrl, product.price, product.section, product.description));

    }
    catch (err) {
        console.log(err);
    }
}

renderMainProduct();
renderSimilarProducts();
