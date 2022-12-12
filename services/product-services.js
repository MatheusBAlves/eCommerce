// CRUD - CREATE READ UPDATE DELETE
//CREATE
const createProduct = (name, imageUrl, price, section, description) => {
    return fetch("https://matheusbalves.github.io/eCommerce/db.json/produto", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            imageUrl: imageUrl,
            price: price,
            id: productsList.length,
            alt: "Product",
            section: section,
            description: description
        })
    })
        .then(res => {
            return res.body;
        })
}

//READ
const productsList = () => fetch("https://matheusbalves.github.io/eCommerce/db.json").then(res => res.json());

const productDetailId = (id) => fetch(`https://matheusbalves.github.io/eCommerce/db.json/produto/${id}`).then(res => res.json());


//UPDATE

const updateProduct = (name, imageUrl, price, id, section, description) => fetch(`https://matheusbalves.github.io/eCommerce/db.json/produto/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: name,
        imageUrl: imageUrl,
        price: price,
        section: section,
        description: description
    })
})
    .then(res => {
        return res.json()
    })


//DELETE

const deleteProduct = (id) => {
    return fetch(`https://matheusbalves.github.io/eCommerce/db.json/produto/${id}`, {
        method: 'DELETE',
    })
}



export const productServices = {
    productsList,
    createProduct,
    deleteProduct,
    productDetailId,
    updateProduct
}