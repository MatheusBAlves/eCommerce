import { productServices } from "../services/product-services.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = e.target.querySelector('[data-img]').value;
    const section = e.target.querySelector('[data-section]').value;
    const product = e.target.querySelector('[data-product]').value;
    const price = e.target.querySelector('[data-price]').value;
    const description = e.target.querySelector('[data-description]').value;

    productServices.createProduct(product, url, price, "product", section, description);
});