//GET

const productsList = () => fetch("http://localhost:3000/produto").then(res => res.json());


//POST

export const productServices = {
    productsList
}