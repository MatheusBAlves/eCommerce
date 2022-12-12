import { productServices } from "../services/product-services.js";

const produtos = document.querySelector(".produtos");

const pegaURL = new URL(window.location);
const id = pegaURL.searchParams.get('id');
console.log(id)

function ehAdmin() {
    if(id == 1) {
        return true;
    }
    return false
}

const newProduct = (name, category, price, imageUrl, id) => {
    const card = document.createElement("div");
    let content = '';
    if (ehAdmin()) {
        content = `
        <div>
            <img src="${imageUrl}" alt="img" class="product_img"/>
            <div class="icons">
                <button class='button_product button_product--delete'>
                    Excluir
                </button>
                <button class="button_product button_product--edit">
                <a href="adicionarProduto.html?id=${id}" alt="">Editar</a>
                </button>
            </div>
        </div>
        <h4 class="product_title">${name} - ${category}</h4>
        <p class="product_price">${price}</p>
        <p class="product_id">#${id}</p>
        `;
    }else {
        content = `
        <div>
            <img src="${imageUrl}" alt="img" class="product_img"/>
        </div>
        <h4 class="product_title">${name} - ${category}</h4>
        <p class="product_price">${price}</p>
        <p class="product_id">#${id}</p>
        <a href="/produto.html?id=${id}" class="product_link">Ver Produto</a>
        `;
    }

    card.classList.add("product");
    card.dataset.id = id;
    card.innerHTML = content;
    return card;
}

const renderProduct = async () => {
    try {
        const productsList = await productServices.productsList();
        productsList.forEach(product => {
            produtos.appendChild(newProduct(product.name, product.section, product.price, product.imageUrl, product.id));
        })
    }
    catch (err) {
        console.log(err);
    }
}


produtos.addEventListener('click', (e) => {
    let ehBotaoDelete = e.target.className == 'button_product button_product--delete';
    if (ehBotaoDelete) {
        const product = e.target.closest('[data-id]');
        let id = product.dataset.id;
        productServices.deleteProduct(id);
    }
})

function admin() {
    if(!ehAdmin()) {
        const addProduct = document.querySelector('#add_product');
        console.log(addProduct);
        addProduct.remove();
    }
    else {
        const loginButton = document.querySelector('#loginButton');
        loginButton.remove();
    }
    renderProduct();
}
admin()

