import { productServices } from "../services/product-services.js";

const form = document.querySelector('[data-product=form]');

const pegaURL = new URL(window.location);
const id = pegaURL.searchParams.get('id');

const url = document.querySelector('[data-tipo=product_img]');
const section = document.querySelector('[data-tipo=product_section]');
const product = document.querySelector('[data-tipo=product_product]');
const price = document.querySelector('[data-tipo=product_price]');
const description = document.querySelector('[data-tipo=product_description]');
const title = document.querySelector('.add_product_title');
const buttonForm = document.querySelector('.product_button');

// CREATE PRODUCT
if (id == null) {
    title.innerHTML = "Adicionar novo produto";
    buttonForm.innerHTML = "Adicionar produto";
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUrl = url.value;
        const newSection = section.value;
        const newProduct = product.value;
        const newPrice = price.value;
        const newDescription = description.value;

        productServices.createProduct(newProduct, newUrl, newPrice, newSection, newDescription).then(() => {
            window.location.href = "todosProdutos.html?id=1"
        })
    });
}
// UPDATE PRODUCT
else {
    title.innerHTML = "Atualizar produto";
    buttonForm.innerHTML = "Atualizar produto";
    productServices.productDetailId(id)
        .then(productDetail => {
            product.value = productDetail.name;
            url.value = productDetail.imageUrl;
            price.value = productDetail.price;
            section.value = productDetail.section;
            description.value = productDetail.description;
        });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        productServices.updateProduct(product.value, url.value, price.value, id, section.value, description.value)
            .then(() => {
                window.location.href = "todosProdutos.html?id=1"
            })
    })
}


