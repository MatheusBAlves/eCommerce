const userList = () => fetch("https://matheusbalves.github.io/eCommerce/db.json/users").then(res => res.json());
    
export const userServices = {
    userList
}