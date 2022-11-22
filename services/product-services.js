// CRUD - CREATE READ UPDATE DELETE
//CREATE
const createProduct = (name, imageUrl, price, section, description) => {
    return fetch("http://localhost:3000/produto", {
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
const productsList = () => fetch("http://localhost:3000/produto").then(res => res.json());

const productDetail = (id) => fetch(`http://localhost:3000/produto/${id}`).then(res => res.json());

//UPDATE

const updateProduct = (name, imageUrl, price, id, section, description) => fetch(`http://localhost:3000/produto/${id}`, {
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
    return fetch(`http://localhost:3000/produto/${id}`, {
        method: 'DELETE',
    })
}



export const productServices = {
    productsList,
    createProduct,
    deleteProduct,
    productDetail,
    updateProduct
}