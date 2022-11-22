import { productServices } from "../services/product-services.js";

const pegaURL = new URL(window.location);
const id = pegaURL.searchParams.get('id');

const url = document.querySelector('[data-img]');
const section = document.querySelector('[data-section]');
const product = document.querySelector('[data-product]');
const price = document.querySelector('[data-price]');
const description = document.querySelector('[data-description]');

const form = document.querySelector('[data-form]');

productServices.productDetail(id)
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
        window.location.href = "produtos.html"
    })
})